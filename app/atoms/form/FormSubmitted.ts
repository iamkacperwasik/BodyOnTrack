import {atomWithStorage} from "jotai/utils"

/**
 * An atom to store whether the form has been submitted or not.
 *
 * This atom is used to keep track of whether the form has been submitted by the user.
 * It stores a boolean value:
 * - `true` if the form has been submitted.
 * - `false` if the form has not been submitted (default).
 */
export const form_submitted_atom = atomWithStorage<boolean>(
  "form_submitted",
  false
)
