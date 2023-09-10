import {atom} from "jotai"

export type WeightGoal = "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT"

export const goal_atom = atom<WeightGoal>("MAINTAIN")
