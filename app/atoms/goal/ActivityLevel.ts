import {atomWithStorage} from "jotai/utils"

export type ActivityLevel =
  | "SEDENTARY"
  | "LIGHTLY_ACTIVE"
  | "MODERATELY_ACTIVE"
  | "VERY_ACTIVE"
  | "EXTREMELY_ACTIVE"

/**
 * An atom representing the user's activity level.
 *
 * The activity level is represented using descriptive string values:
 * - "SEDENTARY": Indicates little or no physical activity.
 * - "LIGHTLY_ACTIVE": Represents light physical activity or exercise.
 * - "MODERATELY_ACTIVE": Represents moderate physical activity or exercise.
 * - "VERY_ACTIVE": Indicates high levels of physical activity or exercise.
 * - "EXTREMELY_ACTIVE": Indicates very high levels of physical activity or exercise.
 */
export const activity_level_atom = atomWithStorage<ActivityLevel>(
  "activity_level",
  "SEDENTARY"
)

export const get_pal_multiplier = (activity_level: ActivityLevel) => {
  const multipliers = {
    SEDENTARY: 1.2,
    LIGHTLY_ACTIVE: 1.375,
    MODERATELY_ACTIVE: 1.55,
    VERY_ACTIVE: 1.725,
    EXTREMELY_ACTIVE: 1.9,
  }

  return multipliers[activity_level]
}
