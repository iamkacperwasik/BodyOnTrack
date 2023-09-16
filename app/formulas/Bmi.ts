// Calculate Body Mass Index (BMI)

/**
 * Calculate Body Mass Index (BMI) based on weight in kilograms and height in centimeters.
 *
 * @param {number} weight - Weight in kilograms
 * @param {number} height - Height in centimeters
 * @returns {number} - Body Mass Index (BMI)
 */
export const calculate_bmi = (weight: number, height: number): number => {
  return weight / (height / 100) ** 2
}
