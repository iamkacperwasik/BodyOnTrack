import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {ErrorMessage} from "screens/profile/form/ErrorMessage"

import {height_atom} from "atoms/body/Height"

import {WithErrorNumberOrNull} from "atoms/WithError"

export const HeightInput = () => {
  const [height, set_height] = useAtom(height_atom)

  const handle_height_input = (event: ChangeEvent<HTMLInputElement>) => {
    const input_value = parseInt(event.target.value, 10)
    const updated_height = {
      value: input_value || null,
      error: null,
    } as WithErrorNumberOrNull

    if (input_value < 0 || input_value > 250) {
      updated_height.error = "Height should be between 0 and 250 cm"
    }

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

      <ErrorMessage message={height.error} />
    </div>
  )
}
