import { Unless } from "react-if";

import Activity from "components/Levels/Activity";
import Deficit from "components/Levels/Deficit";

import useCalorieGoal from "hooks/useCalorieGoal";
import useWeightForecast from "hooks/useWeightForecast";

import useBodyInfoStore from "stores/BodyInfo";

const Calculations = () => {
  const { age, weight, height } = useBodyInfoStore();
  const forecast = useWeightForecast(10);
  const calories = useCalorieGoal();

  return (
    <Unless condition={age === null || weight === null || height === null}>
      <Activity />
      <Deficit />

      <div className="mt-5">
        <p>Calories per day: {calories}</p>
      </div>

      <div>
        <p>Forecast:</p>

        <span>
          {forecast.map((v) => v.toFixed(2)!).map((v) => `${v} kg, `)}
        </span>
      </div>
    </Unless>
  );
};

export default Calculations;
