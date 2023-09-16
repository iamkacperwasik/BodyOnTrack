// Calculate Active Metabolic Rate (AMR)
import {ActivityLevel} from "atoms/goal/ActivityLevel"

/**
 * Calculate Active Metabolic Rate (AMR) based on Basal Metabolic Rate (BMR) and activity level.
 *
 * @param {number} bmr - Basal Metabolic Rate (BMR)
 * @param {number} activity_level - Activity level (0 for sedentary, 1 for light exercise, etc.)
 * @returns {number} - Active Metabolic Rate (AMR)
 */
export const calculate_amr = (
  bmr: number,
  activity_level: ActivityLevel
): number => {
  const multipliers = {
    SEDENTARY: 1.2,
    LIGHTLY_ACTIVE: 1.375,
    MODERATELY_ACTIVE: 1.55,
    VERY_ACTIVE: 1.725,
    EXTREMELY_ACTIVE: 1.9,
  }

  const selected_multiplier = multipliers[activity_level]

  return bmr * selected_multiplier
}
