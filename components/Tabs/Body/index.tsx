import {useAtom} from "jotai"

import {Option} from "components/Tabs/Body/Option"
import {Heading} from "components/UI/Heading"
import {Input} from "components/UI/Input"

import {ageAtom, heightAtom, weightAtom} from "stores/Body"

export const Body = () => {
  const [age, setAge] = useAtom(ageAtom)
  const [weight, setWeight] = useAtom(weightAtom)
  const [height, setHeight] = useAtom(heightAtom)

  return (
    <>
      <Heading>1. Dane ciała</Heading>

      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Ile masz lat?</p>

        <Input
          min={1}
          placeholder="Wiek w latach"
          onChange={({target}) => setAge(+target.value)}
          value={age || ""}
        />
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Ile ważysz?</p>

        <Input
          min={1}
          placeholder="Waga w kilogramach"
          onChange={({target}) => setWeight(+target.value)}
          value={weight || ""}
        />
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Ile mierzysz?</p>

        <Input
          min={1}
          placeholder="Wzrost w centymetrach"
          onChange={({target}) => setHeight(+target.value)}
          value={height || ""}
        />
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Zaznacz swoją płeć</p>

        <div className="flex gap-8 text-2xl">
          <Option sex="M">Mężczyzna</Option>
          <Option sex="F">Kobieta</Option>
        </div>
      </div>
    </>
  )
}
