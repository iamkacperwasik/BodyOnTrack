import {useAtomValue} from "jotai"

import {calorie_target_atom} from "atoms/goal/CalorieTarget"
import {projection_days_atom} from "atoms/goal/Days"
import {goal_atom} from "atoms/goal/Goal"

import {weight_atom} from "atoms/body/Weight"

// Calories required to burn 1 kilogram of fat
const CALORIES_PER_POUND_OF_FAT = 7700

/**
 * Calculate the daily weight change based on calorie targets and goals.
 *
 * @param {number} calories - The daily calorie target.
 * @param {string} goal - The weight goal ("LOSE_WEIGHT" or "GAIN_WEIGHT").
 * @returns {number} The daily weight change.
 */
const calculate_daily_weight_change = (
  calories: number,
  goal: string
): number => {
  // Determine the multiplier based on the goal (negative for weight loss, positive for weight gain)
  const calorie_multiplier = goal === "LOSE_WEIGHT" ? -1 : 1

  // Calculate the daily weight change
  return (calories * calorie_multiplier) / CALORIES_PER_POUND_OF_FAT
}

/**
 * Calculate projected weight changes over a specified number of days based on calorie targets and goals.
 *
 * @param {number} days - The number of days for which to calculate projected weights.
 * @param {number} initial_weight - The initial weight.
 * @param {number} daily_weight_change - The daily weight change.
 * @returns {number[]} An array of projected weights for each day.
 */
const calculate_projected_weights = (
  days: number,
  initial_weight: number,
  daily_weight_change: number
): number[] => {
  const projected_weights: number[] = Array.from(
    {length: days},
    (_, days_passed) => {
      // Calculate the projected weight for each day by applying the daily weight change
      const projected_weight =
        initial_weight + daily_weight_change * (days_passed + 1)

      return projected_weight
    }
  )

  return projected_weights
}

/**
 * Custom hook for calculating weight projection over a specified number of days.
 *
 * @returns {number[]} An array of projected weights for each day.
 */
export const useWeightProjection = (): number[] => {
  const projection_days = useAtomValue(projection_days_atom)
  const initial_weight = useAtomValue(weight_atom)
  const goal = useAtomValue(goal_atom)
  const calories = useAtomValue(calorie_target_atom)

  // Calculate the daily weight change based on calorie target and goal
  const daily_weight_change = calculate_daily_weight_change(calories, goal)

  // Calculate and return the projected weights
  return calculate_projected_weights(
    projection_days,
    initial_weight.value!,
    daily_weight_change
  )
}
