import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

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

const RamGarbage = () => {
  const startDate = new Date(new Date().getFullYear(), 0, 1); // Jan 1st of the current year
  const endDate = new Date(); // Today
  const months = generateMonths(startDate, endDate);

  // Generate RAM values between 50 and 200
  const ramValues = months.map(() => Math.floor(Math.random() * (200 - 50 + 1)) + 50);

  // Garbage values as max 10% of RAM (independent)
  const garbageValues = ramValues.map((ramValue) =>
    Math.floor(ramValue * (Math.random() * 0.1)) // Garbage = 0% to 10% of RAM
  );

  const data = {
    labels: months,
    datasets: [
      {
        label: "RAM Usage",
        data: ramValues,
        borderColor: "#4682B4", // Line color
        backgroundColor: "rgba(173, 216, 230, 0.5)", // Fill color
        borderWidth: 2,
        fill: "origin", // Fill below the line
        stack: "stack1", // Same stack for visual effect
      },
      {
        label: "Garbage Collection",
        data: garbageValues,
        borderColor: "#558b2f", // Line color for Garbage
        backgroundColor: "rgba(197, 225, 165, 0.5)", // Fill color for Garbage
        borderWidth: 2,
        fill: "-1", // Fill above the RAM line
        stack: "stack1", // Same stack for visual effect
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
        mode: "index",
        intersect: false,
        callbacks: {
          label: (tooltipItem) => {
            const datasetLabel = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw;
            return `${datasetLabel}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        stacked: true, // Enable stacking for the Y-axis
        beginAtZero: true,
        ticks: {
          color: "black",
        },
      },
    },
  };

  return (
    <div className="p-[20px]" style={{ height: "100%", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default RamGarbage;
