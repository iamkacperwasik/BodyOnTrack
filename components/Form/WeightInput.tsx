import { FC } from "react";

import { useBodyInfoStore } from "stores/BodyInfo";

const WeightInput: FC = () => {
  const { weight, setWeight, metric, switchMetric } = useBodyInfoStore();

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

      <input
        type="number"
        className="border-[1px]"
        value={weight === null ? "" : weight}
        onChange={({ target }) => setWeight(+target.value)}
      />
    </div>
  );
};

export default WeightInput;
