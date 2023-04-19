import {useAtomValue} from "jotai"

import {arrayOfSize} from "util/Array"

import {weightAtom} from "stores/Body"
import {calorieTargetAtom, goalAtom} from "stores/Goal"

const FAT_CALORIES = 7700

export const useWeightForecast = (days: number): number[] => {
  const weight = useAtomValue(weightAtom)!
  const goal = useAtomValue(goalAtom)!
  const calorieTarget = useAtomValue(calorieTargetAtom)!

  if (goal === "MAINTAIN") {
    return [weight]
  }

  return arrayOfSize(days)
    .map((_, daysPassed) => {
      if (goal === "GAIN_WEIGHT") {
        return (calorieTarget * daysPassed) / FAT_CALORIES
      }

      return (-calorieTarget * daysPassed) / FAT_CALORIES
    })
    .map((gainedWeight) => {
      return weight! + gainedWeight
    })
}
