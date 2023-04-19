import {atom} from "jotai"

export type Sex = "F" | "M"

export const ageAtom = atom<null | number>(null)
export const weightAtom = atom<null | number>(null)
export const heightAtom = atom<null | number>(null)

export const sexAtom = atom<Sex>("M")
