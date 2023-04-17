import {useAtomValue} from "jotai"

import {calorieTargetAtom, goalAtom} from "stores/Body"

import {useCaloriesPerDay} from "./useCaloriesPerDay"

export const useCalorieGoal = (): number => {
  const goal = useAtomValue(goalAtom)
  const calorieTarget = useAtomValue(calorieTargetAtom)

  const caloriesPerDay = useCaloriesPerDay()

  if (goal === "LOSE_WEIGHT") return caloriesPerDay - calorieTarget!
  if (goal === "GAIN_WEIGHT") return caloriesPerDay + calorieTarget!

  return caloriesPerDay
}
