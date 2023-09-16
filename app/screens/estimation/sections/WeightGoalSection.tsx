import {useAtomValue} from "jotai"

import {goal_atom} from "atoms/goal/Goal"

export const WeightGoalSection = () => {
  // Get the current weight goal from the `goal_atom` Jotai atom
  const goal = useAtomValue(goal_atom)

  // Define messages for each weight goal
  const goal_messages = {
    MAINTAIN: "Maintaining your current weight",
    LOSE_WEIGHT: "Losing weight",
    GAIN_WEIGHT: "Gaining weight",
  }

  // Get the appropriate message based on the current weight goal
  const weight_goal_message = goal_messages[goal]

  return (
    <div>
      <h2 className="mb-2 mt-4 text-lg font-semibold">Weight Goal</h2>
      <p className="text-2xl font-extrabold text-white">
        {weight_goal_message}
      </p>
    </div>
  )
}
