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

// Helper function to generate months
const generateMonths = (startDate: Date, endDate: Date): string[] => {
  const months = [];
  const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);

  while (currentDate <= endDate) {
    months.push(currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
};

// Generate cumulative data
const generateCumulativeData = (months: string[]): number[] => {
  const dataValues: number[] = [];
  let cumulativeTotal = 0;

  for (let i = 0; i < months.length; i++) {
    const randomValue = Math.floor(Math.random() * 50 + 10); // Random value between 10 and 60
    cumulativeTotal += randomValue; // Add current value to cumulative total
    dataValues.push(cumulativeTotal);
  }

  return dataValues;
};

const LineChart = () => {
  const startDate = new Date(new Date().getFullYear(), 0, 1); // Jan 1st of the current year
  const endDate = new Date(); // Today
  const months = generateMonths(startDate, endDate);
  const dataValues = generateCumulativeData(months);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Startup time by month",
        data: dataValues,
        backgroundColor: "#797896", // Light blue for filled area
        borderColor: "#797896", // Line color
        borderWidth: 2,
        pointBackgroundColor: "#797896",
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
        display: false,
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
            family: "Poppins",
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
