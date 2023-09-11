import {atomWithStorage} from "jotai/utils"

/**
 * An atom representing the number of days used to calculate the projected weight
 * over a number of days based on the user's goal and calorie target.
 *
 * This atom is used in the function that calculates the projected weight over a
 * specified number of days based on the user's goal and calorie target.
 */
export const days_atom = atomWithStorage<number>("days", 7)
