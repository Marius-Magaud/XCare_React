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

// Helper to generate hourly timestamps from midnight to the last full hour
const generateHourlyTimestamps = (startDate: Date, endDate: Date): string[] => {
  const timestamps = [];
  const current = new Date(startDate);

  while (current <= endDate) {
    timestamps.push(current.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    current.setHours(current.getHours() + 1);
  }

  return timestamps;
};

const LiveViewChart = () => {
  const now = new Date();

  // Define start and end times (from midnight to the last full hour)
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0); // Midnight today
  const endDate = new Date(now);
  endDate.setMinutes(0, 0, 0); // Last full hour

  const hours = generateHourlyTimestamps(startDate, endDate);

  // Generate random values for RAM usage (50 to 200)
  const ramValues = hours.map(() => Math.floor(Math.random() * (20 - 5 + 1)) + 5);

  // Generate garbage values (up to 10% of RAM)
  const garbageValues = ramValues.map((ramValue) =>
    Math.floor(ramValue * (Math.random() * 0.1))
  );

  const data = {
    labels: hours,
    datasets: [
      {
        label: "RAM Usage",
        data: ramValues,
        borderColor: "#4682B4",
        backgroundColor: "rgba(173, 216, 230, 0.5)",
        borderWidth: 2,
        fill: "origin",
        stack: "stack1",
      },
      {
        label: "Garbage Collection",
        data: garbageValues,
        borderColor: "#558b2f",
        backgroundColor: "rgba(197, 225, 165, 0.5)",
        borderWidth: 2,
        fill: "-1",
        stack: "stack1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
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
        stacked: true,
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

export default LiveViewChart;
