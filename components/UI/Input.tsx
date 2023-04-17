import {InputHTMLAttributes} from "react"

export const Input = ({
  state: [value, changeValue],
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  state: [number | null, (value: number) => void]
}) => (
  <input
    min={1}
    type="number"
    className="w-full border-[1px] bg-transparent p-2 font-mono text-white"
    value={value || ""}
    onChange={({target}) => changeValue(+target.value)}
    {...props}
  />
)
