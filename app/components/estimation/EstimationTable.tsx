import {useAtomValue} from "jotai"

import {calculate_bmi} from "formulas/Bmi"
import {calculate_bmr} from "formulas/Bmr"

import {useWeightProjection} from "hooks/useWeightProjection"

import {activity_level_atom, get_pal_multiplier} from "atoms/goal/ActivityLevel"
import {calorie_target_atom} from "atoms/goal/CalorieTarget"
import {goal_atom} from "atoms/goal/Goal"

import {age_atom} from "atoms/body/Age"
import {gender_atom} from "atoms/body/Gender"
import {height_atom} from "atoms/body/Height"

export const EstimationTable = () => {
  const {value: height} = useAtomValue(height_atom)
  const {value: age} = useAtomValue(age_atom)
  const goal = useAtomValue(goal_atom)
  let calorie_target = useAtomValue(calorie_target_atom)

  const gender = useAtomValue(gender_atom)
  const activity_level = useAtomValue(activity_level_atom)

  const weight_projection = useWeightProjection(7)

  const start_date = new Date()
  start_date.setDate(start_date.getDate() + 1)
  const offsets = Array.from({length: 7}, (_, i) => i)

  const calorie_multiplier = goal === "LOSE_WEIGHT" ? -1 : 1
  calorie_target *= calorie_multiplier

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-3 text-left">Day</th>
          <th className="py-3 text-left">Weight</th>
          <th className="py-3 text-left">BMI</th>
          <th className="py-3 text-left">BMR</th>
          <th className="py-3 text-left">Daily calories</th>
        </tr>
      </thead>
      <tbody>
        {offsets.map((offset, i) => {
          const current_date = new Date(start_date)
          current_date.setDate(start_date.getDate() + offset)

          const formatted_date = current_date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })

          const weight = weight_projection.at(i)!
          const bmi = calculate_bmi(weight, height!)
          const bmr =
            calculate_bmr(gender, weight, height!, age!) *
            get_pal_multiplier(activity_level)

          const calories = bmr + calorie_target

          return (
            <tr key={i}>
              <td className="py-2">{formatted_date}</td>
              <td className="py-2">{weight.toFixed(2)} kg</td>
              <td className="py-2">{bmi.toFixed(2)}</td>
              <td className="py-2">{bmr.toFixed(2)} kcal</td>
              <td className="py-2">{calories.toFixed(0)} kcal</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
