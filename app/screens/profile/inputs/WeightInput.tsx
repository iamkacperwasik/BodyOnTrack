import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {ErrorMessage} from "screens/profile/form/ErrorMessage"

import {weight_atom} from "atoms/body/Weight"

import {WithErrorNumberOrNull} from "atoms/WithError"

export const WeightInput = () => {
  // Get the current weight and a function to update it from the weight_atom Jotai atom
  const [weight, set_weight] = useAtom(weight_atom)

  // Handle changes to the weight input field
  const handle_weight_input = (event: ChangeEvent<HTMLInputElement>) => {
    // Parse the input value as a floating-point number
    const input_value = parseFloat(event.target.value)

    // Create an object to represent the updated weight with an optional error field
    const updated_weight = {
      value: input_value || null,
      error: null,
    } as WithErrorNumberOrNull

    // Check if the input value is outside the valid weight range (0 to 200 kg)
    if (input_value < 0 || input_value > 200) {
      updated_weight.error = "Weight should be between 0 and 200 kg"
    }

    // Update the weight_atom with the new weight value
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

      {/* Display an error message if there's a weight error */}
      <ErrorMessage message={weight.error} />
    </div>
  )
}
