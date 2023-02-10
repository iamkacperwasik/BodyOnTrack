import { create } from "zustand";

export type Goal = "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT";

type CalculationsStore = {
  activityLevel: 0 | 1 | 2 | 3 | 4;
  goal: Goal;
  surplus: number;
  deficit: number;

  setActivityLevel(level: 0 | 1 | 2 | 3 | 4): void;
  setGoal(goal: Goal): void;
  setSurplus(surplus: number): void;
  setDeficit(deficit: number): void;
};

const useCalculationsStore = create<CalculationsStore>((set) => ({
  activityLevel: 0,
  goal: "MAINTAIN",
  surplus: 0,
  deficit: 0,

  setActivityLevel: (level) =>
    set((state) => ({ ...state, activityLevel: level })),
  setGoal: (goal) => set((state) => ({ ...state, goal })),
  setDeficit: (deficit) => set((state) => ({ ...state, deficit })),
  setSurplus: (surplus) => set((state) => ({ ...state, surplus })),
}));

export default useCalculationsStore;
