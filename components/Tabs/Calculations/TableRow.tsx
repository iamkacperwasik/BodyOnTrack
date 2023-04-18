import {When} from "react-if"

import {formatFloat} from "util/Number"

type Props = {
  date: Date
  weight: number
  bmi: number
  target: number
  caloriesPerDay: number
  goal: Goal
}

export const TableRow = ({
  bmi,
  caloriesPerDay,
  date,
  target,
  weight,
  goal,
}: Props) => (
  <tr className="font-mono text-lg">
    <td className="">
      <span>{date.toLocaleDateString()}</span>
    </td>
    <td className="">
      <span>{formatFloat(weight)} kg</span>
    </td>
    <td className="flex items-center gap-2">
      <span>{formatFloat(bmi)}</span>

      <div className="relative h-[12px] w-[12px] rounded-sm bg-green-300" />
    </td>
    <td className="">
      <When condition={goal === "MAINTAIN"}>
        <span className="text-sm text-gray-400">-</span>
      </When>

      <When condition={goal === "LOSE_WEIGHT"}>
        <span className="text-sm text-gray-400">- </span>
        <span>{formatFloat(target)} kcal</span>
      </When>

      <When condition={goal === "GAIN_WEIGHT"}>
        <span className="text-sm text-gray-400">+ </span>
        <span>{formatFloat(target)} kcal</span>
      </When>
    </td>
    <td className="">{formatFloat(caloriesPerDay)} kcal</td>
  </tr>
)
