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
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        drawTicks: false,
        drawBorder: false,
      }
    },
    x: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        drawTicks: false,
        drawBorder: false,
      }
    }
  },
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    }
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