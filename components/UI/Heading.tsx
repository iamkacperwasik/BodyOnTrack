import {PropsWithChildren} from "react"

export const Heading = ({children}: PropsWithChildren) => (
  <h1 className="text-4xl font-bold uppercase">{children}</h1>
)
