import { useEffect, useState } from "react";
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

const QueryChart = ({ selectedProcess, executions }) => {
  const [dataValues, setDataValues] = useState([]);  
  const [stateValues, setStateValues] = useState([]);

  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (executions && executions.length > 0) {
      // Extraire les durées et les dates pour les affichages
      const durations = executions.map((exec) =>
        parseInt(exec.duration.split("m")[0]) // Exemple : convertir "10m 30s" en 10
      );
      const states = executions.map((exec) =>
        exec.state // Exemple : convertir "10m 30s" en 10
      );
      const executionLabels = executions.map((exec) => exec.date);
      setStateValues(states)
      console.log("stateValue", stateValues);
      
      setDataValues(durations);
      setLabels(executionLabels);
    }
  }, [executions]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Execution Time for ${selectedProcess?.name || "Process"}`,
        data: dataValues,
        backgroundColor: stateValues === "ERROR" ? "#ffcdd2" : "#ADD8E6",
        borderRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
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
          display: false, // Hide ticks on X-axis
        },
        grid: {
          display: false, // Optionally hide grid lines
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

export default QueryChart;
