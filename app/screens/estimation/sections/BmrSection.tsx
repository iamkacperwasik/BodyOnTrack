import {useAtomValue} from "jotai"

import {calculate_bmr} from "formulas/Bmr"

import {age_atom} from "atoms/body/Age"
import {gender_atom} from "atoms/body/Gender"
import {height_atom} from "atoms/body/Height"
import {weight_atom} from "atoms/body/Weight"

export const BmrSection = () => {
  // Get the current weight, height, age, and gender from Jotai atoms
  const weight = useAtomValue(weight_atom)
  const height = useAtomValue(height_atom)
  const age = useAtomValue(age_atom)
  const gender = useAtomValue(gender_atom)

  // Calculate the BMR value based on gender, weight, height, and age
  const bmr_value = calculate_bmr(
    gender,
    weight.value!,
    height.value!,
    age.value!
  )

  return (
    <div>
      <h2 className="mb-2 mt-4 text-lg font-semibold">
        BMR (Basal Metabolic Rate)
      </h2>
      <p className="text-3xl font-extrabold text-white">
        {bmr_value.toFixed(2)} kcal
      </p>
    </div>
  )
}
