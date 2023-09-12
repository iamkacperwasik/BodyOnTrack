import {atom} from "jotai"

import {age_atom} from "atoms/body/Age"
import {height_atom} from "atoms/body/Height"
import {weight_atom} from "atoms/body/Weight"

/**
 * This atom computes whether all necessary data is provided and valid.
 * It checks if age, height, and weight values are not null and there are no associated errors.
 */
export const is_all_data_provided_atom = atom((get) => {
  // Get values and errors from the respective atoms
  const {value: age_value, error: age_error} = get(age_atom)
  const {value: height_value, error: height_error} = get(height_atom)
  const {value: weight_value, error: weight_error} = get(weight_atom)

  // Check for null values and errors
  const has_null_values =
    age_value === null || height_value === null || weight_value === null
  const has_errors =
    age_error !== null || height_error !== null || weight_error !== null

  // Return true if all data is provided and valid, false otherwise
  return !has_null_values && !has_errors
})
