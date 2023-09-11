import {age_atom} from "atoms/body/Age"
import {useAtom} from "jotai"
import {ChangeEvent} from "react"

export const AgeInput = () => {
  const [age, set_age] = useAtom(age_atom)

  const handle_age_input = (event: ChangeEvent<HTMLInputElement>) => {
    const input_value = parseInt(event.target.value, 10)

    set_age(input_value || null)
  }

  return (
    <div className="mb-4">
      <label htmlFor="age" className="mb-1 block font-semibold">
        Age:
      </label>

      <input
        type="number"
        id="age"
        name="age"
        placeholder="Enter age"
        min="0"
        value={age || ""}
        onChange={handle_age_input}
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white"
      />
    </div>
  )
}
