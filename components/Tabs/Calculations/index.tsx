import {TableRow} from "components/Tabs/Calculations/TableRow"

export const Calculations = () => {
  return (
    <table className="">
      <thead>
        <tr className="text-2xl">
          <th className="pr-16 text-left">Dzień</th>
          <th className="pr-16 text-left">Waga</th>
          <th className="pr-16 text-left">BMI</th>
          <th className="pr-16 text-left">Nadwyżka/Deficyt</th>
          <th className="pr-16 text-left">Podaż kalorii</th>
        </tr>
      </thead>

      <tbody>
        <TableRow
          date={new Date()}
          bmi={23.41}
          caloriesPerDay={2300}
          target={400}
          weight={80.3}
          goal="GAIN_WEIGHT"
        />
      </tbody>
    </table>
  )
}
