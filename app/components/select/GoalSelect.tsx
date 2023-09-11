import {useAtom} from "jotai"
import {ChangeEvent} from "react"

import {WeightGoal, goal_atom} from "atoms/goal/Goal"

export const GoalSelect = () => {
  const [goal, set_goal] = useAtom(goal_atom)

  const handle_goal_select = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as WeightGoal

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
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white"
      >
        <option value="MAINTAIN">Maintain</option>
        <option value="LOSE_WEIGHT">Lose Weight</option>
        <option value="GAIN_WEIGHT">Gain Weight</option>
      </select>
    </div>
  )
}
