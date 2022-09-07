import React, {FC} from 'react';
import { Line } from "react-chartjs-2";
import {   Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

interface LineChartProps {
  chartData: any,
}

const LineChart: FC<LineChartProps> = ({ chartData }) => {
  return (
    <Line data={chartData} options={options} />
  );
};

export default LineChart;