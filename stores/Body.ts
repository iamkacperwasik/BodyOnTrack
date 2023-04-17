import {atom} from "jotai"

export type Sex = "F" | "M"
export type Goal = "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT"
export type ActivityLevel = 0 | 1 | 2 | 3 | 4

export const ageAtom = atom<null | number>(null)
export const weightAtom = atom<null | number>(null)
export const heightAtom = atom<null | number>(null)

export const sexAtom = atom<Sex>("M")

export const activityLevelAtom = atom<ActivityLevel>(0)
export const goalAtom = atom<Goal>("MAINTAIN")
export const goalTargetAtom = atom<null | number>(null)
