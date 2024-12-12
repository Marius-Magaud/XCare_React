import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  // Sample data for days of the week
  const dataValues = [35, 50, 20, 45, 60, 30, 25]; // Example values
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const data = {
    labels: daysOfWeek,
    datasets: [
      {
        label: "Wait time in minutes",
        data: dataValues,
        backgroundColor: "rgba(173, 216, 230, 0.3)", // Light blue for filled area
        borderColor: dataValues.map((value) =>
            value > 40 ? "#b71c1c" : "#4682B4"
        ),
        borderWidth: 2,
        pointBackgroundColor: dataValues.map((value) =>
            value > 40 ? "#b71c1c" : "#4682B4"
        ),
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 5,
        tension: 0.4, // Smooth curves
        fill: true, // Fill the area under the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable legend
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.5)",
        bodyFont: {
          size: 14,
          family: "Poppins",
        },
        titleFont: {
          size: 16,
          family: "Poppins",
        },
        borderColor: "white",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "black",
          font: {
            size: 12,
            family: "Poppins",
          },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
          borderColor: "white",
        },
      },
      x: {
        ticks: {
          color: "black",
          font: {
            size: 12,
            family: "Poppins", // Apply Poppins font
          },
        },
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    hover: {
      mode: "index",
      intersect: false,
    },
  };

  return (
      <div
          className="p-[20px] font-poppins"
          style={{ height: "100%", width: "100%", fontFamily: "Poppins" }}
      >
        <Line data={data} options={options} />
      </div>
  );
};

export default LineChart;
