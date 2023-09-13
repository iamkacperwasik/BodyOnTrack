import {atomWithStorage} from "jotai/utils"

/**
 * This atom is used to store the user's calorie target.
 * The calorie target can be in the range of 0 to 1000.
 * The default value is 0.
 */
export const calorie_target_atom = atomWithStorage<number>("calorie_target", 0)
