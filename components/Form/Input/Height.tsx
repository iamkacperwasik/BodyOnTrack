import { useEffect, useState } from "react";
import { Else, If, Then } from "react-if";

import useBodyInfoStore from "stores/BodyInfo";
import useFormStore from "stores/Form";

const Height = () => {
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
      <p className="text-2xl mb-4">
        <span>Height (</span>
        <span
          className={`pointer ${metric && "font-bold"}`}
          onClick={() => switchMetric(true)}
        >
          cm
        </span>
        <span>/</span>
        <span
          className={`pointer ${!metric && "font-bold"}`}
          onClick={() => switchMetric(false)}
        >
          ft
        </span>
        <span>)</span>
      </p>

      <div className="flex gap-2">
        <If condition={metric}>
          <Then>
            <input
              type="number"
              className="border-[1px] p-2 w-full"
              value={height === null || height === 0 ? "" : height}
              onChange={({ target }) => setHeight(+target.value)}
              placeholder="cm"
              min={1}
            />
          </Then>
          <Else>
            <input
              type="number"
              className="border-[1px] p-2 w-2/3"
              value={feet === null || feet === 0 ? "" : feet}
              onChange={({ target }) => setFeet(Number(target.value))}
              placeholder="ft"
              min={1}
            />

            <input
              type="number"
              className="border-[1px] p-2 w-1/3"
              value={inches === null || inches === 0 ? "" : inches}
              onChange={({ target }) => setInches(Number(target.value))}
              placeholder="inch"
              min={0}
              max={11}
            />
          </Else>
        </If>
      </div>
    </div>
  );
};

export default Height;
