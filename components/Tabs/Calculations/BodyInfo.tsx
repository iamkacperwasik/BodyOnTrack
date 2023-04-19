import {useAtomValue} from "jotai"

import {formatFloat} from "util/Number"
import {formatGoal} from "util/Text"

import {heightAtom, weightAtom} from "stores/Body"
import {goalAtom} from "stores/Goal"

export const BodyInfo = () => {
  const goal = useAtomValue(goalAtom)!
  const weight = useAtomValue(weightAtom)!
  const height = useAtomValue(heightAtom)!

  return (
    <>
      <p className="text-2xl font-bold uppercase">Wprowadzone dane:</p>

      <ul className="list-inside list-disc text-lg">
        <li>
          Ważysz:
          <span className="mx-2 underline underline-offset-4">
            {formatFloat(weight)} kg
          </span>
        </li>
        <li>
          Mierzysz:
          <span className="mx-2 underline underline-offset-4">
            {formatFloat(height)} cm
          </span>
        </li>
        <li>
          Twoim celem jest
          <span className="mx-2 underline underline-offset-4">
            {formatGoal(goal)}
          </span>
        </li>
      </ul>
    </>
  )
}
