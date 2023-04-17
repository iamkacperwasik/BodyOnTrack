export const Calculations = () => {
  return (
    <table className="">
      <tr className="text-2xl">
        <th className="text-left">Dzień</th>
        <th className="text-left">Waga</th>
        <th className="text-left">BMI</th>
        <th className="text-left">Podaż kalorii</th>
        <th className="text-left">PPM</th>
        <th className="text-left">CPM</th>
        <th className="text-left">Nadwyżka/Deficyt</th>
      </tr>
      <tr className="font-mono text-lg">
        <td className="py-2 pr-8">
          <span>20.04.2023</span>
        </td>
        <td className="py-2 pr-8">
          <span>80.3 kg</span>
        </td>
        <td className="flex items-center gap-2 py-2 pr-8">
          <span>23.40</span>

          <div className="relative h-[12px] w-[12px] rounded-sm bg-green-300" />
        </td>
        <td className="py-2 pr-16">1901.03 kcal</td>
        <td className="py-2 pr-8">2300.20 kcal</td>
        <td className="py-2 pr-8">2700.20 kcal</td>
        <td className="py-2">+ 300.21 kcal</td>
      </tr>
    </table>
  )
}
