import {useAtom} from "jotai"

import {Option} from "components/Tabs/Goal/Option"
import {Heading} from "components/UI/Heading"
import {Input} from "components/UI/Input"

import {goalTargetAtom} from "stores/Body"

export const Goal = () => {
  const [goalTarget, setGoalTarget] = useAtom(goalTargetAtom)

  return (
    <>
      <Heading>3. Mój cel</Heading>

      <div className="flex gap-8 text-2xl">
        <Option goal="MAINTAIN">Utrzymać wagę</Option>
        <Option goal="GAIN_WEIGHT">Przytyć</Option>
        <Option goal="LOSE_WEIGHT">Schudnąć</Option>
      </div>

      <Input
        placeholder="Nadwyżka kalorii"
        state={[goalTarget, setGoalTarget]}
      />
    </>
  )
}
