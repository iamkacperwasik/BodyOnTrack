import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js"
import {Line} from "react-chartjs-2"

import useWeightForecast from "hooks/useWeightForecast"

import {arrayOfSize} from "util/Array"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const Chart = () => {
  const {forecast} = useWeightForecast(3 * 4)

  const labels = arrayOfSize(3 * 4)
    .map((_, i) => i + 1)
    .map((offset) => {
      const date = new Date(Date.now() + 60 * 60 * 1000 * 24 * 7 * offset)

      return date
    })
    .map((date) => date.toLocaleDateString())

  const data = {
    labels,
    datasets: [
      {
        data: forecast.map((v) => v.toFixed(2)),
        borderColor: "black",
        backgroundColor: "black",
      },
    ],
  }

  return <Line data={data} />
}

export default Chart
