import {useAtomValue} from "jotai"

import {getAMR} from "formulas/AMR"
import {getBMI} from "formulas/BMI"
import {getBMR} from "formulas/BMR"

import {formatFloat} from "util/Number"

import {activityLevelAtom} from "stores/Activity"
import {ageAtom, heightAtom, sexAtom} from "stores/Body"
import {calorieTargetAtom, goalAtom} from "stores/Goal"

import {BodyMassIndicator} from "./BodyMassIndicator"

type Props = {
  day: number
  weight: number
}

export const TableRow = ({day, weight}: Props) => {
  const age = useAtomValue(ageAtom)!
  const height = useAtomValue(heightAtom)!
  const activityLevel = useAtomValue(activityLevelAtom)!
  const sex = useAtomValue(sexAtom)!
  const goal = useAtomValue(goalAtom)!
  const calorieTarget = useAtomValue(calorieTargetAtom)!

  const date = new Date(Date.now() + day * 24 * 60 * 60 * 1000)
  const bmi = getBMI(weight, height)

  const bmr = getBMR(sex, weight, height, age)
  const amr = getAMR(bmr, activityLevel)

  return (
    <tr className="font-mono text-lg">
      <td className="py-[3px] pr-8">
        <span>{date.toLocaleDateString()}</span>
      </td>
      <td className="px-8">
        <span>{formatFloat(weight)} kg</span>
      </td>
      <td className="flex items-center gap-2 px-8">
        <span>{formatFloat(bmi)}</span>

        <BodyMassIndicator bmi={bmi} />
      </td>
      <td className="px-8 underline underline-offset-8">
        {goal === "MAINTAIN" && (
          <span>{formatFloat(amr + calorieTarget)} kcal</span>
        )}

        {goal === "LOSE_WEIGHT" && (
          <span>{formatFloat(amr - calorieTarget)} kcal</span>
        )}

        {goal === "GAIN_WEIGHT" && <span>{formatFloat(amr)} kcal</span>}
      </td>
      <td className="px-8">
        <span>{formatFloat(amr)}</span>
      </td>
    </tr>
  )
}
