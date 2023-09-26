import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const LineChart = () => {
  ChartJs.register(
    Legend,
    Tooltip,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale
  );

  const labels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const dataArray = [
    0, 0, 1.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ];

  const data = {
    datasets: [
      {
        label: "July,2023",
        data: dataArray,
        backgroundColor: ["yellow"],
        borderColor: ["yellow"],
      },
    ],
    labels: labels,
  };

  const options = {};

  return <Line data={data} options={options} height={"80%"} />;
};
