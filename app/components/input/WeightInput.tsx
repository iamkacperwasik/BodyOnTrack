import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {weight_atom} from "atoms/body/Weight"

export const WeightInput = () => {
  const [weight, set_weight] = useAtom(weight_atom)

  const handle_weight_input = (event: ChangeEvent<HTMLInputElement>) => {
    const input_value = parseFloat(event.target.value)

    set_weight(input_value || null)
  }

  return (
    <div className="mb-4">
      <label htmlFor="weight" className="mb-1 block font-semibold">
        Weight (kg):
      </label>

      <input
        type="number"
        id="weight"
        min="0"
        name="weight"
        placeholder="Enter weight"
        value={weight || ""}
        onChange={handle_weight_input}
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white"
      />
    </div>
  )
}
