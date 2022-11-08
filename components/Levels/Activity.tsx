import { useCalculationsStore } from "hooks/useCalculationsStore";

type ActivityLevel = [number, string];

export const activityLevels: ActivityLevel[] = [
  [1.2, "Sedentary (little or no exercise)"],
  [1.375, " Lightly active (light exercise or sports 1-3 days/week)"],
  [1.55, "Moderately active (moderate exercise 3-5 days/week)"],
  [1.725, "Very active (hard exercise 6-7 days/week)"],
  [1.9, "Super active (very hard exercise and a physical job)"],
];

const ActivityLevel = () => {
  const { activityLevel, setActivityLevel } = useCalculationsStore();

  return (
    <table className="mt-4">
      <tr className="text-left">
        <th>Level</th>
        <th className="pl-4">About</th>
      </tr>

      {activityLevels.map(([_, about], level) => {
        return (
          <tr key={level}>
            <td
              className={
                activityLevel === level ? "underline" : "cursor-pointer"
              }
              onClick={() => setActivityLevel(level as 0 | 1 | 2 | 3 | 4)}
            >
              {level}
            </td>
            <td className="pl-4">{about}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default ActivityLevel;
