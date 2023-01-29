import useCaloriesPerDay from "hooks/useCaloriesPerDay";

import useCalculationsStore from "stores/useCalculationsStore";

const useCalorieGoal = (): number => {
  const { goal, surplus, deficit } = useCalculationsStore();
  const { amr } = useCaloriesPerDay();

  if (goal === "LOSE_WEIGHT") return amr - deficit;
  if (goal === "GAIN_WEIGHT") return amr + surplus;

  return amr;
};

export default useCalorieGoal;
