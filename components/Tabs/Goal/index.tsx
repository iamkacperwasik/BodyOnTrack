import {Option} from "components/Tabs/Goal/Option"
import {Heading} from "components/UI/Heading"
import {Input} from "components/UI/Input"

export const Goal = () => {
  return (
    <>
      <Heading>3. Mój cel</Heading>

      <div className="flex gap-8 text-2xl">
        <Option goal="MAINTAIN">Utrzymać wagę</Option>
        <Option goal="GAIN_WEIGHT">Przytyć</Option>
        <Option goal="LOSE_WEIGHT">Schudnąć</Option>
      </div>

      <Input min={1} placeholder="Nadwyżka kalorii" />
      {/* <input
            type="number"
            className="w-full border-[1px] bg-transparent p-2 font-mono text-white"
            min={1}
            placeholder="Deficyt kaloryczny"
          /> */}
    </>
  )
}
