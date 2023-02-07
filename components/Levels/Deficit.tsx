import { useEffect, useState } from "react";

import useCaloriesPerDay from "hooks/useCaloriesPerDay";

import useCalculationsStore from "stores/Calculations";

const Deficit = () => {
  const { goal, setGoal, setDeficit, setSurplus } = useCalculationsStore();
  const { amr } = useCaloriesPerDay();

  const [deficitPercent, setDeficitPercent] = useState(0);
  const [surplusPercent, setSurplusPercent] = useState(0);

  useEffect(() => {
    if (goal === "LOSE_WEIGHT") return setDeficit(amr * (deficitPercent / 100));
    if (goal === "GAIN_WEIGHT") return setSurplus(amr * (surplusPercent / 100));
  }, [amr, deficitPercent, goal, setDeficit, setSurplus, surplusPercent]);

  return (
    <table className="mt-4">
      <thead>
        <tr className="text-left">
          <th>Goal</th>
        </tr>
      </thead>

      <tbody>
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
              onChange={({ target }) => setDeficitPercent(+target.value)}
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
              onChange={({ target }) => setSurplusPercent(+target.value)}
            />
            <span>% surplus</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Deficit;
