import {useAtom, useAtomValue} from "jotai"

import {calorie_target_atom} from "atoms/goal/CalorieTarget"
import {WeightGoal, goal_atom} from "atoms/goal/Goal"

export const CalorieTargetSlider: React.FC = () => {
  const weight_goal = useAtomValue(goal_atom)
  const [calorie_target, set_calorie_target] = useAtom(calorie_target_atom)

  const handle_slider_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_calorie_target(parseInt(e.target.value))
  }

  const labels = {
    LOSE_WEIGHT: "Calorie Deficit",
    GAIN_WEIGHT: "Calorie Surplus",
  }

  const label_text = labels[weight_goal as Exclude<WeightGoal, "MAINTAIN">]

  return (
    <div className="mb-4 sm:w-1/2">
      <label
        htmlFor="calorie_target_slider"
        className="my-2 block text-lg font-medium text-white"
      >
        {label_text}: {calorie_target}
      </label>

      <input
        type="range"
        id="calorie_target_slider"
        min="0"
        max="1000"
        step="10"
        value={calorie_target}
        onChange={handle_slider_change}
        className="my-4 h-4 w-full cursor-pointer"
      />

      <div className="flex justify-between">
        <span className="text-sm text-white">0</span>
        <span className="text-sm text-white">500</span>
        <span className="text-sm text-white">1000</span>
      </div>
    </div>
  )
}
