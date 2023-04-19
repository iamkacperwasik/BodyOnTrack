import {useState} from "react"

import {TableRow} from "components/Tabs/Calculations/TableRow"
import {Input} from "components/UI/Input"

import {useWeightForecast} from "hooks/useWeightForecast"

export const Calculations = () => {
  const [days, setDays] = useState<number | null>(null)

  const forecast = useWeightForecast(days ?? 7)

  return (
    <>
      <p className="text-2xl font-bold uppercase">
        Na ile dni chcesz zobaczyć prognozę?
      </p>
      <Input state={[days, setDays]} placeholder="Ilość dni" />

      <table className="">
        <thead>
          <tr className="text-2xl">
            <th className="pr-8 text-left">Dzień</th>
            <th className="px-8 text-left">Waga</th>
            <th className="px-8 text-left">BMI</th>
            <th className="px-8 text-left">Podaż kalorii</th>
            <th className="px-8 text-left">CPM</th>
          </tr>
        </thead>

        <tbody>
          {forecast.map((weight, day) => {
            return <TableRow key={day} day={day} weight={weight} />
          })}
        </tbody>
      </table>
    </>
  )
}
