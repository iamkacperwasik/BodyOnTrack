import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {activity_level_atom} from "atoms/goal/ActivityLevel"
import {ActivityLevel} from "atoms/goal/ActivityLevel"

export const ActivityLevelSelect = () => {
  // Get the current activity level and a function to update it from the activity_level_atom Jotai atom
  const [activity_level, set_activity_level] = useAtom(activity_level_atom)

  // Handle changes to the activity level select field
  const handle_activity_level_select = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    // Get the selected value from the select field
    const selectedValue = event.target.value as ActivityLevel

    // Update the activity_level_atom with the selected activity level
    set_activity_level(selectedValue)
  }

  return (
    <div className="mb-4">
      <label htmlFor="activity-level" className="mb-1 block font-semibold">
        Activity Level:
      </label>

      <select
        id="activity-level"
        name="activity-level"
        value={activity_level}
        onChange={handle_activity_level_select}
        className="w-full rounded-md border border-gray-600 bg-black px-4 py-2 text-white"
      >
        {/* Render options for different activity levels */}
        <option value="SEDENTARY">
          Sedentary (little or no physical activity)
        </option>
        <option value="LIGHTLY_ACTIVE">
          Lightly Active (light physical activity or exercise)
        </option>
        <option value="MODERATELY_ACTIVE">
          Moderately Active (moderate physical activity or exercise)
        </option>
        <option value="VERY_ACTIVE">
          Very Active (high levels of physical activity or exercise)
        </option>
        <option value="EXTREMELY_ACTIVE">
          Extremely Active (very high levels of physical activity or exercise)
        </option>
      </select>
    </div>
  )
}
