import useCaloriesPerDay from "hooks/useCaloriesPerDay"

import useCalculationsStore from "stores/Calculations"

const useCalorieGoal = () => {
  const {goal, surplus, deficit} = useCalculationsStore()
  const {amr} = useCaloriesPerDay()

  if (goal === "LOSE_WEIGHT") return {calories: amr - deficit}
  if (goal === "GAIN_WEIGHT") return {calories: amr + surplus}

  return {calories: amr}
}

export default useCalorieGoal
