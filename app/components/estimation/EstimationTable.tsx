import {useAtomValue} from "jotai"

import {calculate_bmi} from "formulas/Bmi"

import {height_atom} from "atoms/body/Height"

export const EstimationTable = () => {
  const {value: height_cm} = useAtomValue(height_atom)

  const start_date = new Date()
  start_date.setDate(start_date.getDate() + 1)

  const offsets = Array.from({length: 7}, (_, i) => i)

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-3 text-left">Day</th>
          <th className="py-3 text-left">Weight</th>
          <th className="py-3 text-left">BMI</th>
          <th className="py-3 text-left">Calories</th>
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

          const weight = 80
          const bmi = calculate_bmi(weight, height_cm!)

          return (
            <tr key={i}>
              <td className="py-2">{formatted_date}</td>
              <td className="py-2">{weight.toFixed(2)} kg</td>
              <td className="py-2">{bmi.toFixed(2)}</td>
              <td className="py-2">2000</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
