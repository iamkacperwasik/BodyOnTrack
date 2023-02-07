import { create } from "zustand";

type FormStore = {
  metric: boolean;
  switchMetric(val: boolean): void;
};

const useFormStore = create<FormStore>((set) => ({
  metric: true,
  switchMetric: (val: boolean) => set((state) => ({ ...state, metric: val })),
}));

export default useFormStore;
