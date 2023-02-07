import { Unless } from "react-if";

import Chart from "components/Chart";
import Activity from "components/Levels/Activity";
import Deficit from "components/Levels/Deficit";

import useCalorieGoal from "hooks/useCalorieGoal";

import useBodyInfoStore from "stores/BodyInfo";

const Calculations = () => {
  const { age, weight, height } = useBodyInfoStore();
  const calories = useCalorieGoal();

  return (
    <Unless condition={age === null || weight === null || height === null}>
      <Activity />
      <Deficit />

      <div className="mt-5">
        <p>Calories per day: {calories}</p>
      </div>

      <div className="w-1/3">
        <Chart />
      </div>
    </Unless>
  );
};

export default Calculations;
