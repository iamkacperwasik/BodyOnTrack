import {useAtomValue} from "jotai"

import {getAMR} from "formulas/AMR"
import {getBMR} from "formulas/BMR"

import {activityLevelAtom} from "stores/Activity"
import {ageAtom, heightAtom, sexAtom, weightAtom} from "stores/Body"

export const useCaloriesPerDay = () => {
  const age = useAtomValue(ageAtom)
  const weight = useAtomValue(weightAtom)
  const height = useAtomValue(heightAtom)
  const activityLevel = useAtomValue(activityLevelAtom)
  const sex = useAtomValue(sexAtom)

  const bmr = getBMR(sex, weight!, height!, age!)
  const amr = getAMR(bmr, activityLevel)

  return amr
}
