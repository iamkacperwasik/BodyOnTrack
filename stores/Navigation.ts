import {atom} from "jotai"

type TABS = "ACTIVITY/GOAL" | "BODY" | "CALCULATIONS"

export const tabAtom = atom<TABS>("BODY")
