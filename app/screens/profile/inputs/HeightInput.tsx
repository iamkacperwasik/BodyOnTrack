import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {ErrorMessage} from "screens/profile/form/ErrorMessage"

import {height_atom} from "atoms/body/Height"

import {WithErrorNumberOrNull} from "atoms/WithError"

export const HeightInput = () => {
  // Get the current height and a function to update it from the height_atom Jotai atom
  const [height, set_height] = useAtom(height_atom)

  // Handle changes to the height input field
  const handle_height_input = (event: ChangeEvent<HTMLInputElement>) => {
    // Parse the input value as an integer
    const input_value = parseInt(event.target.value, 10)

    // Create an object to represent the updated height with an optional error field
    const updated_height = {
      value: input_value || null,
      error: null,
    } as WithErrorNumberOrNull

    // Check if the input value is outside the valid height range (0 to 250 cm)
    if (input_value < 0 || input_value > 250) {
      updated_height.error = "Height should be between 0 and 250 cm"
    }

    // Update the height_atom with the new height value
    set_height(updated_height)
  }

  return (
    <div className="mb-4">
      <label htmlFor="height" className="mb-1 block font-semibold">
        Height (cm):
      </label>

      <input
        type="number"
        id="height"
        name="height"
        placeholder="Enter height"
        min="0"
        max="250"
        value={height.value || ""}
        onChange={handle_height_input}
        className="w-full rounded-md border border-gray-600 bg-black px-4 py-2 text-white"
      />

      {/* Display an error message if there's a height error */}
      <ErrorMessage message={height.error} />
    </div>
  )
}
