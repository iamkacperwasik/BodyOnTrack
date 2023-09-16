import {useAtomValue} from "jotai"

import {EditProfileButton} from "screens/estimation/buttons/EditProfileButton"

import {CalorieTargetSlider} from "screens/estimation/sliders/CalorieTargetSlider"

import {AmrSection} from "screens/estimation/sections/AmrSection"
import {BmiSection} from "screens/estimation/sections/BmiSection"
import {WeightGoalSection} from "screens/estimation/sections/WeightGoalSection"

import {EstimationTable} from "screens/estimation/tables/EstimationTable"

import {goal_atom} from "atoms/goal/Goal"

import {ShowMoreButton} from "./buttons/ShowMoreButton"

export const EstimationDisplay = () => {
  // Get the current weight goal from the `goal_atom` Jotai atom
  const weight_goal = useAtomValue(goal_atom)

  return (
    <div className="container mx-auto mt-8 flex max-w-2xl items-baseline justify-between rounded-lg p-4 text-xl text-white">
      <div className="w-full max-w-2xl">
        <h1 className="mb-4 text-2xl font-semibold">
          Body Profile Estimations
        </h1>

        {/* Display sections for BMI, AMR, and Weight Goal */}
        <BmiSection />
        <AmrSection />
        <WeightGoalSection />

        {/* Display calorie target slider and estimation table if the goal is not "MAINTAIN" */}
        {weight_goal !== "MAINTAIN" && (
          <>
            {/* Divider */}
            <div className="my-8 h-1 w-full rounded-full bg-gray-300" />

            <CalorieTargetSlider />
            <EstimationTable />
            <ShowMoreButton />
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
