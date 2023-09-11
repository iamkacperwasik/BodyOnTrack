import {useAtomValue} from "jotai"

import {age_atom} from "atoms/body/Age"
import {height_atom} from "atoms/body/Height"
import {weight_atom} from "atoms/body/Weight"

export const EstimateButton = () => {
  const {value: age_value, error: age_error} = useAtomValue(age_atom)
  const {value: height_value, error: height_error} = useAtomValue(height_atom)
  const {value: weight_value, error: weight_error} = useAtomValue(weight_atom)

  const disabled =
    age_value === null ||
    height_value === null ||
    weight_value === null ||
    age_error !== null ||
    height_error !== null ||
    weight_error !== null

  return (
    <button
      type="submit"
      className={`rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={disabled}
    >
      Estimate
    </button>
  )
}
