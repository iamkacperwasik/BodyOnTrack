import { Case, Default, Switch, Unless } from "react-if";

import ActivityLevel from "components/Form/Levels/Activity";
import DeficitLevel from "components/Form/Levels/Deficit";

import getBMR from "formulas/getBMR";
import getCaloriesForActivityLevel from "formulas/getCaloriesForActivityLevel";

import { useBodyInfoStore } from "hooks/useBodyInfoStore";
import { useCalculationsStore } from "hooks/useCalculationsStore";
import useCalorieGoal from "hooks/useCalorieGoal";

const Calculations = () => {
  const { age, weight, height, gender } = useBodyInfoStore();
  const { activityLevel, goal, calorieLevel } = useCalculationsStore();

  const bmr = getBMR(gender, weight!, height!, age!);
  const caloriesPerDay = getCaloriesForActivityLevel(bmr, activityLevel);
  const calories = useCalorieGoal(goal, caloriesPerDay, calorieLevel);

  return (
    <Unless condition={age === null || weight === null || height === null}>
      <ActivityLevel />
      <DeficitLevel />

      <div className="mt-5">
        <Switch>
          <Case condition={goal === "GAIN_WEIGHT"}>
            <p>Calories per day: {calories}</p>
          </Case>
          <Case condition={goal === "LOSE_WEIGHT"}>
            <p>Calories per day: {calories}</p>
          </Case>
          <Default>
            <p>Calories per day: {calories}</p>
          </Default>
        </Switch>
      </div>
    </Unless>
  );
};

export default Calculations;
