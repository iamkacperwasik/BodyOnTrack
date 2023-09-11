import {height_atom} from "atoms/body/Height"
import {useAtom} from "jotai"
import {ChangeEvent} from "react"

export const HeightInput = () => {
  const [height, set_height] = useAtom(height_atom)

  const handle_height_input = (event: ChangeEvent<HTMLInputElement>) => {
    const input_value = parseInt(event.target.value, 10)

    set_height(input_value || null)
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
        min="0"
        placeholder="Enter height"
        value={height || ""}
        onChange={handle_height_input}
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white"
      />
    </div>
  )
}
