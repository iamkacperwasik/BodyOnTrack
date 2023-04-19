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

        <Input min={1} placeholder="Wiek w latach" state={[age, setAge]} />
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Ile ważysz?</p>

        <Input
          min={1}
          placeholder="Waga w kilogramach"
          state={[weight, setWeight]}
        />
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold uppercase">Ile mierzysz?</p>

        <Input
          placeholder="Wzrost w centymetrach"
          state={[height, setHeight]}
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
