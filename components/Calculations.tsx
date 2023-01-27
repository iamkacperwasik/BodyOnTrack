import { Unless } from "react-if";

import ActivityLevel from "components/Levels/Activity";
import DeficitLevel from "components/Levels/Deficit";

import useCalorieGoal from "hooks/useCalorieGoal";
import useWeightForecast from "hooks/useWeightForecast";

import useBodyInfoStore from "stores/useBodyInfoStore";

const Calculations = () => {
  const { age, weight, height } = useBodyInfoStore();

  const forecast = useWeightForecast(10);
  const calories = useCalorieGoal();

  return (
    <Unless condition={age === null || weight === null || height === null}>
      <ActivityLevel />
      <DeficitLevel />

      <div className="mt-5">
        <p>Calories per day: {calories}</p>
      </div>

      <div>
        <p>Forecast:</p>

        <span>{JSON.stringify(forecast.map((v) => v.toFixed(2)))}</span>
      </div>
    </Unless>
  );
};

export default Calculations;
