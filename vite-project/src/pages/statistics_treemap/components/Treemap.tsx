import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TreeMap = () => {
  const ref = useRef();

  const generateRandomData = () => {
    const usernames = [
      "JohnDoe", "JaneSmith", "AliceBrown", "BobJones",
      "CharlieMiller", "EmilyDavis", "MichaelClark",
      "SarahWilson", "DavidMoore", "OliviaTaylor",
      "EthanAnderson", "SophiaMartinez", "JamesLee",
      "EmmaHarris", "DanielWhite"
    ];

    const financeProcesses = [
      "Invoice Processing", "Budget Review", "Payroll Distribution",
      "Tax Filing", "Financial Forecasting", "Expense Reconciliation",
      "Account Auditing", "Revenue Tracking", "Risk Assessment",
      "Compliance Check", "Investment Analysis", "Procurement Review",
      "Cash Flow Management", "Capital Allocation", "Debt Management"
    ];

    const numUsers = Math.floor(Math.random() * 8) + 8; // 8 to 15 users
    const data = {
      name: "Root",
      children: [],
    };

    // Shuffle usernames to pick unique ones
    const shuffledUsernames = usernames.sort(() => Math.random() - 0.5).slice(0, numUsers);

    for (let i = 0; i < numUsers; i++) {
      const numProcesses = Math.floor(Math.random() * 6) + 3; // 3 to 8 processes per user
      const user = {
        name: shuffledUsernames[i], // Pick a unique username
        children: [],
      };

      for (let j = 0; j < numProcesses; j++) {
        const processName = financeProcesses[Math.floor(Math.random() * financeProcesses.length)]; // Random process name
        const process = {
          name: processName,
          value: Math.floor(Math.random() * 150) + 20, // Random value between 20 and 170
        };
        user.children.push(process);
      }

      data.children.push(user);
    }

    return data;
  };

  useEffect(() => {
    const renderTreeMap = () => {
      const parent = ref.current.parentNode;
      const { width, height } = parent.getBoundingClientRect();

      // Define more complex data
      const data = generateRandomData()

      // Clear previous rendering
      d3.select(ref.current).selectAll("*").remove();

      const color = d3.scaleOrdinal(d3.schemeTableau10);

      const root = d3
        .hierarchy(data)
        .sum((d) => d.value || 0)
        .sort((a, b) => b.value - a.value);

      const treemap = d3
        .treemap()
        .size([width, height])
        .paddingInner(4)
        .paddingOuter(10);

      treemap(root);

      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("font-family", "'Poppins', sans-serif");

      const nodes = svg
        .selectAll("g")
        .data(root.leaves())
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

      nodes
        .append("rect")
        .attr("class", "node")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => color(d.parent.data.name))
        .style("stroke", "white")
        .style("stroke-width", 2)
        .on("mouseover", function (event, d) {
          d3.select(this).style("stroke", "#000").style("stroke-width", 3);
          tooltip
            .style("visibility", "visible")
            .html(
              `<strong>${d.data.name}</strong><br>Value: ${d.value}<br>Group: ${d.parent.data.name}`
            );
        })
        .on("mousemove", (event) => {
          tooltip
            .style("top", `${event.pageY + 10}px`)
            .style("left", `${event.pageX + 10}px`);
        })
        .on("mouseout", function () {
          d3.select(this).style("stroke", "white").style("stroke-width", 2);
          tooltip.style("visibility", "hidden");
        });

      nodes
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .text((d) => d.data.name)
        .attr("font-size", "12px")
        .attr("fill", "white")
        .style("pointer-events", "none");

      // Add tooltip
      const tooltip = d3
        .select("body")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background", "rgba(0, 0, 0, 0.7)")
        .style("color", "white")
        .style("padding", "5px 10px")
        .style("border-radius", "5px")
        .style("font-size", "12px")
        .style("font-family", "'Poppins', sans-serif");
    };

    // Initial render
    renderTreeMap();

    // Redraw on window resize
    window.addEventListener("resize", renderTreeMap);
    return () => window.removeEventListener("resize", renderTreeMap);
  }, []);

  return <div ref={ref} className="w-full h-full"></div>;
};

export default TreeMap;
