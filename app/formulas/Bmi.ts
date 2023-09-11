// Calculate Body Mass Index (BMI)

/**
 * Calculate Body Mass Index (BMI) based on weight in kilograms and height in centimeters.
 *
 * @param {number} weight_kg - Weight in kilograms
 * @param {number} height_cm - Height in centimeters
 * @returns {number} - Body Mass Index (BMI)
 */
export const calculate_bmi = (weight_kg: number, height_cm: number): number => {
  return weight_kg / (height_cm / 100) ** 2
}
