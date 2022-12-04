import { useEffect, useState } from "react";

import getBMR from "formulas/getBMR";

import useBodyInfoStore from "hooks/useBodyInfoStore";
import useCalculationsStore from "hooks/useCalculationsStore";

const applyActivityLevel = (bmr: number, level: number): number => {
  return bmr * [1.2, 1.375, 1.55, 1.725, 1.9].at(level)!;
};

const useCalorieGoal = (): number => {
  const { age, weight, height, gender } = useBodyInfoStore();
  const { activityLevel, goal, calorieLevel } = useCalculationsStore();

  const bmr = getBMR(gender, weight!, height!, age!);

  const [calories, setCalories] = useState(
    applyActivityLevel(bmr, activityLevel)
  );

  const caloriesPerDay = applyActivityLevel(bmr, activityLevel);

  useEffect(() => {
    if (goal === "GAIN_WEIGHT")
      setCalories(caloriesPerDay + caloriesPerDay * (calorieLevel / 100));

    if (goal === "LOSE_WEIGHT")
      setCalories(caloriesPerDay - caloriesPerDay * (calorieLevel / 100));

    if (goal === "MAINTAIN") setCalories(caloriesPerDay);
  }, [goal, calorieLevel, caloriesPerDay]);

  return Number(calories.toFixed(2));
};

export default useCalorieGoal;
