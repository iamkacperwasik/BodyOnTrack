import Activity from "components/Calculations/Activity";

const ActivityList = () => {
  return (
    <div className="flex flex-col gap-2">
      <Activity description="Sedentary (little or no exercise)" level={0} />
      <Activity
        description="Lightly active (light exercise or sports 1-3 days/week)"
        level={1}
      />
      <Activity
        description="Moderately active (moderate exercise 3-5 days/week)"
        level={2}
      />
      <Activity
        description="Very active (hard exercise 6-7 days/week)"
        level={3}
      />
      <Activity
        description="Super active (very hard exercise and a physical job)"
        level={4}
      />
    </div>
  );
};

export default ActivityList;
