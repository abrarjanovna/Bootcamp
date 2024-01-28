import { LineChart } from "@mui/x-charts/LineChart";

const First = () => {
  return (
    <div className="ml-[30px] w-[277px] rounded-xl bg-white">
      <div className="-ml-3 mt-20">
        <LineChart
          xAxis={[
            { data: [0, 0.2, 1, 2, 2.8, 3.3, 3.8, 4.3, 5, 6, 7, 7.8, 8] },
          ]}
          series={[
            {
              area: true,
              showMark: false,
              data: [0, 1, 5, 1, 4, 2.5, 1, 4, 8, 3, 8, 10],
              color: "#F8C51BCC",
            },
          ]}
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default First;
