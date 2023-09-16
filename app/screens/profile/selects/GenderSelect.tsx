import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {Gender, gender_atom} from "atoms/body/Gender"

export const GenderSelect = () => {
  // Get the current gender and a function to update it from the gender_atom Jotai atom
  const [gender, set_gender] = useAtom(gender_atom)

  // Handle changes to the gender select field
  const handle_gender_change = (event: ChangeEvent<HTMLSelectElement>) => {
    // Get the selected value from the select field
    const selectedValue = event.target.value as Gender

    // Update the gender_atom with the selected gender
    set_gender(selectedValue)
  }

  return (
    <div className="mb-4">
      <label htmlFor="gender" className="mb-1 block font-semibold">
        Gender:
      </label>

      <select
        id="gender"
        name="gender"
        value={gender}
        onChange={handle_gender_change}
        className="w-full rounded-md border border-gray-600 bg-black px-4 py-2 text-white"
      >
        {/* Render options for Male and Female gender */}
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  )
}
