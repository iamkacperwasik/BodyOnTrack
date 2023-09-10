import {useAtom} from "jotai"
import {PropsWithChildren} from "react"

import {Sex, sexAtom} from "stores/Body"

export const Option = ({children, sex}: PropsWithChildren<{sex: Sex}>) => {
  const [currentSex, setSex] = useAtom(sexAtom)

  const isCurrent = currentSex === sex

  return (
    <button
      className={isCurrent ? "font-mono underline" : "font-mono"}
      onClick={() => setSex(sex)}
    >
      {children}
    </button>
  )
}
