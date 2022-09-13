import create from 'zustand';

type BodyInfoStore = {
  age: number | null;
  weight: number | null;
  height: number | null;
  gender: 'M' | 'F';

  setAge(age: number): void;
  setWeight(weight: number): void;
  setHeight(height: number): void;
  switchGender(gender: 'M' | 'F'): void;
};

export const useBodyInfoStore = create<BodyInfoStore>((set) => ({
  age: null,
  weight: null,
  height: null,
  gender: 'M',

  setAge: (age) => set((state) => ({...state, age})),
  setWeight: (weight) => set((state) => ({...state, weight})),
  setHeight: (height) => set((state) => ({...state, height})),
  switchGender: (gender) => set((state) => ({...state, gender})),
}));
