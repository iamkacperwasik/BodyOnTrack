import {atom} from "jotai"

/**
 * This atom can contain either a number representing the weight in some unit or null if the weight is not available.
 */
export const weight_atom = atom<null | number>(null)
