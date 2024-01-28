import { LineChart } from "@mui/x-charts/LineChart";

const uData = [0, 1800, 1000, 2880, 1090, 2390, 290, 2690];
const xLabels = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
  "",
];

export default function SimpleAreaChart() {
  return (
    <div className="h-[595px] w-[860px] rounded-2xl bg-white p-20 pt-40">
      <div className="flex text-[#5B6871]">
        <p className="-ml-2 -mt-24 text-2xl font-semibold">
          Ежемесячная статистика
        </p>
        <select className="-mt-24 ml-80 h-10 border border-[#ddd] focus:outline-none">
          <option value="">Июнь</option>
          <option value="">Июль</option>
          <option value="">Август</option>
          <option value="">Сентябрь</option>
          <option value="">Октябрь</option>
          <option value="">Ноябрь</option>
          <option value="">Декабрь</option>
          <option value="">Январь</option>
          <option value="">Февраль</option>
          <option value="">Март</option>
          <option value="">Апрель</option>
          <option value="">Май</option>
        </select>
      </div>
      <hr />
      <LineChart
        width={700}
        height={400}
        series={[
          { data: uData, area: true, showMark: false, color: "#7dabff" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
      <hr />
    </div>
  );
}
