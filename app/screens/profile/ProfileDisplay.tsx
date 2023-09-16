import {SaveButton} from "screens/profile/buttons/SaveButton"

import {AgeInput} from "screens/profile/inputs/AgeInput"
import {HeightInput} from "screens/profile/inputs/HeightInput"
import {WeightInput} from "screens/profile/inputs/WeightInput"

import {ActivityLevelSelect} from "screens/profile/selects/ActivityLevelSelect"
import {GenderSelect} from "screens/profile/selects/GenderSelect"
import {GoalSelect} from "screens/profile/selects/GoalSelect"

export const ProfileDisplay = () => {
  return (
    <div className="container mx-auto mt-8 max-w-2xl rounded-lg p-4 text-xl text-white shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Body Profile</h1>

      <form className="space-y-4">
        {/* Age and Gender inputs */}
        <div className="-mx-2 flex flex-wrap justify-between">
          <div className="w-full px-2 md:w-1/2">
            <AgeInput />
          </div>
          <div className="w-full px-2 md:w-1/2">
            <GenderSelect />
          </div>
        </div>

        {/* Height and Weight inputs */}
        <div className="-mx-2 flex flex-wrap justify-between">
          <div className="w-full px-2 md:w-1/2">
            <HeightInput />
          </div>
          <div className="w-full px-2 md:w-1/2">
            <WeightInput />
          </div>
        </div>

        {/* Activity Level and Goal selects */}
        <ActivityLevelSelect />
        <GoalSelect />

        {/* Save button */}
        <SaveButton />
      </form>
    </div>
  )
}
