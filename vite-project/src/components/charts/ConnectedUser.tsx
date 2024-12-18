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

const generateMonths = (startDate: Date, endDate: Date): string[] => {
  const months = [];
  const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);

  while (currentDate <= endDate) {
    months.push(currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
};

const ConnectedUser = () => {
  const startDate = new Date(new Date().getFullYear(), 0, 1); // Jan 1st of the current year
  const endDate = new Date(); // Today
  const months = generateMonths(startDate, endDate);
  const usersNumber = Array(months.length)
  .fill(null)
  .map(() => Math.floor(Math.random() * (20 - 6 + 1) + 6)); // Values between 100 and 220

  // Sample data for days of the week
  const dataValues = usersNumber
  const daysOfWeek = months

  const data = {
    labels: daysOfWeek,
    datasets: [
      {
        label: "Total users by month",
        data: dataValues,
        backgroundColor: "#ADD8E6",
        borderRadius: 10, // Adding border radius
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true, // Disable legend
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

export default ConnectedUser;
