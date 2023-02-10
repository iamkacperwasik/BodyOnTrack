import { ChangeEvent } from "react";

import useBodyInfoStore from "stores/BodyInfo";

const Age = () => {
  const { age, setAge } = useBodyInfoStore();

  return (
    <div>
      <p className="text-2xl mb-4">Age</p>
      <input
        type="number"
        className="border-[1px] p-2 w-full"
        value={age === null || age === 0 ? "" : age}
        onChange={({ target }) => setAge(Number(target.value))}
        min={1}
        placeholder="years"
      />
    </div>
  );
};

export default Age;
