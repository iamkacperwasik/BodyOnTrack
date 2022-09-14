import create from 'zustand';
import * as yup from 'yup';

type BodyInfoStore = {
  age: number | null;
  weight: number | null;
  height: number | null;
  gender: 'M' | 'F';

  setAge(age: number): void;
  setWeight(weight: number): void;
  setHeight(height: number): void;
  switchGender(gender: 'M' | 'F'): void;

  validate(): Promise<any>;
};

export const useBodyInfoStore = create<BodyInfoStore>((set, get) => ({
  age: null,
  weight: null,
  height: null,
  gender: 'M',

  setAge: (age) => set((state) => ({...state, age})),
  setWeight: (weight) => set((state) => ({...state, weight})),
  setHeight: (height) => set((state) => ({...state, height})),
  switchGender: (gender) => set((state) => ({...state, gender})),

  //@ts-ignore
  validate: () => bodyInfoSchema.validate(get()),
}));

export const bodyInfoSchema = yup.object().shape({
  age: yup.number().required('Age is required.').moreThan(0, 'Age should be positive number.'),
  weight: yup
    .number()
    .required('Weight is required.')
    .moreThan(0, 'Weight should be positive number.'),
  height: yup
    .number()
    .required('Height is required.')
    .moreThan(0, 'Height should be positive number.'),
});
