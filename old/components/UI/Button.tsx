import {ButtonHTMLAttributes, PropsWithChildren} from "react"

export const Button = ({
  children,
  ...props
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300"
    {...props}
  >
    {children}
  </button>
)
