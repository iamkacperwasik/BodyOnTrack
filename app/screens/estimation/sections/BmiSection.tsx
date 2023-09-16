import clsx from "clsx"
import {useAtomValue} from "jotai"
import {useState} from "react"

import {BmiPopover} from "screens/estimation/popovers/BmiPopover"

import {calculate_bmi} from "formulas/Bmi"

import {height_atom} from "atoms/body/Height"
import {weight_atom} from "atoms/body/Weight"

export const BmiSection = () => {
  // State to control the visibility of the BMI popover
  const [show_popover, set_show_popover] = useState(false)

  // Get the current weight and height from Jotai atoms
  const weight = useAtomValue(weight_atom)
  const height = useAtomValue(height_atom)

  // Calculate the BMI value based on weight and height
  const bmi_value = calculate_bmi(weight.value!, height.value!)

  return (
    <div className="relative">
      <h2 className="mb-2 text-lg font-semibold">BMI (Body Mass Index)</h2>
      <p
        // Apply CSS classes conditionally based on the BMI value
        className={clsx("cursor-help text-3xl font-extrabold underline", {
          "text-green-500": bmi_value >= 18.5 && bmi_value <= 24.9,
          "text-red-500": bmi_value < 18.5 || bmi_value > 24.9,
        })}
        // Show the popover on mouse enter and hide it on mouse leave
        onMouseEnter={() => set_show_popover(true)}
        onMouseLeave={() => set_show_popover(false)}
      >
        {bmi_value.toFixed(2)}
      </p>

      <BmiPopover value={bmi_value} visible={show_popover} />
    </div>
  )
}
