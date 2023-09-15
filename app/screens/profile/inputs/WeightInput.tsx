import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {ErrorMessage} from "screens/profile/form/ErrorMessage"

import {weight_atom} from "atoms/body/Weight"

import {WithErrorNumberOrNull} from "atoms/WithError"

export const WeightInput = () => {
  const [weight, set_weight] = useAtom(weight_atom)

  const handle_weight_input = (event: ChangeEvent<HTMLInputElement>) => {
    const input_value = parseFloat(event.target.value)
    const updated_weight = {
      value: input_value || null,
      error: null,
    } as WithErrorNumberOrNull

    if (input_value < 0 || input_value > 200) {
      updated_weight.error = "Weight should be between 0 and 200 kg"
    }

    set_weight(updated_weight)
  }

  return (
    <div className="mb-4">
      <label htmlFor="weight" className="mb-1 block font-semibold">
        Weight (kg):
      </label>

      <input
        type="number"
        id="weight"
        name="weight"
        placeholder="Enter weight"
        min="0"
        max="200"
        step="any"
        value={weight.value || ""}
        onChange={handle_weight_input}
        className="w-full rounded-md border border-gray-600 bg-black px-4 py-2 text-white"
      />

      <ErrorMessage message={weight.error} />
    </div>
  )
}
