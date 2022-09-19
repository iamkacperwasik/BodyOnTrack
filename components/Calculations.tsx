import { Unless } from "react-if";

import ActivityLevel from "components/Form/ActivityLevel";

import caloriesPerDay from "formulas/caloriesPerDay";
import getBMI from "formulas/getBMI";
import getBMR from "formulas/getBMR";

import { useBodyInfoStore } from "stores/BodyInfo";

const Calculations = () => {
  const { age, weight, height, gender, activityLevel } = useBodyInfoStore();

  const bmi = getBMI(weight!, height!);
  const bmr = getBMR(gender, weight!, height!, age!);
  const cpd = caloriesPerDay(bmr, activityLevel);

  return (
    <Unless condition={age === null || weight === null || height === null}>
      <ActivityLevel />

      <div className="mt-5">
        <p>BMI: {bmi.toFixed(2)}</p>
        <p>BMR: {bmr.toFixed(2)}</p>
        <p>Calories per day: {cpd.toFixed(2)}</p>
      </div>
    </Unless>
  );
};

export default Calculations;
