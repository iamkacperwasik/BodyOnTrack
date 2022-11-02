export const activityLevels: [number, string][] = [
  [1.2, "Sedentary (little or no exercise)"],
  [1.375, " Lightly active (light exercise or sports 1-3 days/week)"],
  [1.55, "Moderately active (moderate exercise 3-5 days/week)"],
  [1.725, "Very active (hard exercise 6-7 days/week)"],
  [1.9, "Super active (very hard exercise and a physical job)"],
];

const getCaloriesForActivityLevel = (
  bmr: number,
  level: 0 | 1 | 2 | 3 | 4
): number => {
  const [activityLevel] = activityLevels[level];

  return bmr * activityLevel;
};

export default getCaloriesForActivityLevel;
