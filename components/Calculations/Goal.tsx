import { useEffect, useState } from "react";
import { Case, Switch } from "react-if";

import useCaloriesPerDay from "hooks/useCaloriesPerDay";

import useCalculationsStore from "stores/Calculations";

const Goal = () => {
  const { goal, setGoal, setDeficit, setSurplus } = useCalculationsStore();
  const { amr } = useCaloriesPerDay();

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (goal === "LOSE_WEIGHT") return setDeficit(amr * (percent / 100));
    if (goal === "GAIN_WEIGHT") return setSurplus(amr * (percent / 100));
  }, [amr, goal, percent, setPercent, setDeficit, setSurplus]);

  useEffect(() => {
    setPercent(0);
  }, [goal]);

  return (
    <div>
      <p className="text-2xl mb-4">Goal</p>

      <select
        value={goal}
        onChange={({ target }) => setGoal(target.value as Goal)}
        className="py-1 px-4 text-center"
      >
        <option value="MAINTAIN">Maintain weight</option>
        <option value="LOSE_WEIGHT">Lose weight</option>
        <option value="GAIN_WEIGHT">Gain weight</option>
      </select>

      <Switch>
        <Case condition={goal === "LOSE_WEIGHT"}>
          <span> with </span>
          <input
            type="number"
            className="border-[1px] w-min"
            min={0}
            max={50}
            onChange={({ target }) => setPercent(Number(target.value))}
            value={percent}
          />
          <span>% deficit</span>
        </Case>

        <Case condition={goal === "GAIN_WEIGHT"}>
          <span> with </span>
          <input
            type="number"
            className="border-[1px] w-min"
            min={0}
            max={50}
            onChange={({ target }) => setPercent(Number(target.value))}
            value={percent}
          />
          <span>% surplus</span>
        </Case>
      </Switch>
    </div>
  );
};

export default Goal;
