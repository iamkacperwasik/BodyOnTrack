import {atom} from "jotai"

import {WithErrorNumberOrNull} from "atoms/WithError"

/**
 * This atom can contain either a number representing the weight in some unit or an object with both the weight value and an error message.
 */
export const weight_atom = atom<WithErrorNumberOrNull>({
  value: null,
  error: null,
})
