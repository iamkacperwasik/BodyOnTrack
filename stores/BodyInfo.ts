import * as yup from "yup";
import create from "zustand";

type BodyInfoStore = {
  age: number | null;
  weight: number | null;
  height: number | null;
  gender: "M" | "F";

  setAge(age: number | null): void;
  setWeight(weight: number | null): void;
  setHeight(height: number | null): void;
  switchGender(gender: "M" | "F"): void;

  validate(): Promise<any>;
  setBodyInfoError(error: null | string): void;
  bodyInfoError: null | string;

  metric: boolean;
  switchMetric(val: boolean): void;
};

export const useBodyInfoStore = create<BodyInfoStore>((set, get) => ({
  age: null,
  weight: null,
  height: null,
  gender: "M",

  setAge: (age) => set((state) => ({ ...state, age })),
  setWeight: (weight) => set((state) => ({ ...state, weight })),
  setHeight: (height) => set((state) => ({ ...state, height })),
  switchGender: (gender) => set((state) => ({ ...state, gender })),

  //@ts-ignore
  validate: () => {
    bodyInfoSchema
      .validate(get())
      .then(() => {
        get().setBodyInfoError(null);
      })
      .catch(({ errors: [error] }) => {
        get().setBodyInfoError(error);
      });
  },
  setBodyInfoError(error: null | string) {
    set((state) => ({ ...state, bodyInfoError: error }));
  },
  bodyInfoError: null,

  metric: true,
  switchMetric: (val: boolean) => set((state) => ({ ...state, metric: val })),
}));

export const bodyInfoSchema = yup.object().shape({
  age: yup
    .number()
    .required("Age is required.")
    .moreThan(0, "Age should be positive number."),
  weight: yup
    .number()
    .required("Weight is required.")
    .moreThan(0, "Weight should be positive number."),
  height: yup
    .number()
    .required("Height is required.")
    .moreThan(0, "Height should be positive number."),
});
