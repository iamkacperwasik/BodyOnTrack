import {atom} from "jotai"

/**
 * This atom can contain either a number representing the daily calorie target or null if the target is not available.
 */
export const calorie_target_atom = atom<null | number>(null)
