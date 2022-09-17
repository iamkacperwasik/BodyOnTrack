import { FC } from "react";

import { useBodyInfoStore } from "stores/BodyInfo";

const AgeInput: FC = () => {
  const { age, setAge } = useBodyInfoStore();

  return (
    <div>
      <p>Age:</p>
      <input
        type="number"
        className="border-[1px]"
        value={age === null ? "" : age}
        onChange={({ target }) => setAge(+target.value)}
      />
    </div>
  );
};

export default AgeInput;
