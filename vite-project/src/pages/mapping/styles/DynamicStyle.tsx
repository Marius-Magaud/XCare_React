const defaultTextBackgroundColor = "white";

const applyDynamicNodeStyles = (node) => {
  const category = node.data("categories");
  const commonStyle = {
    shape: "ellipse",
    "background-color": node.data("color"),
    "text-background-color": defaultTextBackgroundColor,
    "text-background-opacity": 0,
    "background-fit": "cover",
  };

  if (category === "Cube") {
    node.style({
      ...commonStyle,
      "background-image": "url(/static/mapping/cube-mapping.png)",
    });
  } else if (category === "Process") {
    node.style({
      ...commonStyle,
      "background-image": "url(/static/mapping/process-mapping.png)",
      "background-opacity": 1,
    });
  } else if (category === "Dimension") {
    node.style({
      ...commonStyle,
      "background-image": "url(/static/mapping/dimension-mapping.png)",
      "background-opacity": 1,
    });
  } else if (category === "Chore") {
    node.style({
      ...commonStyle,
      "background-image": "url(/static/mapping/process-mapping.png)",
      "background-opacity": 1,
    });
  }
};

export default applyDynamicNodeStyles;
