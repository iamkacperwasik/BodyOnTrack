import {arrayOfSize} from "util/Array"

import useBodyInfoStore from "stores/BodyInfo"
import useCalculationsStore from "stores/Calculations"

const FAT_CALORIES = 7700

const useWeightForecast = (weeks: number) => {
  const {goal, surplus, deficit} = useCalculationsStore()
  const {weight} = useBodyInfoStore()

  if (!weight) return {forecast: []}

  if (goal === "GAIN_WEIGHT")
    return {
      forecast: arrayOfSize(weeks)
        .map((_, i) => surplus * i * 7)
        .map((calories) => calories / FAT_CALORIES) // gained weight
        .map((gainedWeight) => weight! + gainedWeight),
    }

  if (goal === "LOSE_WEIGHT")
    return {
      forecast: arrayOfSize(weeks)
        .map((_, i) => deficit * i * 7)
        .map((calories) => calories / FAT_CALORIES) // lost weight
        .map((lostWeight) => weight! - lostWeight),
    }

  return {forecast: arrayOfSize(weeks).map(() => weight) as number[]} // LINEAR
}

export default useWeightForecast
