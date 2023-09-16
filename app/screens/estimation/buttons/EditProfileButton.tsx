import {useSetAtom} from "jotai"
import {LuSettings} from "react-icons/lu"

import {form_submitted_atom} from "atoms/form/FormSubmitted"

/**
 * Component representing an "Edit Profile" button.
 * When clicked, it sets the `form_submitted_atom` to `false`.
 */
export const EditProfileButton = () => {
  // Access the `set` function for the `form_submitted_atom` atom
  const set_form_submitted = useSetAtom(form_submitted_atom)

  return (
    <button
      className="focus:outline-none focus:ring-2 focus:ring-white"
      // When the button is clicked, set the `form_submitted_atom` to `false`
      onClick={() => set_form_submitted(false)}
    >
      {/* Render an icon for "Edit Profile" */}
      <LuSettings size={24} color="white" aria-hidden="true" />
    </button>
  )
}
