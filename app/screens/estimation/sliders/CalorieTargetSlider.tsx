import {useAtom, useAtomValue} from "jotai"

import {calorie_target_atom} from "atoms/goal/CalorieTarget"
import {WeightGoal, goal_atom} from "atoms/goal/Goal"

export const CalorieTargetSlider = () => {
  // Get the current weight goal from the `goal_atom` Jotai atom
  const weight_goal = useAtomValue(goal_atom)

  // Get the current calorie target and a function to set it from the `calorie_target_atom` Jotai atom
  const [calorie_target, set_calorie_target] = useAtom(calorie_target_atom)

  // Function to handle slider value changes
  const handle_slider_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Parse and set the calorie target based on the slider value
    set_calorie_target(parseInt(e.target.value))
  }

  // Define labels for different weight goals
  const labels = {
    LOSE_WEIGHT: "Calorie Deficit",
    GAIN_WEIGHT: "Calorie Surplus",
  }

  // Get the appropriate label text based on the current weight goal
  const label_text = labels[weight_goal as Exclude<WeightGoal, "MAINTAIN">]

  return (
    <div className="mb-4 sm:w-1/2">
      {/* Display the label with the current calorie target */}
      <label
        htmlFor="calorie_target_slider"
        className="my-2 block text-lg font-medium text-white"
      >
        {label_text}: {calorie_target}
      </label>

      {/* The calorie target slider */}
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

      {/* Labels for the slider values */}
      <div className="flex justify-between">
        <span className="text-sm text-white">0</span>
        <span className="text-sm text-white">500</span>
        <span className="text-sm text-white">1000</span>
      </div>
    </div>
  )
}
