import { Unless } from "react-if";

import ActivityLevel from "components/Levels/Activity";
import DeficitLevel from "components/Levels/Deficit";

import useBodyInfoStore from "hooks/useBodyInfoStore";
import useCalorieGoal from "hooks/useCalorieGoal";

const Calculations = () => {
  const { age, weight, height } = useBodyInfoStore();

  const calories = useCalorieGoal();

  return (
    <Unless condition={age === null || weight === null || height === null}>
      <ActivityLevel />
      <DeficitLevel />

      <div className="mt-5">
        <p>Calories per day: {calories}</p>
      </div>
    </Unless>
  );
};

export default Calculations;
