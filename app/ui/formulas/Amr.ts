// Calculate Active Metabolic Rate (AMR)

/**
 * Calculate Active Metabolic Rate (AMR) based on Basal Metabolic Rate (BMR) and activity level.
 *
 * @param {number} bmr - Basal Metabolic Rate (BMR)
 * @param {number} activity_level - Activity level (0 for sedentary, 1 for light exercise, etc.)
 * @returns {number} - Active Metabolic Rate (AMR)
 */
export const calculate_amr = (bmr: number, activity_level: number): number => {
  const activity_multipliers = [1.2, 1.375, 1.55, 1.725, 1.9]
  const selected_multiplier = activity_multipliers[activity_level]

  return bmr * selected_multiplier
}
