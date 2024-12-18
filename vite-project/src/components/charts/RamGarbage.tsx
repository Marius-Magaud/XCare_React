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

// Register Chart.js modules
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
  // Generate months from January 1st to today
  const startDate = new Date(new Date().getFullYear(), 0, 1); // Jan 1st of the current year
  const endDate = new Date(); // Today
  const months = generateMonths(startDate, endDate);

  // Generate RAM and Garbage values
  const ramValues = Array(months.length)
    .fill(null)
    .map(() => Math.floor(Math.random() * (220 - 100 + 1) + 100)); // Values between 100 and 220
  const garbageValues = ramValues.map((ramValue) =>
    Math.floor(ramValue * (Math.random() * 0.1)) // Garbage is max 10% of RAM
  );

  // Calculate dynamic max for Y axis (+100 instead of +1000)
  const allValues = [...ramValues, ...garbageValues];
  const maxValue = Math.max(...allValues) + 100; // Maximum value + 100

  const data = {
    labels: months,
    datasets: [
      {
        label: "RAM Usage",
        data: ramValues,
        borderColor: "#4682B4", // Line color for RAM
        backgroundColor: "rgba(173, 216, 230, 0.5)", // Fill color for RAM
        borderWidth: 2,
        fill: true, // Enable fill below the line
      },
      {
        label: "Garbage Collection",
        data: garbageValues,
        borderColor: "#558b2f", // Line color for Garbage
        backgroundColor: "rgba(197, 225, 165, 0.5)", // Fill color for Garbage
        borderWidth: 2,
        fill: true, // Enable fill below the line
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
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        beginAtZero: true, // Force Y axis to start at 0
        min: 0, // Start at 0
        max: maxValue, // Dynamic maximum value + 100
        ticks: {
          color: "black",
        },
      },
    },
  };

  return (
    <div
      className="p-[20px]"
      style={{ height: "100%", width: "100%" }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default RamGarbage;


// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register Chart.js modules
// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// // Helper function to generate months
// const generateMonths = (startDate: Date, endDate: Date): string[] => {
//   const months = [];
//   const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);

//   while (currentDate <= endDate) {
//     months.push(currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }));
//     currentDate.setMonth(currentDate.getMonth() + 1);
//   }

//   return months;
// };

// const RamGarbage = () => {
//   // Generate months from January 1st to today
//   const startDate = new Date(new Date().getFullYear(), 0, 1); // Jan 1st of the current year
//   const endDate = new Date(); // Today
//   const months = generateMonths(startDate, endDate);

//   // Generate RAM and Garbage values
//   const ramValues = Array(months.length)
//     .fill(null)
//     .map(() => Math.floor(Math.random() * (220 - 100 + 1) + 100)); // Values between 100 and 220
//   const garbageValues = ramValues.map((ramValue) =>
//     Math.floor(ramValue * (Math.random() * 0.1)) // Garbage is max 10% of RAM
//   );

//   // Calculate dynamic max for Y axis (+100)
//   const allValues = [...ramValues, ...garbageValues];
//   const maxValue = Math.max(...allValues) + 100; // Maximum value + 100

//   const data = {
//     labels: months,
//     datasets: [
//       {
//         label: "RAM Usage",
//         data: ramValues,
//         borderColor: "#4682B4", // Line color for RAM
//         backgroundColor: "rgba(173, 216, 230, 0.5)", // Fill color for RAM
//         borderWidth: 2,
//         fill: true, // Enable fill below the line
//       },
//       {
//         label: "Garbage Collection",
//         data: garbageValues,
//         borderColor: "#558b2f", // Line color for Garbage
//         backgroundColor: "rgba(197, 225, 165, 0.5)", // Fill color for Garbage
//         borderWidth: 2,
//         fill: true, // Enable fill below the line
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//       },
//       tooltip: {
//         mode: "index",
//         intersect: false,
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "black",
//         },
//         grid: {
//           display: false, // Disable X-axis grid lines if needed
//         },
//       },
//       y: {
//         beginAtZero: true, // Force Y axis to start at 0
//         min: 0, // Start at 0
//         max: maxValue, // Dynamic maximum value
//         ticks: {
//           color: "black",
//         },
//         grid: {
//           display: false, // Disable Y-axis grid lines
//         },
//       },
//     },
//   };

//   return (
//     <div
//       className="p-[20px]"
//       style={{ height: "100%", width: "100%" }}
//     >
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default RamGarbage;
