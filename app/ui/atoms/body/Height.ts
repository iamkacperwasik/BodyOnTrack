import {atom} from "jotai"

/**
 * This atom can contain either a number representing the height in some unit or null if the height is not available.
 */
export const height_atom = atom<null | number>(null)
