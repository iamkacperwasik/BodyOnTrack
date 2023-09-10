type Props = {bmi: number}

export const BodyMassIndicator = ({bmi}: Props) => {
  if (bmi < 18.5) {
    return <div className="relative h-[12px] w-[12px] rounded-sm bg-blue-300" />
  }

  if (bmi > 18.5 && bmi < 24.9) {
    return (
      <div className="relative h-[12px] w-[12px] rounded-sm bg-green-300" />
    )
  }

  if (bmi > 24.9 && bmi < 29.9) {
    return (
      <div className="relative h-[12px] w-[12px] rounded-sm bg-yellow-300" />
    )
  }

  if (bmi > 29.9 && bmi < 34.9) {
    return (
      <div className="relative h-[12px] w-[12px] rounded-sm bg-orange-300" />
    )
  }

  return <div className="relative h-[12px] w-[12px] rounded-sm bg-red-300" />
}
