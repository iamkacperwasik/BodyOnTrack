import {atomWithStorage} from "jotai/utils"

export type Gender = "Female" | "Male"

/**
 * This atom is used to store the user's gender. It can have one of two values: "Female" or "Male," with a default value of "Male."
 */
export const gender_atom = atomWithStorage<Gender>("gender", "Male")
