import {useAtomValue} from "jotai"
import {weight_atom} from "ui/atoms/body/Weight"
import {calorie_target_atom} from "ui/atoms/goal/CalorieTarget"
import {goal_atom} from "ui/atoms/goal/Goal"

const CALORIES_PER_POUND_OF_FAT = 7700

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
  const daily_weight_change =
    user_goal === "GAIN_WEIGHT"
      ? daily_calorie_target / CALORIES_PER_POUND_OF_FAT
      : -(daily_calorie_target / CALORIES_PER_POUND_OF_FAT)

  // Generate an array of projected weights for each day
  return Array.from(
    {length: days},
    (_, days_passed) =>
      (current_weight || 0) + daily_weight_change * days_passed
  )
}
