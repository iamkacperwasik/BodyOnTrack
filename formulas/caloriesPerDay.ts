const levels = [1.2, 1.375, 1.55, 1.725, 1.9];

const caloriesPerDay = (bmr: number, level: 1 | 2 | 3 | 4 | 5): number => {
  return bmr * levels[level - 1];
};

export default caloriesPerDay;
