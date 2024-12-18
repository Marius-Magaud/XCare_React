import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample data for days of the week
  const dataValues = [35, 50, 20, 45, 60, 10, 5]; // Example values
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const data = {
    labels: daysOfWeek,
    datasets: [
      {
        label: "Wait time in minutes",
        data: dataValues,
        backgroundColor: dataValues.map((value) =>
            value > 40 ? "#ffcdd2" : "#ADD8E6"
        ),
        borderColor: dataValues.map((value) =>
            value > 40 ? "#b71c1c" : "#4682B4"
        ),
        // borderWidth: 2,
        borderRadius: 10, // Adding border radius
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
        backgroundColor: "rgba(0,0,0,1)",
        padding: "10",
        bodyFont: {
          size: 14,
          family: "Poppins",
        },
        titleFont: {
          size: 16,
          family: "Poppins",
        },
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
      easing: "easeOutQuad",
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
        <Bar data={data} options={options} />
      </div>
  );
};

export default BarChart;
