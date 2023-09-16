import {useEstimationData} from "hooks/useEstimation"

export const EstimationTable = () => {
  const estimation_data = useEstimationData()

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-3 text-left">Day</th>
          <th className="py-3 text-left">Weight</th>
          <th className="py-3 text-left">BMI</th>
          <th className="py-3 text-left">AMR</th>
          <th className="py-3 text-left">Daily calories</th>
        </tr>
      </thead>
      <tbody>
        {estimation_data.map(({bmi, amr, calories, date, weight}, i) => (
          <tr key={i}>
            <td className="py-2">{date}</td>
            <td className="py-2">{weight} kg</td>
            <td className="py-2">{bmi}</td>
            <td className="py-2">{amr} kcal</td>
            <td className="py-2">{calories} kcal</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
