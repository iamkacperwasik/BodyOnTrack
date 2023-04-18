import {useAtom} from "jotai"
import {PropsWithChildren} from "react"

import {goalAtom} from "stores/Goal"

export const Option = ({children, goal}: PropsWithChildren<{goal: Goal}>) => {
  const [currentGoal, setGoal] = useAtom(goalAtom)

  const isCurrent = currentGoal === goal

  return (
    <p
      className={
        isCurrent ? "cursor-pointer font-bold underline" : "cursor-pointer"
      }
      onClick={() => setGoal(goal)}
    >
      {children}
    </p>
  )
}
