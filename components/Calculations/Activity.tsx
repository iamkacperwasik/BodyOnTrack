import useCalculationsStore from "stores/Calculations"

type Props = {
  level: number
  description: string
}

const Activity = ({description, level}: Props) => {
  const {activityLevel, setActivityLevel} = useCalculationsStore()

  return (
    <div className="flex">
      <button
        onClick={() => setActivityLevel(level as ActivityLevel)}
        className={`
          h-16 w-16 cursor-pointer text-center text-2xl sm:text-3xl
          ${activityLevel === level && "font-bold"}`}
      >
        {level + 1}
      </button>

      <p className="flex w-full items-center px-4 sm:text-2xl md:text-xl">
        {description}
      </p>
    </div>
  )
}

export default Activity
