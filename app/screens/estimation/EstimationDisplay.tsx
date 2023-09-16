import {useAtomValue} from "jotai"

import {EditProfileButton} from "screens/estimation/buttons/EditProfileButton"

import {CalorieTargetSlider} from "screens/estimation/sliders/CalorieTargetSlider"

import {BmiSection} from "screens/estimation/sections/BmiSection"
import {BmrSection} from "screens/estimation/sections/BmrSection"
import {WeightGoalSection} from "screens/estimation/sections/WeightGoalSection"

import {EstimationTable} from "screens/estimation/EstimationTable"

import {goal_atom} from "atoms/goal/Goal"

export const EstimationDisplay = () => {
  // Get the current weight goal from the `goal_atom` Jotai atom
  const weight_goal = useAtomValue(goal_atom)

  return (
    <div className="container mx-auto mt-8 flex max-w-2xl items-baseline justify-between rounded-lg p-4 text-xl text-white">
      <div className="w-full max-w-2xl">
        <h1 className="mb-4 text-2xl font-semibold">
          Body Profile Estimations
        </h1>

        {/* Display sections for BMI, BMR, and Weight Goal */}
        <BmiSection />
        <BmrSection />
        <WeightGoalSection />

        {/* Display calorie target slider and estimation table if the goal is not "MAINTAIN" */}
        {weight_goal !== "MAINTAIN" && (
          <>
            <div className="my-8 h-1 w-full rounded-full bg-gray-300" />
            <CalorieTargetSlider />
            <EstimationTable />
          </>
        )}
      </div>

      {/* Display the edit profile button */}
      <div className="w-max">
        <EditProfileButton />
      </div>
    </div>
  )
}
