import {useAtomValue} from "jotai"

import {goal_atom} from "atoms/goal/Goal"

export const WeightGoalSection = () => {
  const goal = useAtomValue(goal_atom)

  const goal_messages = {
    MAINTAIN: "Maintaining your current weight",
    LOSE_WEIGHT: "Losing weight",
    GAIN_WEIGHT: "Gaining weight",
  }

  const weight_goal_message = goal_messages[goal]

  return (
    <div>
      <h2 className="mb-2 mt-4 text-lg font-semibold">Weight Goal</h2>
      <p className="text-3xl font-extrabold text-white">
        {weight_goal_message}
      </p>
    </div>
  )
}
