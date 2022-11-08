import { useEffect, useState } from "react";

import { activityLevels } from "components/Levels/Activity";

import getBMR from "formulas/getBMR";

import { useBodyInfoStore } from "hooks/useBodyInfoStore";
import { useCalculationsStore } from "hooks/useCalculationsStore";

const applyActivityLevel = (bmr: number, level: 0 | 1 | 2 | 3 | 4): number => {
  const [activityLevel] = activityLevels[level];

  return bmr * activityLevel;
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
