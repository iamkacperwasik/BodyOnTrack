export const Activity = () => {
  return (
    <>
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
    </>
  )
}
