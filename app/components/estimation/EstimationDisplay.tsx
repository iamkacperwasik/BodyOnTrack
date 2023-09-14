import {useAtomValue} from "jotai"

import {EditProfileButton} from "components/buttons/EditProfileButton"

import {EstimationTable} from "components/estimation/EstimationTable"
import {BmiSection} from "components/estimation/sections/BmiSection"
import {BmrSection} from "components/estimation/sections/BmrSection"
import {WeightGoalSection} from "components/estimation/sections/WeightGoalSection"

import {CalorieTargetSlider} from "components/sliders/CalorieTargetSlider"

import {goal_atom} from "atoms/goal/Goal"

export const EstimationDisplay = () => {
  const weight_goal = useAtomValue(goal_atom)

  return (
    <div className="container mx-auto mt-8 flex max-w-2xl items-baseline justify-between rounded-lg p-4 text-xl text-white">
      <div className="w-full max-w-2xl">
        <h1 className="mb-4 text-2xl font-semibold">
          Body Profile Estimations
        </h1>

        <BmiSection />
        <BmrSection />
        <WeightGoalSection />

        {weight_goal !== "MAINTAIN" && (
          <>
            <div className="my-8 h-1 w-full rounded-full bg-gray-300" />

            <CalorieTargetSlider />

            <EstimationTable />
          </>
        )}
      </div>

      <div className="w-max">
        <EditProfileButton />
      </div>
    </div>
  )
}
