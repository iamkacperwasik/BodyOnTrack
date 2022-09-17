import { FC, useEffect, useState } from "react";
import { Else, If, Then } from "react-if";

import { useBodyInfoStore } from "stores/BodyInfo";

const HeightInput: FC = () => {
  const { height, setHeight, metric, switchMetric } = useBodyInfoStore();

  const [inches, setInches] = useState<null | number>();
  const [feet, setFeet] = useState<null | number>();

  useEffect(() => {
    if (feet !== null) {
      setHeight(feet! / 0.032808 + (inches! ? inches! * 2.54 : 0));
    }
  }, [feet, inches, setFeet, setInches, setHeight]);

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
            value={height === null ? "" : height}
            onChange={({ target }) => setHeight(+target.value)}
            placeholder="cm"
          />
        </Then>
        <Else>
          <input
            type="number"
            className="border-[1px]"
            value={feet === null ? "" : feet}
            onChange={({ target }) => setFeet(+target.value)}
            placeholder="ft"
          />
          <input
            type="number"
            className="border-[1px]"
            value={inches === null ? "" : inches}
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
