import {atom} from "jotai"

export type Goal = "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT"

export const goalAtom = atom<Goal>("MAINTAIN")
export const calorieTargetAtom = atom<null | number>(null)
