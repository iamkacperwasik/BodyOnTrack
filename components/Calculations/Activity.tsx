import useCalculationsStore from "stores/Calculations";

type Props = {
  level: number;
  description: string;
};

const Activity = ({ description, level }: Props) => {
  const { activityLevel, setActivityLevel } = useCalculationsStore();

  return (
    <div className="flex h-16">
      <button
        onClick={() => setActivityLevel(level as ActivityLevel)}
        className={`
          text-center text-2xl cursor-pointer w-16
          ${activityLevel === level && "font-bold"}`}
      >
        {level + 1}
      </button>

      <p className="w-full px-4 flex items-center">{description}</p>
    </div>
  );
};

export default Activity;
