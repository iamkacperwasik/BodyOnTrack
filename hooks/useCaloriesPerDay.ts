import {useAtomValue} from "jotai"

import {getAMR} from "formulas/AMR"
import {getBMR} from "formulas/BMR"

import {activityLevelAtom} from "stores/Activity"
import {ageAtom, heightAtom, sexAtom, weightAtom} from "stores/Body"
import {calorieTargetAtom, goalAtom} from "stores/Goal"

export const useCaloriesPerDay = (): number => {
  const age = useAtomValue(ageAtom)
  const weight = useAtomValue(weightAtom)
  const height = useAtomValue(heightAtom)
  const activityLevel = useAtomValue(activityLevelAtom)
  const sex = useAtomValue(sexAtom)
  const goal = useAtomValue(goalAtom)
  const calorieTarget = useAtomValue(calorieTargetAtom)

  const bmr = getBMR(sex, weight!, height!, age!)
  const amr = getAMR(bmr, activityLevel) // calories per day

  if (goal === "LOSE_WEIGHT") return amr - calorieTarget!
  if (goal === "GAIN_WEIGHT") return amr + calorieTarget!

  return amr
}
