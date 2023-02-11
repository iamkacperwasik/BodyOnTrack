import useBodyInfoStore from "stores/BodyInfo"

const Gender = () => {
  const {gender, switchGender} = useBodyInfoStore()

  const isMale = gender === "M"

  return (
    <div>
      <p className="mb-4 text-2xl sm:text-3xl">Gender</p>

      <div className="flex gap-8 text-xl sm:text-2xl">
        <button
          className={isMale ? "font-bold uppercase" : ""}
          onClick={() => switchGender("M")}
        >
          Male
        </button>

        <button
          className={!isMale ? "font-bold uppercase" : ""}
          onClick={() => switchGender("F")}
        >
          Female
        </button>
      </div>
    </div>
  )
}

export default Gender
