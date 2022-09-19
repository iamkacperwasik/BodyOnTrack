import create from "zustand";

type BodyInfoStore = {
  age: number | null;
  weight: number | null;
  height: number | null;
  gender: "M" | "F";
  activityLevel: 1 | 2 | 3 | 4 | 5;

  setAge(age: number | null): void;
  setWeight(weight: number | null): void;
  setHeight(height: number | null): void;
  setActivityLevel(level: 1 | 2 | 3 | 4 | 5): void;
  switchGender(gender: "M" | "F"): void;

  metric: boolean;
  switchMetric(val: boolean): void;
};

export const useBodyInfoStore = create<BodyInfoStore>((set) => ({
  age: null,
  weight: null,
  height: null,
  gender: "M",
  activityLevel: 1,

  setAge: (age) => set((state) => ({ ...state, age })),
  setWeight: (weight) => set((state) => ({ ...state, weight })),
  setHeight: (height) => set((state) => ({ ...state, height })),
  setActivityLevel: (level) =>
    set((state) => ({ ...state, activityLevel: level })),
  switchGender: (gender) => set((state) => ({ ...state, gender })),

  metric: true,
  switchMetric: (val: boolean) => set((state) => ({ ...state, metric: val })),
}));
