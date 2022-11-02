import { activityLevels } from "formulas/getCaloriesForActivityLevel";

import { useCalculationsStore } from "hooks/useCalculationsStore";

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
