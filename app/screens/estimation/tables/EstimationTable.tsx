import {useEstimationData} from "hooks/useEstimation"

export const EstimationTable = () => {
  // Fetch estimation data using the useEstimationData hook
  const estimation_data = useEstimationData()

  return (
    <div className="max-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="min-w-[150px] py-3 text-left">Day</th>
            <th className="min-w-[100px] py-3 text-left">Weight</th>
            <th className="min-w-[80px] py-3 text-left">BMI</th>
            <th className="min-w-[150px] py-3 text-left">AMR</th>
            <th className="min-w-[150px] py-3 text-left">Daily calories</th>
          </tr>
        </thead>
        <tbody>
          {estimation_data.map(({bmi, amr, calories, date, weight}, i) => (
            <tr key={i}>
              <td className="min-w-[100px] py-2">{date}</td>
              <td className="min-w-[100px] py-2">{weight} kg</td>
              <td className="min-w-[80px] py-2">{bmi}</td>
              <td className="min-w-[150px] py-2">{amr} kcal</td>
              <td className="min-w-[150px] py-2">{calories} kcal</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
