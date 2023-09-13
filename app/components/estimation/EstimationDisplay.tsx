import {EditProfileButton} from "components/buttons/EditProfileButton"

import {BmiSection} from "components/estimation/sections/BmiSection"
import {BmrSection} from "components/estimation/sections/BmrSection"
import {WeightGoalSection} from "components/estimation/sections/WeightGoalSection"

export const EstimationDisplay = () => {
  return (
    <div className="container mx-auto mt-8 flex max-w-2xl items-baseline justify-between rounded-lg p-4 text-xl text-white">
      <div>
        <h1 className="mb-4 text-2xl font-semibold">
          Body Profile Estimations
        </h1>

        <BmiSection />
        <BmrSection />
        <WeightGoalSection />
      </div>
      <div className="flex items-center">
        <EditProfileButton />
      </div>
    </div>
  )
}
