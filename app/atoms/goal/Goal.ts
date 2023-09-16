import {atomWithStorage} from "jotai/utils"

export type WeightGoal = "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT"

/**
 * An atom to store the user's weight management goal.
 *
 * This atom is used to store the user's weight management goal. It can have one of three values:
 * - "MAINTAIN": Indicates the goal is to maintain the current weight.
 * - "LOSE_WEIGHT": Indicates the goal is to lose weight.
 * - "GAIN_WEIGHT": Indicates the goal is to gain weight.
 */
export const goal_atom = atomWithStorage<WeightGoal>("goal", "MAINTAIN")
