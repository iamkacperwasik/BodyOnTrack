export const ActivityAndGoal = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111111f9] pt-[50px] text-white">
      <div className="flex min-w-[600px] flex-col justify-between gap-8 p-8">
        <h1 className="text-4xl font-bold uppercase">2. Aktywność fizyczna</h1>

        <ul className="flex list-inside list-disc flex-col gap-2">
          <li className="text-2xl font-bold uppercase underline">
            Praca siedząca (mało lub brak ćwiczeń)
          </li>
          <li className="text-2xl">
            Lekka aktywność (mało lub 1-3 treningi w tygodniu)
          </li>
          <li className="text-2xl">
            Średnia aktywność (3-5 treningów w tygodniu)
          </li>
          <li className="text-2xl">
            Wysoka aktywność (6-7 treningów w tygodniu)
          </li>
          <li className="text-2xl">
            Bardzo wysoka aktywność (ciężkie trening i praca fizyczna)
          </li>
        </ul>

        <h1 className="text-4xl font-bold uppercase">3. Mój cel</h1>

        <div className="flex gap-8 text-2xl">
          <p className="cursor-pointer">Utrzymać wagę</p>
          <p className="cursor-pointer font-bold underline">Przytyć</p>
          <p className="cursor-pointer">Schudnąć</p>
        </div>

        <input
          type="number"
          className="w-full border-[1px] bg-transparent p-2 font-mono text-white"
          min={1}
          placeholder="Nadwyżka kalorii"
        />
        {/* <input
            type="number"
            className="w-full border-[1px] bg-transparent p-2 font-mono text-white"
            min={1}
            placeholder="Deficyt kaloryczny"
          /> */}

        <div className="flex gap-4">
          <button className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300">
            Zmień dane ciała
          </button>

          <button
            className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300"
            disabled
          >
            Przejdź dalej
          </button>
        </div>
      </div>
    </div>
  )
}
