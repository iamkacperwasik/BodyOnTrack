import {useAtomValue} from "jotai"

import {calculate_bmi} from "formulas/Bmi"
import {calculate_bmr} from "formulas/Bmr"

import {useWeightProjection} from "hooks/useWeightProjection"

import {activity_level_atom, get_pal_multiplier} from "atoms/goal/ActivityLevel"
import {calorie_target_atom} from "atoms/goal/CalorieTarget"
import {WeightGoal, goal_atom} from "atoms/goal/Goal"

import {age_atom} from "atoms/body/Age"
import {gender_atom} from "atoms/body/Gender"
import {height_atom} from "atoms/body/Height"

type EstimationData = {
  date: string
  weight: string
  bmi: string
  bmr: string
  calories: string
}

const format_date = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

const calculate_calorie_target = (
  goal: WeightGoal,
  initial_calorie_target: number
): number => {
  const calorie_multiplier = goal === "LOSE_WEIGHT" ? -1 : 1
  return initial_calorie_target * calorie_multiplier
}

export const useEstimationData = (): EstimationData[] => {
  const {value: height} = useAtomValue(height_atom)
  const {value: age} = useAtomValue(age_atom)
  const goal = useAtomValue(goal_atom)
  const initial_calorie_target = useAtomValue(calorie_target_atom)
  const gender = useAtomValue(gender_atom)
  const activity_level = useAtomValue(activity_level_atom)
  const weight_projection = useWeightProjection(7)

  const start_date = new Date()
  start_date.setDate(start_date.getDate() + 1)
  const offsets = Array.from({length: 7}, (_, i) => i)

  const calorie_target: number = calculate_calorie_target(
    goal,
    initial_calorie_target
  )

  const estimation_data: EstimationData[] = offsets.map((offset, i) => {
    const current_date = new Date(start_date)
    current_date.setDate(start_date.getDate() + offset)

    const formatted_date = format_date(current_date)
    const weight: number = weight_projection.at(i)!
    const bmi: number = calculate_bmi(weight, height!)
    const bmr: number =
      calculate_bmr(gender, weight, height!, age!) *
      get_pal_multiplier(activity_level)
    const calories: number = bmr + calorie_target

    return {
      date: formatted_date,
      weight: weight.toFixed(2),
      bmi: bmi.toFixed(2),
      bmr: bmr.toFixed(2),
      calories: calories.toFixed(0),
    }
  })

  return estimation_data
}
