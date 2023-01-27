import { useEffect, useState } from "react";
import { Else, If, Then } from "react-if";

import useBodyInfoStore from "stores/useBodyInfoStore";
import useFormStore from "stores/useFormStore";

const WeightInput = () => {
  const { weight, setWeight } = useBodyInfoStore();
  const { metric, switchMetric } = useFormStore();

  const [lbs, setLbs] = useState<null | number>(null);

  useEffect(() => {
    if (lbs !== null) return setWeight(lbs * 0.45359237);
  }, [lbs, setLbs, setWeight]);

  // clear inputs when switching metric/imperial
  useEffect(() => {
    setWeight(null);
    setLbs(null);
  }, [metric, setWeight]);

  return (
    <div>
      <p>
        Weight (
        <span
          className={`pointer ${metric && "underline"}`}
          onClick={() => switchMetric(true)}
        >
          kg
        </span>
        /
        <span
          className={`pointer ${!metric && "underline"}`}
          onClick={() => switchMetric(false)}
        >
          lb
        </span>
        )
      </p>

      <If condition={metric}>
        <Then>
          <input
            type="number"
            className="border-[1px]"
            value={weight === null || weight === 0 ? "" : weight}
            onChange={({ target }) => setWeight(+target.value)}
            placeholder="kg"
            min={1}
          />
        </Then>
        <Else>
          <input
            type="number"
            className="border-[1px]"
            value={lbs === null || lbs === 0 ? "" : lbs}
            onChange={({ target }) => setLbs(+target.value)}
            placeholder="lbs"
            min={1}
          />
        </Else>
      </If>
    </div>
  );
};

export default WeightInput;
