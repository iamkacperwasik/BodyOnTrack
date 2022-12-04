import create from "zustand";

type CalculationsStore = {
  activityLevel: 0 | 1 | 2 | 3 | 4;
  goal: "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT";
  calorieLevel: number;

  setActivityLevel(level: 0 | 1 | 2 | 3 | 4): void;
  setGoal(goal: "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT"): void;
  setCalorieLevel(calories: number): void;
};

const useCalculationsStore = create<CalculationsStore>((set) => ({
  activityLevel: 0,
  goal: "MAINTAIN",
  calorieLevel: 0,

  setActivityLevel: (level) =>
    set((state) => ({ ...state, activityLevel: level })),
  setGoal: (goal) => set((state) => ({ ...state, goal })),
  setCalorieLevel: (calories) =>
    set((state) => ({ ...state, calorieLevel: calories })),
}));

export default useCalculationsStore;
