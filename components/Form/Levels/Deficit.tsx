import { useEffect, useState } from "react";

import { useCalculationsStore } from "stores/CalculationsStore";

const DeficitLevel = () => {
  const { goal, setGoal, setCalorieLevel } = useCalculationsStore();

  const [loseWeightValue, setLoseWeightValue] = useState(0);
  const [gainWeightValue, setGainWeightValue] = useState(0);

  useEffect(() => {
    if (goal === "LOSE_WEIGHT") return setCalorieLevel(loseWeightValue);
    if (goal === "GAIN_WEIGHT") return setCalorieLevel(gainWeightValue);

    return;
  }, [goal, setGoal, loseWeightValue, gainWeightValue, setCalorieLevel]);

  return (
    <table className="mt-4">
      <tr className="text-left">
        <th>Goal</th>
      </tr>

      <tr>
        <td
          className={goal === "MAINTAIN" ? "underline" : "cursor-pointer"}
          onClick={() => setGoal("MAINTAIN")}
        >
          Maintain weight
        </td>
      </tr>

      <tr>
        <td
          className={goal === "LOSE_WEIGHT" ? "underline" : "cursor-pointer"}
          onClick={() => setGoal("LOSE_WEIGHT")}
        >
          Lose weight
        </td>
        <td className="pl-4">
          <span>with </span>
          <input
            type="number"
            className="border-[1px] w-min"
            disabled={goal !== "LOSE_WEIGHT"}
            min={0}
            max={50}
            onChange={({ target }) => setLoseWeightValue(+target.value)}
          />
          <span>% deficit</span>
        </td>
      </tr>

      <tr>
        <td
          className={goal === "GAIN_WEIGHT" ? "underline" : "cursor-pointer"}
          onClick={() => setGoal("GAIN_WEIGHT")}
        >
          Gain weight
        </td>
        <td className="pl-4">
          <span>with </span>
          <input
            type="number"
            className="border-[1px] w-min"
            disabled={goal !== "GAIN_WEIGHT"}
            min={0}
            max={50}
            onChange={({ target }) => setGainWeightValue(+target.value)}
          />
          <span>% surplus</span>
        </td>
      </tr>
    </table>
  );
};

export default DeficitLevel;
