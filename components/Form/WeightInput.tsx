import { FC, useEffect, useState } from "react";
import { Else, If, Then } from "react-if";

import { useBodyInfoStore } from "stores/BodyInfo";

const WeightInput: FC = () => {
  const { weight, setWeight, metric, switchMetric } = useBodyInfoStore();

  const [lbs, setLbs] = useState<null | number>();

  useEffect(() => {
    if (lbs !== null) {
      setWeight(lbs! * 0.45359237);

      return;
    }
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
            value={weight === null ? "" : weight}
            onChange={({ target }) => setWeight(+target.value)}
            placeholder="kg"
          />
        </Then>
        <Else>
          <input
            type="number"
            className="border-[1px]"
            value={lbs === null ? "" : lbs}
            onChange={({ target }) => setLbs(+target.value)}
            placeholder="lbs"
          />
        </Else>
      </If>
    </div>
  );
};

export default WeightInput;
