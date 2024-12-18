import React, { useEffect, useRef } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";

// Register the fcose layout
cytoscape.use(fcose);

const CytoscapeGraph = () => {
  const cyRef = useRef(null);

  // Example elements
  const elements = [
    {
      data: { id: "node1", label: "Cube Node", categories: "Cube", color: "#3498db", size: 60 },
    },
    {
      data: { id: "node2", label: "Process Node", categories: "Process", color: "#2ecc71", size: 60 },
    },
    {
      data: { id: "node3", label: "Dimension Node", categories: "Dimension", color: "#e74c3c", size: 60 },
    },
    {
      data: { id: "node4", label: "Chore Node", categories: "Chore", color: "#9b59b6", size: 60 },
    },
    { data: { source: "node1", target: "node2", color: "#7f8c8d", width: 3 } },
    { data: { source: "node2", target: "node3", color: "#7f8c8d", width: 3 } },
    { data: { source: "node3", target: "node4", color: "#7f8c8d", width: 3 } },
  ];

  const defaultTextBackgroundColor = "white";

  // Node styles
  const NODE_IMAGE_STYLE = {
    label: "data(label)",
    "background-image": "data(image)",
    "background-fit": "contain",
    width: "90%",
    height: "90%",
  };

  const NODE_STYLE = {
    label: "data(label)",
    "background-color": "data(color)",
    width: "data(size)",
    height: "data(size)",
    "text-background-opacity": 0,
    "text-background-padding": "3px",
    "font-size": "data(fontsize)",
    color: sessionStorage.getItem("theme") === "dark" ? "white" : "black",
  };

  const EDGE_STYLE = {
    "curve-style": "unbundled-bezier",
    width: "data(width)",
    "line-color": "data(color)",
    "source-arrow-color": "data(color)",
    "target-arrow-color": "data(color)",
    "target-arrow-shape": "triangle",
    "arrow-scale": 1.5,
    opacity: 1,
  };

  const LAYOUT_CONFIG = [
    {
      selector: "node[image]",
      style: NODE_IMAGE_STYLE,
    },
    {
      selector: "node",
      style: NODE_STYLE,
    },
    {
      selector: "edge",
      style: EDGE_STYLE,
    },
  ];

  const LAYOUT_CONFIG_PRESET = {
    quality: "default",
    name: "fcose",
    idealEdgeLength: 400,
    edgeElasticity: 0.025,
    nodeRepulsion: 1000000,
    nodeSeparation: 1700,
    numIter: 2500,
    gravity: 0.000000001,
    nodeOverlap: 2000,
    sampleSize: 2000,
    nestingFactor: 0.01,
    userZoomingEnabled: false,
    userPanningEnabled: false,
  };

  // Function to apply styles based on categories
  const getCytoscapeStyle = (node) => {
    const category = node.data("categories");
    if (category === "Cube") {
      node.style({
        shape: "ellipse",
        "background-image": "url(/static/mapping/cube-mapping.png)", // Replace with actual path
        "background-fit": "cover",
        "background-color": node.data("color"),
        "text-background-color": defaultTextBackgroundColor,
        "text-background-opacity": 0,
      });
    } else if (category === "Process") {
      node.style({
        shape: "ellipse",
        "background-image": "url(/static/mapping/process-mapping.png)", // Replace with actual path
        "background-fit": "cover",
        "background-color": node.data("color"),
        "background-opacity": 1,
        "text-background-color": defaultTextBackgroundColor,
        "text-background-opacity": 0,
      });
    } else if (category === "Dimension") {
      node.style({
        shape: "ellipse",
        "background-image": "url(/static/mapping/dimension-mapping.png)", // Replace with actual path
        "background-fit": "cover",
        "background-color": node.data("color"),
        "background-opacity": 1,
        "text-background-color": defaultTextBackgroundColor,
        "text-background-opacity": 0,
      });
    } else if (category === "Chore") {
      node.style({
        shape: "ellipse",
        "background-image": "url(/static/mapping/process-mapping.png)", // Replace with actual path
        "background-fit": "cover",
        "background-color": node.data("color"),
        "background-opacity": 1,
        "text-background-color": defaultTextBackgroundColor,
        "text-background-opacity": 0,
      });
    }
  };

  // Apply dynamic styles to nodes on graph initialization
  useEffect(() => {
    if (cyRef.current) {
      const cy = cyRef.current;
      cy.ready(() => {
        cy.nodes().forEach((node) => {
          getCytoscapeStyle(node);
        });
      });
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CytoscapeComponent
        elements={elements}
        style={{ width: "100%", height: "100%" }}
        stylesheet={LAYOUT_CONFIG}
        layout={LAYOUT_CONFIG_PRESET}
        cy={(cy) => {
          cyRef.current = cy; // Save a reference to Cytoscape instance
        }}
      />
    </div>
  );
};

export default CytoscapeGraph;
