import clsx from "clsx"
import {FC} from "react"

type BmiPopoverProps = {
  value: number
  visible: boolean
}

export const BmiPopover: FC<BmiPopoverProps> = ({value, visible}) => {
  const content =
    value >= 18.5 && value <= 24.9
      ? "Healthy BMI range: 18.5 - 24.9"
      : "BMI outside of healthy range"

  return (
    <span
      className={clsx(
        "absolute left-0 top-full mt-1 rounded-md bg-white px-2 py-1 text-xs text-black",
        {block: visible, hidden: !visible}
      )}
    >
      {content}
    </span>
  )
}
