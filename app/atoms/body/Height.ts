import {atomWithStorage} from "jotai/utils"

import {WithErrorNumberOrNull} from "atoms/WithError"

/**
 * This atom can contain either a number representing the height in some unit or an object with both the height value and an error message.
 */
export const height_atom = atomWithStorage<WithErrorNumberOrNull>("height", {
  value: null,
  error: null,
})
