import {atomWithStorage} from "jotai/utils"

/**
 * An atom representing the number of days used to calculate the projected weight
 * over a number of days based on the user's goal and calorie target.
 *
 * This atom is used in the function that calculates the projected weight over a
 * specified number of days based on the user's goal and calorie target.
 *
 * The default value is 7.
 */
export const projection_days_atom = atomWithStorage<number>(
  "projection_days",
  7
)
