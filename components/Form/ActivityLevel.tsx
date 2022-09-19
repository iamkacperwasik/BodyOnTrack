import { useBodyInfoStore } from "stores/BodyInfo";

const ActivityLevel = () => {
  const { activityLevel, setActivityLevel } = useBodyInfoStore();

  return (
    <table className="mt-4">
      <tr className="text-left">
        <th>Level</th>
        <th className="pl-4">About</th>
      </tr>
      <tr>
        <td
          className={activityLevel === 1 ? "underline" : "cursor-pointer"}
          onClick={() => setActivityLevel(1)}
        >
          1
        </td>
        <td className="pl-4">Sedentary (little or no exercise)</td>
      </tr>
      <tr>
        <td
          className={activityLevel === 2 ? "underline" : "cursor-pointer"}
          onClick={() => setActivityLevel(2)}
        >
          2
        </td>
        <td className="pl-4">
          Lightly active (light exercise or sports 1-3 days/week)
        </td>
      </tr>
      <tr>
        <td
          className={activityLevel === 3 ? "underline" : "cursor-pointer"}
          onClick={() => setActivityLevel(3)}
        >
          3
        </td>
        <td className="pl-4">
          Moderately active (moderate exercise 3-5 days/week)
        </td>
      </tr>
      <tr>
        <td
          className={activityLevel === 4 ? "underline" : "cursor-pointer"}
          onClick={() => setActivityLevel(4)}
        >
          4
        </td>
        <td className="pl-4">Very active (hard exercise 6-7 days/week)</td>
      </tr>
      <tr>
        <td
          className={activityLevel === 5 ? "underline" : "cursor-pointer"}
          onClick={() => setActivityLevel(5)}
        >
          5
        </td>
        <td className="pl-4">
          Super active (very hard exercise and a physical job)
        </td>
      </tr>
    </table>
  );
};

export default ActivityLevel;
