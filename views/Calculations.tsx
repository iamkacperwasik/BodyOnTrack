export const Calculations = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111111f9] pt-[50px] text-white">
      <div className="flex min-w-[600px] flex-col justify-between gap-8 p-8">
        <table>
          <tr>
            <th>Dzień</th>
            <th>Waga</th>
            <th>BMI</th>
            <th>Podaż kalorii</th>
            <th>PPM</th>
            <th>CPM</th>
            <th>Nadwyżka/Deficyt</th>
          </tr>
        </table>

        <div className="flex gap-4">
          <button className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300">
            Zmień dane ciała
          </button>

          <button className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300">
            Zmień aktywność lub cel
          </button>
        </div>
      </div>
    </div>
  )
}
