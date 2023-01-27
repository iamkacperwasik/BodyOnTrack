import { useEffect, useState } from "react";

import getAMR from "formulas/getAMR";

import useCaloriesPerDay from "hooks/useCaloriesPerDay";

import useCalculationsStore from "stores/useCalculationsStore";

const useCalorieGoal = (): number => {
  const { activityLevel, goal } = useCalculationsStore();
  const { surplus, deficit } = useCalculationsStore();

  const { bmr, amr } = useCaloriesPerDay();

  const [calories, setCalories] = useState(getAMR(bmr, activityLevel));

  useEffect(() => {
    if (goal === "LOSE_WEIGHT") setCalories(amr - deficit);
    if (goal === "GAIN_WEIGHT") setCalories(amr + surplus);
    if (goal === "MAINTAIN") setCalories(amr);
  }, [goal, amr, deficit, surplus]);

  return Number(calories.toFixed(2));
};

export default useCalorieGoal;
