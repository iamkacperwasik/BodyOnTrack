import {Unless} from "react-if"

import ActivityList from "components/Calculations/ActivityList"
import Goal from "components/Calculations/Goal"
import Form from "components/Form/Form"
import Chart from "components/Visual/Chart"

import getBMI from "formulas/getBMI"

import useCalorieGoal from "hooks/useCalorieGoal"

import {formatBMI} from "util/formatting/formatBMI"
import {formatCalories} from "util/formatting/formatCalories"

import useBodyInfoStore from "stores/BodyInfo"

const Home = () => {
  const {age, weight, height} = useBodyInfoStore()
  const {calories} = useCalorieGoal()

  const formattedCalories = formatCalories(calories)
  const formattedBMI = formatBMI(getBMI(weight!, height!))

  return (
    <div className="mx-auto flex flex-col gap-8 p-4 md:w-1/2">
      <Form />

      <Unless condition={age === null || weight === null || height === null}>
        <div className="flex flex-col gap-8">
          <p className="text-2xl sm:text-3xl">Activity level</p>
          <ActivityList />

          <Goal />
        </div>

        <div className="mt-5 text-lg sm:text-2xl">
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
  )
}

export default Home
