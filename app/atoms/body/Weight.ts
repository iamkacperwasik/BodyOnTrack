import {atomWithStorage} from "jotai/utils"

import {WithErrorNumberOrNull} from "atoms/WithError"

/**
 * This atom can contain either a number representing the weight in some unit or an object with both the weight value and an error message.
 */
export const weight_atom = atomWithStorage<WithErrorNumberOrNull>("weight", {
  value: null,
  error: null,
})
