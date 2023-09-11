import {atom} from "jotai"

/**
 * This atom is used to store the user's age. It can contain either a number representing the age
 * or null if the age is not available.
 */
export const age_atom = atom<null | number>(null)
