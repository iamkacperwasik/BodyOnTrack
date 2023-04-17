export const Goal = () => {
  return (
    <>
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
    </>
  )
}
