import create from "zustand";

type CalculationsStore = {
  activityLevel: 1 | 2 | 3 | 4 | 5;
  goal: "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT";
  calorieLevel: number;

  setActivityLevel(level: 1 | 2 | 3 | 4 | 5): void;
  setGoal(goal: "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT"): void;
  setCalorieLevel(calories: number): void;
};

export const useCalculationsStore = create<CalculationsStore>((set) => ({
  activityLevel: 1,
  goal: "MAINTAIN",
  calorieLevel: 0,

  setActivityLevel: (level) =>
    set((state) => ({ ...state, activityLevel: level })),
  setGoal: (goal) => set((state) => ({ ...state, goal })),
  setCalorieLevel: (calories) =>
    set((state) => ({ ...state, calorieLevel: calories })),
}));
