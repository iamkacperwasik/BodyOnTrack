import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {ErrorMessage} from "screens/profile/form/ErrorMessage"

import {age_atom} from "atoms/body/Age"

import {WithErrorNumberOrNull} from "atoms/WithError"

export const AgeInput = () => {
  const [age, set_age] = useAtom(age_atom)

  const handle_age_input = (event: ChangeEvent<HTMLInputElement>) => {
    const input_value = parseInt(event.target.value, 10)
    const updated_age = {
      value: input_value || null,
      error: null,
    } as WithErrorNumberOrNull

    if (input_value < 0 || input_value > 100) {
      updated_age.error = "Age should be between 0 and 100"
    }

    set_age(updated_age)
  }

  return (
    <div className="mb-4">
      <label htmlFor="age" className="mb-1 block font-semibold text-white">
        Age:
      </label>

      <input
        type="number"
        id="age"
        name="age"
        placeholder="Enter age"
        min="0"
        value={age.value || ""}
        onChange={handle_age_input}
        className="w-full rounded-md border border-gray-600 bg-black px-4 py-2 text-white"
      />

      <ErrorMessage message={age.error} />
    </div>
  )
}
