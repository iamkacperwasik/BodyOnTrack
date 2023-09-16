import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {WeightGoal, goal_atom} from "atoms/goal/Goal"

export const GoalSelect = () => {
  // Get the current weight goal and a function to update it from the goal_atom Jotai atom
  const [goal, set_goal] = useAtom(goal_atom)

  // Handle changes to the weight goal select field
  const handle_goal_select = (event: ChangeEvent<HTMLSelectElement>) => {
    // Get the selected value from the select field
    const selectedValue = event.target.value as WeightGoal

    // Update the goal_atom with the selected weight goal
    set_goal(selectedValue)
  }

  return (
    <div className="mb-4">
      <label htmlFor="goal" className="mb-1 block font-semibold">
        Goal:
      </label>

      <select
        id="goal"
        name="goal"
        value={goal}
        onChange={handle_goal_select}
        className="w-full rounded-md border border-gray-600 bg-black px-4 py-2 text-white"
      >
        {/* Render options for weight goals: Maintain, Lose Weight, and Gain Weight */}
        <option value="MAINTAIN">Maintain</option>
        <option value="LOSE_WEIGHT">Lose Weight</option>
        <option value="GAIN_WEIGHT">Gain Weight</option>
      </select>
    </div>
  )
}
