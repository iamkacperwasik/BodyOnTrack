"use client"

import {ActivityLevelSelect} from "components/select/ActivityLevelSelect"
import {GenderSelect} from "components/select/GenderSelect"
import {GoalSelect} from "components/select/GoalSelect"

import {AgeInput} from "components/input/AgeInput"
import {HeightInput} from "components/input/HeightInput"
import {WeightInput} from "components/input/WeightInput"

export default function Home() {
  return (
    <div className="container mx-auto mt-8 max-w-lg rounded-lg bg-gray-800 p-4 text-white shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Body Profile</h1>

      <form>
        <AgeInput />
        <GenderSelect />
        <HeightInput />
        <WeightInput />
        <ActivityLevelSelect />
        <GoalSelect />

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Estimate
        </button>
      </form>
    </div>
  )
}
