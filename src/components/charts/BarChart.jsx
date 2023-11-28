import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const data = {
    labels: ["P1", "P2", "P3", "P4", "P5", "P6"],
    datasets: [
      {
        label: "Products",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#4299E1",
      },
    ],
  };
  const options = {};
  return <Bar data={data} options={options} height={"250px"} />;
};

export default BarChart;
