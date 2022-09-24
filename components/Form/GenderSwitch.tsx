import { useBodyInfoStore } from "stores/BodyInfo";

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
          M
        </button>
        <button
          className={!isMale ? "underline" : ""}
          onClick={() => switchGender("F")}
        >
          F
        </button>
      </div>
    </div>
  );
};

export default GenderSwitch;
