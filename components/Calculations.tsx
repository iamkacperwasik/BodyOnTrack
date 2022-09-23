import { Case, Default, Switch, Unless } from "react-if";

import ActivityLevel from "components/Form/Levels/Activity";
import DeficitLevel from "components/Form/Levels/Deficit";

import caloriesPerDay from "formulas/caloriesPerDay";
import getBMR from "formulas/getBMR";

import { useBodyInfoStore } from "stores/BodyInfo";
import { useCalculationsStore } from "stores/CalculationsStore";

const Calculations = () => {
  const { age, weight, height, gender } = useBodyInfoStore();
  const { activityLevel, goal, goalLevel } = useCalculationsStore();

  // const bmi = getBMI(weight!, height!);
  const bmr = getBMR(gender, weight!, height!, age!);
  const cpd = caloriesPerDay(bmr, activityLevel);

  return (
    <Unless condition={age === null || weight === null || height === null}>
      <ActivityLevel />
      <DeficitLevel />

      <div className="mt-5">
        <Switch>
          <Case condition={goal === "GAIN_WEIGHT"}>
            <p>
              Calories per day: {(cpd + cpd * (goalLevel / 100)).toFixed(2)}
            </p>
          </Case>
          <Case condition={goal === "LOSE_WEIGHT"}>
            <p>
              Calories per day: {(cpd - cpd * (goalLevel / 100)).toFixed(2)}
            </p>
          </Case>
          <Default>
            <p>Calories per day: {cpd.toFixed(2)}</p>
          </Default>
        </Switch>
      </div>
    </Unless>
  );
};

export default Calculations;
