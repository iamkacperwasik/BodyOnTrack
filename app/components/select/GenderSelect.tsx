import {Gender, gender_atom} from "atoms/body/Gender"
import {useAtom} from "jotai"
import {ChangeEvent} from "react"

export const GenderSelect = () => {
  const [gender, set_gender] = useAtom(gender_atom)

  const handle_gender_change = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as Gender

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
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  )
}
