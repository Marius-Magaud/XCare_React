export const NODE_IMAGE_STYLE = {
  label: "data(label)",
  "background-image": "data(image)",
  "background-fit": "contain",
  width: "90%",
  height: "90%",
};

export const NODE_STYLE = {
  label: "data(label)",
  "background-color": "data(color)",
  width: "data(size)",
  height: "data(size)",
  "text-background-opacity": 0,
  "text-background-padding": "3px",
  "font-size": "data(fontsize)",
  color: sessionStorage.getItem("theme") === "dark" ? "white" : "black",
};

export const EDGE_STYLE = {
  "curve-style": "unbundled-bezier",
  "width": "10",
  "line-color": "data(color)",
  "source-arrow-color": "data(color)",
  "target-arrow-color": "data(color)",
  "target-arrow-shape": "triangle",
  "arrow-scale": 1.5,
  opacity: 1,
};
