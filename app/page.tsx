"use client"

import {ActivityLevelSelect} from "components/select/ActivityLevelSelect"
import {GenderSelect} from "components/select/GenderSelect"
import {GoalSelect} from "components/select/GoalSelect"

import {AgeInput} from "components/input/AgeInput"
import {HeightInput} from "components/input/HeightInput"
import {WeightInput} from "components/input/WeightInput"

import {EstimateButton} from "components/form/EstimateButton"

export default function Home() {
  return (
    <div className="container mx-auto mt-8 max-w-2xl rounded-lg p-4 text-xl text-white shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Body Profile</h1>

      <form className="space-y-4">
        <div className="-mx-2 flex flex-wrap justify-between">
          <div className="w-full px-2 md:w-1/2">
            <AgeInput />
          </div>
          <div className="w-full px-2 md:w-1/2">
            <GenderSelect />
          </div>
        </div>

        <div className="-mx-2 flex flex-wrap justify-between">
          <div className="w-full px-2 md:w-1/2">
            <HeightInput />
          </div>
          <div className="w-full px-2 md:w-1/2">
            <WeightInput />
          </div>
        </div>

        <ActivityLevelSelect />
        <GoalSelect />

        <EstimateButton />
      </form>
    </div>
  )
}
