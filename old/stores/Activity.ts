import {atom} from "jotai"

export type ActivityLevel = 0 | 1 | 2 | 3 | 4

export const activityLevelAtom = atom<ActivityLevel>(0)
