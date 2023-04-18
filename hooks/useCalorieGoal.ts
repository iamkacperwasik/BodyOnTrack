import {useAtomValue} from "jotai"

import {useCaloriesPerDay} from "hooks/useCaloriesPerDay"

import {calorieTargetAtom, goalAtom} from "stores/Goal"

export const useCalorieGoal = (): number => {
  const goal = useAtomValue(goalAtom)
  const calorieTarget = useAtomValue(calorieTargetAtom)

  const caloriesPerDay = useCaloriesPerDay()

  if (goal === "LOSE_WEIGHT") return caloriesPerDay - calorieTarget!
  if (goal === "GAIN_WEIGHT") return caloriesPerDay + calorieTarget!

  return caloriesPerDay
}
