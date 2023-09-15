import {useSetAtom} from "jotai"
import {LuSettings} from "react-icons/lu"

import {form_submitted_atom} from "atoms/form/FormSubmitted"

export const EditProfileButton = () => {
  const set_form_submitted = useSetAtom(form_submitted_atom)

  return (
    <button
      className="focus:outline-none focus:ring-2 focus:ring-white"
      onClick={() => set_form_submitted(false)}
    >
      <LuSettings size={24} color="white" aria-hidden="true" />
    </button>
  )
}
