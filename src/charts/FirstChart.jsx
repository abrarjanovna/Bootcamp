import { LineChart } from "@mui/x-charts/LineChart";

const First = () => {
  return (
    <div>
      <LineChart
        xAxis={[{ data: [0, 0.8, 1.5, 2.5, 3, 3.5, 4.5,5, 10] }]}
        series={[
          {
            data: [0, 1, 1.6, 0.5, 2, 2.5, 1, 5,10],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default First;
