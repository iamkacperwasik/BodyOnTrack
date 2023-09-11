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
    <div className="container mx-auto mt-8 max-w-lg rounded-lg p-4 text-white shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Body Profile</h1>

      <form>
        <AgeInput />
        <GenderSelect />
        <HeightInput />
        <WeightInput />
        <ActivityLevelSelect />
        <GoalSelect />

        <EstimateButton />
      </form>
    </div>
  )
}
