import { Unless } from "react-if";

import getBMI from "formulas/getBMI";
import getBMR from "formulas/getBMR";

import { useBodyInfoStore } from "stores/BodyInfo";

const Calculations = () => {
  const { age, weight, height, gender } = useBodyInfoStore();

  const bmi = getBMI(weight!, height!).toFixed(2);
  const bmr = getBMR(gender, weight!, height!, age!).toFixed(2);

  return (
    <Unless condition={age === null || weight === null || height === null}>
      <div className="mt-5">
        <p>BMI: {bmi}</p>
        <p>BMR: {bmr}</p>
      </div>
    </Unless>
  );
};

export default Calculations;
