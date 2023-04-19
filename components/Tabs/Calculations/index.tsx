import {TableRow} from "components/Tabs/Calculations/TableRow"

import {useWeightForecast} from "hooks/useWeightForecast"

export const Calculations = () => {
  const forecast = useWeightForecast(100)

  return (
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
  )
}
