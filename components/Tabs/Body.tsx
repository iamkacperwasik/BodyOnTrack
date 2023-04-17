import {Heading} from "components/UI/Heading"

export const Body = () => {
  return (
    <>
      <Heading>1. Dane ciała</Heading>

      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Ile masz lat?</p>
        <input
          type="number"
          className="w-full border-[1px] bg-transparent p-2 font-mono text-white"
          min={1}
          placeholder="Wiek w latach"
        />
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Ile ważysz?</p>
        <input
          type="number"
          className="w-full border-[1px] bg-transparent p-2 font-mono text-white"
          min={1}
          placeholder="Waga w kilogramach"
        />
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Ile mierzysz?</p>
        <input
          type="number"
          className="w-full border-[1px] bg-transparent p-2 font-mono text-white"
          min={1}
          placeholder="Wzrost w centymetrach"
        />
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Zaznacz swoją płeć</p>

        <div className="flex gap-8 text-2xl">
          <button className="font-mono">Mężczyzna</button>
          <button className="font-mono underline">Kobieta</button>
        </div>
      </div>
    </>
  )
}
