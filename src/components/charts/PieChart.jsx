import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "@chakra-ui/react";

export const PieChart = () => {
  const theme = useTheme();
  ChartJs.register(ArcElement, Legend, Tooltip);
  const data = {
    datasets: [
      {
        label: "Purchases Overview",
        data: [6, 6],
        backgroundColor: ["yellow", "#4299E1"],
        borderColor: ["yellow", "#4299E1"],
      },
    ],
    labels: ["Order Received", "Order Not Received"],
  };

  const options = {};

  return <Doughnut data={data} options={options} />;
};
