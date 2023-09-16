import {useAtomValue} from "jotai"

import {calculate_amr} from "formulas/Amr"
import {calculate_bmi} from "formulas/Bmi"
import {calculate_bmr} from "formulas/Bmr"

import {useWeightProjection} from "hooks/useWeightProjection"

import {activity_level_atom} from "atoms/goal/ActivityLevel"
import {calorie_target_atom} from "atoms/goal/CalorieTarget"
import {projection_days_atom} from "atoms/goal/Days"
import {WeightGoal, goal_atom} from "atoms/goal/Goal"

import {age_atom} from "atoms/body/Age"
import {gender_atom} from "atoms/body/Gender"
import {height_atom} from "atoms/body/Height"

/**
 * Represents the estimation data for a specific date.
 */
type EstimationData = {
  date: string
  weight: string
  bmi: string
  amr: string
  calories: string
}

/**
 * Formats a date into a string with "MM/DD/YYYY" format.
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
const format_date = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

/**
 * Calculates the calorie target based on the goal and initial calorie target.
 * @param {WeightGoal} goal - The weight goal (e.g., "LOSE_WEIGHT").
 * @param {number} initial_calorie_target - The initial calorie target.
 * @returns {number} The calculated calorie target.
 */
const calculate_calorie_target = (
  goal: WeightGoal,
  initial_calorie_target: number
): number => {
  // Determine the calorie multiplier based on the goal
  const calorie_multiplier = goal === "LOSE_WEIGHT" ? -1 : 1

  // Calculate the calorie target
  return initial_calorie_target * calorie_multiplier
}

/**
 * Custom hook for calculating estimation data.
 * @returns {EstimationData[]} An array of estimation data for multiple days.
 */
export const useEstimationData = (): EstimationData[] => {
  // Get the values from Jotai atoms
  const projection_days = useAtomValue(projection_days_atom)
  const {value: height} = useAtomValue(height_atom)
  const {value: age} = useAtomValue(age_atom)
  const goal = useAtomValue(goal_atom)
  const initial_calorie_target = useAtomValue(calorie_target_atom)
  const gender = useAtomValue(gender_atom)
  const activity_level = useAtomValue(activity_level_atom)
  const weight_projection = useWeightProjection()

  // Initialize the start date and offsets for the next X days
  const start_date = new Date()
  start_date.setDate(start_date.getDate() + 1)
  const offsets = Array.from({length: projection_days}, (_, i) => i)

  // Calculate the calorie target
  const calorie_target: number = calculate_calorie_target(
    goal,
    initial_calorie_target
  )

  // Calculate estimation data for each day
  const estimation_data = offsets.map((offset, i): EstimationData => {
    // Calculate the date for the current day
    const current_date = new Date(start_date)
    current_date.setDate(start_date.getDate() + offset)
    const formatted_date = format_date(current_date)

    // Retrieve weight for the day
    const weight = weight_projection.at(i)!

    // Calculate BMI, BMR, and AMR (activity-based metabolic rate)
    const bmi = calculate_bmi(weight, height!)
    const bmr = calculate_bmr(gender, weight, height!, age!)
    const amr = calculate_amr(bmr, activity_level)

    // Calculate total calories needed for the day
    const calories = amr + calorie_target

    return {
      date: formatted_date,
      weight: weight.toFixed(2),
      bmi: bmi.toFixed(2),
      amr: amr.toFixed(2),
      calories: calories.toFixed(0),
    }
  })

  return estimation_data
}
