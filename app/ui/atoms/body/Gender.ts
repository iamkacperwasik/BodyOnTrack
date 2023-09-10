import {atom} from "jotai"

export type Gender = "Female" | "Male"

export const gender_atom = atom<Gender>("Male")
