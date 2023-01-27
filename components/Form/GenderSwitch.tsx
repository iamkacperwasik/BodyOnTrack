import useBodyInfoStore from "stores/useBodyInfoStore";

const GenderSwitch = () => {
  const { gender, switchGender } = useBodyInfoStore();

  const isMale = gender === "M";

  return (
    <div>
      <p>Gender</p>
      <div className="flex gap-2">
        <button
          className={isMale ? "underline" : ""}
          onClick={() => switchGender("M")}
        >
          Male
        </button>
        <button
          className={!isMale ? "underline" : ""}
          onClick={() => switchGender("F")}
        >
          Female
        </button>
      </div>
    </div>
  );
};

export default GenderSwitch;
