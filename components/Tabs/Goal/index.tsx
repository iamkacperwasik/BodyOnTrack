import {useAtom, useAtomValue} from "jotai"
import {When} from "react-if"

import {Option} from "components/Tabs/Goal/Option"
import {Heading} from "components/UI/Heading"
import {Input} from "components/UI/Input"

import {goalAtom, goalTargetAtom} from "stores/Body"

export const Goal = () => {
  const [goalTarget, setGoalTarget] = useAtom(goalTargetAtom)
  const goal = useAtomValue(goalAtom)

  return (
    <>
      <Heading>3. Mój cel</Heading>

      <div className="flex gap-8 text-2xl">
        <Option goal="MAINTAIN">Utrzymać wagę</Option>
        <Option goal="GAIN_WEIGHT">Przytyć</Option>
        <Option goal="LOSE_WEIGHT">Schudnąć</Option>
      </div>

      <When condition={goal !== "MAINTAIN"}>
        <Input
          placeholder={
            goal === "GAIN_WEIGHT" ? "Nadwyżka kalorii" : "Deficyt kalorii"
          }
          state={[goalTarget, setGoalTarget]}
        />
      </When>
    </>
  )
}
