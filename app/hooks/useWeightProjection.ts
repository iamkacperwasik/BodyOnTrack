import {weight_atom} from "atoms/body/Weight"
import {calorie_target_atom} from "atoms/goal/CalorieTarget"
import {goal_atom} from "atoms/goal/Goal"
import {useAtomValue} from "jotai"

const CALORIES_PER_POUND_OF_FAT = 7700

/**
 * Calculate the daily weight change based on the user's goal and calorie target.
 *
 * @param {string} user_goal - User's weight goal ("GAIN_WEIGHT" or "LOSE_WEIGHT")
 * @param {number} daily_calorie_target - Daily calorie target
 * @returns {number} - Daily weight change
 */
const calculate_daily_weight_change = (
  user_goal: "GAIN_WEIGHT" | "LOSE_WEIGHT",
  daily_calorie_target: number
): number => {
  if (user_goal === "GAIN_WEIGHT") {
    return daily_calorie_target / CALORIES_PER_POUND_OF_FAT
  } else {
    return -(daily_calorie_target / CALORIES_PER_POUND_OF_FAT)
  }
}

/**
 * Calculate the projected weight for a specific day.
 *
 * @param {number} current_weight - Current weight
 * @param {number} daily_weight_change - Daily weight change
 * @param {number} days_passed - Number of days passed
 * @returns {number} - Projected weight for the specific day
 */
const calculate_projected_weight = (
  current_weight: number,
  daily_weight_change: number,
  days_passed: number
): number => {
  return current_weight + daily_weight_change * days_passed
}

/**
 * Calculate the projected weight over a number of days based on the user's goal and calorie target.
 *
 * @param {number} days - Number of days to project weight for
 * @returns {number[]} - Array of projected weights for each day
 */
export const useWeightProjection = (days: number): number[] => {
  // Get the user's current weight, goal, and calorie target from atom values
  const current_weight = useAtomValue(weight_atom)
  const user_goal = useAtomValue(goal_atom)
  const daily_calorie_target = useAtomValue(calorie_target_atom)

  // If the goal is to "MAINTAIN" or if any data is missing, return the current weight or 0 if null
  if (
    user_goal === "MAINTAIN" ||
    current_weight === null ||
    daily_calorie_target === null
  ) {
    return [current_weight || 0]
  }

  // Calculate the daily weight change based on the user's goal
  const daily_weight_change = calculate_daily_weight_change(
    user_goal,
    daily_calorie_target
  )

  // Generate an array of projected weights for each day
  return Array.from({length: days}, (_, days_passed) =>
    calculate_projected_weight(
      current_weight || 0,
      daily_weight_change,
      days_passed
    )
  )
}
