import { LineChart } from "@mui/x-charts/LineChart";

const First = () => {
  return (
    <div>
      <LineChart
        xAxis={[{ data: [0, 0.4, 1, 1.8, 2.6, 3.3, 4.5, 5, 6, 8] }]}
        series={[
          {
            data: [0, 1, 1.6, 0.5, 2, 2.5, 1, 4, 5, 10],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default First;
