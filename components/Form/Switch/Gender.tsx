import useBodyInfoStore from "stores/BodyInfo";

const Gender = () => {
  const { gender, switchGender } = useBodyInfoStore();

  const isMale = gender === "M";

  return (
    <div>
      <p className="mb-4 text-2xl">Gender</p>

      <div className="flex gap-8 text-xl">
        <button
          className={isMale ? "uppercase font-bold" : ""}
          onClick={() => switchGender("M")}
        >
          Male
        </button>

        <button
          className={!isMale ? "uppercase font-bold" : ""}
          onClick={() => switchGender("F")}
        >
          Female
        </button>
      </div>
    </div>
  );
};

export default Gender;
