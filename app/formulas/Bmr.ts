import type {Gender} from "atoms/body/Gender"

// Calculate Basal Metabolic Rate (BMR)

/**
 * Calculate Basal Metabolic Rate (BMR) based on gender, weight in kilograms, height in centimeters, and age in years.
 *
 * @param {Gender} gender - Gender ("Male" for male, "Female" for female)
 * @param {number} weight_kg - Weight in kilograms
 * @param {number} height_cm - Height in centimeters
 * @param {number} age_years - Age in years
 * @returns {number} - Basal Metabolic Rate (BMR)
 */
export const calculate_bmr = (
  gender: Gender,
  weight_kg: number,
  height_cm: number,
  age_years: number
): number => {
  if (gender === "Male")
    return 66.47 + 13.75 * weight_kg + 5.003 * height_cm - 6.755 * age_years

  return 655.1 + 9.563 * weight_kg + 1.85 * height_cm - 4.676 * age_years
}
