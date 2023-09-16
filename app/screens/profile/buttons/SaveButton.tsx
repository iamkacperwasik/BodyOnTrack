import clsx from "clsx"
import {useAtomValue, useSetAtom} from "jotai"

import {form_submitted_atom} from "atoms/form/FormSubmitted"
import {is_all_data_provided_atom} from "atoms/form/IsAllDataProvided"

export const SaveButton = () => {
  // Get the value of the is_all_data_provided_atom Jotai atom
  const is_all_data_provided = useAtomValue(is_all_data_provided_atom)

  // Get the function to set the form_submitted_atom Jotai atom
  const set_form_submitted = useSetAtom(form_submitted_atom)

  // Function to handle the button click event
  const handle_submit = () => {
    // Check if all data is provided (is_all_data_provided is true)
    if (is_all_data_provided) {
      // Set the form_submitted_atom to true to indicate form submission
      set_form_submitted(true)
    }
  }

  return (
    <button
      type="submit"
      className={clsx(
        "w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
        {
          // Apply styles conditionally based on whether all data is provided
          "cursor-not-allowed opacity-50": !is_all_data_provided,
        }
      )}
      disabled={!is_all_data_provided}
      onClick={handle_submit}
    >
      Save
    </button>
  )
}
