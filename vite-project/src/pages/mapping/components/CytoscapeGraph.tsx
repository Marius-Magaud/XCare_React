import React, { useEffect, useRef, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import RD_CytoscapeGraph from "../hooks/RD_CytoscapeGraph";
import { NODE_IMAGE_STYLE, NODE_STYLE, EDGE_STYLE } from "../styles/NodeStyles";
import { LAYOUT_CONFIG_PRESET } from "../styles/LayoutConfig";
import applyDynamicNodeStyles from "../styles/DynamicStyle";
import useStoreMapping from "../store/STORE_mapping.tsx";

// Register the fcose layout
cytoscape.use(fcose);

const CytoscapeGraph = () => {
  const cyRef = useRef(null);
  const [cytoscapeElements, setCytoscapeElements] = useState([]);

  // Access the store actions
  const setSelectedNodeId = useStoreMapping((state) => state.setSelectedNodeId);

  // Function to fetch and apply graph data
  const fetchAndApplyGraphData = async () => {
    try {
      const elements = await RD_CytoscapeGraph();

      if (elements?.Nodes && elements?.Edges) {
        const formattedElements = [
          ...elements.Nodes.map((node) => ({ data: node.data })),
          ...elements.Edges.map((edge) => ({ data: edge.data })),
        ];
        setCytoscapeElements(formattedElements);

        // Re-run the layout after updating elements
        if (cyRef.current) {
          const cy = cyRef.current;
          cy.elements().remove(); // Clear existing elements
          cy.add(formattedElements); // Add the new elements
          const layout = cy.layout(LAYOUT_CONFIG_PRESET); // Reinitialize the layout
          layout.run(); // Run the layout
        }
      } else {
        console.error("Invalid data format from RD_CytoscapeGraph");
      }
    } catch (error) {
      console.error("Failed to fetch graph data:", error);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchAndApplyGraphData();
  }, []);

  useEffect(() => {
    if (cyRef.current) {
      const cy = cyRef.current;

      cy.ready(() => {
        cy.nodes().forEach((node) => {
          applyDynamicNodeStyles(node);
        });
      });

      cy.on("add", "node", (evt) => {
        applyDynamicNodeStyles(evt.target);
      });

      // Add click event listener for nodes
      cy.on("tap", "node", (evt) => {
        const nodeId = evt.target.data("id"); // Get the node's ID
        setSelectedNodeId(nodeId); // Update the store with the selected node ID
      });
    }
  }, [cytoscapeElements, setSelectedNodeId]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "r" || event.key === "R") {
        fetchAndApplyGraphData(); // Re-fetch data and re-run layout
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress); // Clean up the event listener
    };
  }, []);

  const stylesheet = [
    { selector: "node[image]", style: NODE_IMAGE_STYLE },
    { selector: "node", style: NODE_STYLE },
    { selector: "edge", style: EDGE_STYLE },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {cytoscapeElements.length > 0 ? (
        <CytoscapeComponent
          elements={cytoscapeElements}
          style={{ width: "100%", height: "100%" }}
          stylesheet={stylesheet}
          layout={LAYOUT_CONFIG_PRESET}
          cy={(cy) => (cyRef.current = cy)}
        />
      ) : (
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
          Loading Graph...
        </div>
      )}
    </div>
  );
};

export default CytoscapeGraph;
