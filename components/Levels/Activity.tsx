import useCalculationsStore from "stores/Calculations";

const Activity = () => {
  const { activityLevel, setActivityLevel } = useCalculationsStore();

  return (
    <table className="mt-4">
      <thead>
        <tr className="text-left">
          <th>Level</th>
          <th className="pl-4">About</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td
            className={activityLevel === 0 ? "underline" : "cursor-pointer"}
            onClick={() => setActivityLevel(0)}
          >
            1
          </td>
          <td className="pl-4">Sedentary (little or no exercise)</td>
        </tr>

        <tr>
          <td
            className={activityLevel === 1 ? "underline" : "cursor-pointer"}
            onClick={() => setActivityLevel(1)}
          >
            2
          </td>
          <td className="pl-4">
            Lightly active (light exercise or sports 1-3 days/week)
          </td>
        </tr>

        <tr>
          <td
            className={activityLevel === 2 ? "underline" : "cursor-pointer"}
            onClick={() => setActivityLevel(2)}
          >
            3
          </td>
          <td className="pl-4">
            Moderately active (moderate exercise 3-5 days/week)
          </td>
        </tr>

        <tr>
          <td
            className={activityLevel === 3 ? "underline" : "cursor-pointer"}
            onClick={() => setActivityLevel(3)}
          >
            4
          </td>
          <td className="pl-4">Very active (hard exercise 6-7 days/week)</td>
        </tr>

        <tr>
          <td
            className={activityLevel === 4 ? "underline" : "cursor-pointer"}
            onClick={() => setActivityLevel(4)}
          >
            5
          </td>
          <td className="pl-4">
            Super active (very hard exercise and a physical job)
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Activity;
