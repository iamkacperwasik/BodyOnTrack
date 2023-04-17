import {useAtom} from "jotai"
import {PropsWithChildren} from "react"

import {activityLevelAtom} from "stores/Body"

export const Option = ({
  children,
  activityLevel,
}: PropsWithChildren<{activityLevel: ActivityLevel}>) => {
  const [currentActivityLevel, setActivityLevel] = useAtom(activityLevelAtom)

  const isCurrent = currentActivityLevel === activityLevel

  return (
    <li
      className={
        isCurrent
          ? "cursor-pointer text-2xl underline"
          : "cursor-pointer text-2xl"
      }
      onClick={() => setActivityLevel(activityLevel)}
    >
      {children}
    </li>
  )
}
