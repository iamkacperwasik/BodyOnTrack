import {useSetAtom} from "jotai"

import {projection_days_atom} from "atoms/goal/Days"

export const ShowMoreButton = () => {
  const set_projection_days = useSetAtom(projection_days_atom)

  // Increases the number of projection days by 3 and scrolls to the bottom of the page smoothly.
  const handle_show_more_click = () => {
    set_projection_days((projection_days) => {
      return projection_days + 3
    })

    // Scroll to the bottom of the page smoothly
    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: document.body.scrollHeight,
      })
    }, 200)
  }

  return (
    <button
      className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      onClick={handle_show_more_click}
    >
      Show More
    </button>
  )
}
