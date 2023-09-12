import {useSetAtom} from "jotai"

import {form_submitted_atom} from "atoms/form/FormSubmitted"

export const EstimationDisplay = () => {
  const set_form_submitted = useSetAtom(form_submitted_atom)

  return (
    <div className="mt-8 text-center text-white">
      <p>All data is okay!</p>

      <button
        className="ml-2 rounded-md bg-red-600 px-2 py-1 text-white"
        onClick={() => set_form_submitted(false)}
      >
        Change settings
      </button>
    </div>
  )
}
