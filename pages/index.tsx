import { Unless } from "react-if";

import ActivityList from "components/Calculations/ActivityList";
import Goal from "components/Calculations/Goal";
import Form from "components/Form/Form";
import Chart from "components/Visual/Chart";

import getBMI from "formulas/getBMI";

import useCalorieGoal from "hooks/useCalorieGoal";

import { formatBMI } from "util/formatting/formatBMI";
import { formatCalories } from "util/formatting/formatCalories";

import useBodyInfoStore from "stores/BodyInfo";

const Home = () => {
  const { age, weight, height } = useBodyInfoStore();
  const { calories } = useCalorieGoal();

  const formattedCalories = formatCalories(calories);
  const formattedBMI = formatBMI(getBMI(weight!, height!));

  return (
    <div className="p-4 flex flex-col gap-8">
      <Form />

      <Unless condition={age === null || weight === null || height === null}>
        <ActivityList />
        <Goal />

        <div className="mt-5 text-lg">
          <p>
            Your daily calorie intake: <b>{formattedCalories}</b>
          </p>
          <p>
            Your bmi is: <b>{formattedBMI}</b>
          </p>
        </div>

        <Chart />
      </Unless>
    </div>
  );
};

export default Home;
