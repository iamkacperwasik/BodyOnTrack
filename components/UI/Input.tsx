import {InputHTMLAttributes} from "react"

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type="number"
    className="w-full border-[1px] bg-transparent p-2 font-mono text-white"
    {...props}
  />
)
