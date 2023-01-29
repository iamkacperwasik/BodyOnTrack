import getAMR from "formulas/getAMR";
import getBMR from "formulas/getBMR";

import useBodyInfoStore from "stores/useBodyInfoStore";
import useCalculationsStore from "stores/useCalculationsStore";

const useCaloriesPerDay = () => {
  const { activityLevel } = useCalculationsStore();
  const { age, weight, height, gender } = useBodyInfoStore();

  const bmr = getBMR(gender, weight!, height!, age!);
  const amr = getAMR(bmr, activityLevel);

  return { bmr, amr };
};

export default useCaloriesPerDay;
