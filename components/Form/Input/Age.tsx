import {ChangeEvent} from "react"

import useBodyInfoStore from "stores/BodyInfo"

const Age = () => {
  const {age, setAge} = useBodyInfoStore()

  return (
    <div>
      <p className="mb-4 text-2xl sm:text-3xl">Age</p>
      <input
        type="number"
        className="w-full border-[1px] p-2 sm:text-xl"
        value={age === null || age === 0 ? "" : age}
        onChange={({target}) => setAge(Number(target.value))}
        min={1}
        placeholder="years"
      />
    </div>
  )
}

export default Age
