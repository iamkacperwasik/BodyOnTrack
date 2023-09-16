import {useSetAtom} from "jotai"
import {LuSettings} from "react-icons/lu"

import {projection_days_atom} from "atoms/goal/Days"

import {form_submitted_atom} from "atoms/form/FormSubmitted"

/**
 * Component representing an "Edit Profile" button.
 * When clicked, it sets the `form_submitted_atom` to `false` and resets `projection_days_atom` to 7.
 */
export const EditProfileButton = () => {
  // Access the `set` function for the `form_submitted_atom` atom
  const set_form_submitted = useSetAtom(form_submitted_atom)

  // Access the `set` function for the `projection_days_atom` atom
  const set_projection_days = useSetAtom(projection_days_atom)

  return (
    <button
      className="focus:outline-none focus:ring-2 focus:ring-white"
      // When the button is clicked, set the `form_submitted_atom` to `false` and reset `projection_days_atom` to 7
      onClick={() => {
        set_form_submitted(false)
        set_projection_days(7)
      }}
    >
      {/* Render an icon for "Edit Profile" */}
      <LuSettings size={24} color="white" aria-hidden="true" />
    </button>
  )
}
