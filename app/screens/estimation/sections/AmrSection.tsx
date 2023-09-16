import {useAtomValue} from "jotai"

import {calculate_amr} from "formulas/Amr"
import {calculate_bmr} from "formulas/Bmr"

import {activity_level_atom} from "atoms/goal/ActivityLevel"

import {age_atom} from "atoms/body/Age"
import {gender_atom} from "atoms/body/Gender"
import {height_atom} from "atoms/body/Height"
import {weight_atom} from "atoms/body/Weight"

export const AmrSection = () => {
  // Get values from Jotai atoms for weight, height, age, gender, and activity level
  const weight = useAtomValue(weight_atom)
  const height = useAtomValue(height_atom)
  const age = useAtomValue(age_atom)
  const gender = useAtomValue(gender_atom)
  const activity_level = useAtomValue(activity_level_atom)

  // Calculate BMR (Basal Metabolic Rate) based on user data
  const bmr = calculate_bmr(gender, weight.value!, height.value!, age.value!)

  // Calculate AMR (Active Metabolic Rate) based on BMR and activity level
  const amr = calculate_amr(bmr, activity_level)

  return (
    <div>
      <h2 className="mb-2 mt-4 text-lg font-semibold">
        AMR (Active Metabolic Rate)
      </h2>
      <p className="text-3xl font-extrabold text-white">
        {amr.toFixed(2)} kcal
      </p>
    </div>
  )
}
