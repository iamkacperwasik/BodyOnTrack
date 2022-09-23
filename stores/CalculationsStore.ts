import create from "zustand";

type CalculationsStore = {
  activityLevel: 1 | 2 | 3 | 4 | 5;
  goal: "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT";
  goalLevel: number;

  setActivityLevel(level: 1 | 2 | 3 | 4 | 5): void;
  setGoal(goal: "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT"): void;
  setGoalLevel(goalLevel: number): void;
};

export const useCalculationsStore = create<CalculationsStore>((set) => ({
  activityLevel: 1,
  goal: "MAINTAIN",
  goalLevel: 0,

  setActivityLevel: (level) =>
    set((state) => ({ ...state, activityLevel: level })),
  setGoal: (goal) => set((state) => ({ ...state, goal })),
  setGoalLevel: (level) => set((state) => ({ ...state, goalLevel: level })),
}));
