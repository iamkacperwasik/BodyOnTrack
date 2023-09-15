import clsx from "clsx"
import {useAtomValue, useSetAtom} from "jotai"

import {form_submitted_atom} from "atoms/form/FormSubmitted"
import {is_all_data_provided_atom} from "atoms/form/IsAllDataProvided"

export const SaveButton = () => {
  const is_all_data_provided = useAtomValue(is_all_data_provided_atom)
  const set_form_submitted = useSetAtom(form_submitted_atom)

  const handle_submit = () => {
    if (is_all_data_provided) {
      set_form_submitted(true)
    }
  }

  return (
    <button
      type="submit"
      className={clsx(
        "w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
        {
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
