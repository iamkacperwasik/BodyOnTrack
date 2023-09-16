import {atomWithStorage} from "jotai/utils"

import {WithErrorNumberOrNull} from "atoms/WithError"

/**
 * This atom is used to store the user's age. It can contain either a number representing the age
 * or an object with both the age and an error message.
 */
export const age_atom = atomWithStorage<WithErrorNumberOrNull>("age", {
  value: null,
  error: null,
})
