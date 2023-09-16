import clsx from "clsx"
import {FC} from "react"

type BmiPopoverProps = {
  value: number // The BMI value
  visible: boolean // Whether the popover is visible or not
}

export const BmiPopover: FC<BmiPopoverProps> = ({value, visible}) => {
  // Determine the content of the popover based on the BMI value
  const content =
    value >= 18.5 && value <= 24.9
      ? "Healthy BMI range: 18.5 - 24.9"
      : "BMI outside of healthy range"

  return (
    <span
      // Apply CSS classes conditionally based on the visibility of the popover
      className={clsx(
        "absolute left-0 top-full mt-1 rounded-md bg-white px-2 py-1 text-xs text-black",
        {block: visible, hidden: !visible}
      )}
    >
      {content}
    </span>
  )
}
