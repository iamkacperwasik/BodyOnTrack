import { arrayOfSize } from "util/arrayOfSize";

import useBodyInfoStore from "stores/useBodyInfoStore";
import useCalculationsStore from "stores/useCalculationsStore";

const FAT_CALORIES = 7700;

const useWeightForecast = (days: number): number[] => {
  const { goal, surplus, deficit } = useCalculationsStore();
  const { weight } = useBodyInfoStore();

  if (goal === "GAIN_WEIGHT")
    return arrayOfSize(days)
      .map((_, i) => surplus * i)
      .map((calories) => calories / FAT_CALORIES) // gained weight
      .map((gainedWeight) => weight! + gainedWeight);

  if (goal === "LOSE_WEIGHT")
    return arrayOfSize(days)
      .map((_, i) => deficit * i)
      .map((calories) => calories / FAT_CALORIES) // lost weight
      .map((lostWeight) => weight! - lostWeight);

  return arrayOfSize(days).map(() => weight) as number[]; // LINEAR
};

export default useWeightForecast;