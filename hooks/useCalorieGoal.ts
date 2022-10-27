import { useEffect, useState } from "react";

const useCalorieGoal = (
  goal: "MAINTAIN" | "LOSE_WEIGHT" | "GAIN_WEIGHT",
  caloriesPerDay: number,
  calorieLevel: number
): number => {
  const [calories, setCalories] = useState(caloriesPerDay);

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
