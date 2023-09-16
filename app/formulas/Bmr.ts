import type {Gender} from "atoms/body/Gender"

// Calculate Basal Metabolic Rate (BMR)

/**
 * Calculate Basal Metabolic Rate (BMR) based on gender, weight in kilograms, height in centimeters, and age in years.
 *
 * @param {Gender} gender - Gender ("Male" for male, "Female" for female)
 * @param {number} weight - Weight in kilograms
 * @param {number} height - Height in centimeters
 * @param {number} age - Age in years
 * @returns {number} - Basal Metabolic Rate (BMR)
 */
export const calculate_bmr = (
  gender: Gender,
  weight: number,
  height: number,
  age: number
): number => {
  if (gender === "Male") {
    return 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age
  }

  return 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age
}
