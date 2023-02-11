import {create} from "zustand"

type BodyInfoStore = {
  age: number | null
  weight: number | null
  height: number | null
  gender: "M" | "F"

  setAge(age: number | null): void
  setWeight(weight: number | null): void
  setHeight(height: number | null): void
  switchGender(gender: "M" | "F"): void
}

const useBodyInfoStore = create<BodyInfoStore>((set) => ({
  age: null,
  weight: null,
  height: null,
  gender: "M",

  setAge: (age) => set((state) => ({...state, age})),
  setWeight: (weight) => set((state) => ({...state, weight})),
  setHeight: (height) => set((state) => ({...state, height})),
  switchGender: (gender) => set((state) => ({...state, gender})),
}))

export default useBodyInfoStore
