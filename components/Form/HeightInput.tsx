import { useEffect, useState } from "react";
import { Else, If, Then } from "react-if";

import useBodyInfoStore from "stores/useBodyInfoStore";
import useFormStore from "stores/useFormStore";

const HeightInput = () => {
  const { height, setHeight } = useBodyInfoStore();
  const { metric, switchMetric } = useFormStore();

  const [inches, setInches] = useState<null | number>(null);
  const [feet, setFeet] = useState<null | number>(null);

  useEffect(() => {
    if (!metric && feet !== null) {
      return setHeight(feet / 0.032808 + (inches || 0) * 2.54);
    }
  }, [feet, inches, setFeet, setInches, setHeight, metric]);

  // clear inputs when switching metric/imperial
  useEffect(() => {
    setHeight(null);
    setFeet(null);
    setInches(null);
  }, [metric, setHeight]);

  return (
    <div>
      <p>
        Height (
        <span
          className={`pointer ${metric && "underline"}`}
          onClick={() => switchMetric(true)}
        >
          cm
        </span>
        /
        <span
          className={`pointer ${!metric && "underline"}`}
          onClick={() => switchMetric(false)}
        >
          ft
        </span>
        )
      </p>

      <If condition={metric}>
        <Then>
          <input
            type="number"
            className="border-[1px]"
            value={height === null || height === 0 ? "" : height}
            onChange={({ target }) => setHeight(+target.value)}
            placeholder="cm"
            min={1}
          />
        </Then>
        <Else>
          <input
            type="number"
            className="border-[1px]"
            value={feet === null || feet === 0 ? "" : feet}
            onChange={({ target }) => setFeet(+target.value)}
            placeholder="ft"
            min={1}
          />
          <input
            type="number"
            className="border-[1px]"
            value={inches === null || inches === 0 ? "" : inches}
            onChange={({ target }) => setInches(+target.value)}
            placeholder="inch"
            min={0}
            max={11}
          />
        </Else>
      </If>
    </div>
  );
};

export default HeightInput;
