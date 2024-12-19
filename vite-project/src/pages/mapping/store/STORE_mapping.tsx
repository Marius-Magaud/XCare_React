import { create } from "zustand";

const useStoreMapping = create((set, get) => {
  const logStore = () => {
    console.log("Updated Store:", get());
  };

  return {
    // Initial state
    NodesFilter: ["Cube", "Chores", "Dimension", "Process"],
    EdgesFilter: ["Dependencies"],
    Contains: [],
    NotContains: [],
    selectedNodeId: "19",
    depthLevel: 2,

    // Generic action to update filters dynamically
    updateFilter: (category, updateFn) => {
      set((state) => {
        const newFilter = updateFn(state[category]);
        return { [category]: newFilter };
      });
      logStore();
    },

    // Specific setters
    setNodesFilter: (updateFn) => {
      set((state) => {
        const newNodesFilter = updateFn(state.NodesFilter);
        return { NodesFilter: newNodesFilter };
      });
      logStore();
    },
    setEdgesFilter: (updateFn) => {
      set((state) => {
        const newEdgeFilter = updateFn(state.EdgesFilter);
        return { EdgesFilter: newEdgeFilter };
      });
      logStore();
    },
    setContains: (newContains) => {
      set(() => ({ Contains: newContains }));
      logStore();
    },
    setNotContains: (newNotContains) => {
      set(() => ({ NotContains: newNotContains }));
      logStore();
    },

    // Action to set the selected node's ID
    setSelectedNodeId: (id) => {
      set(() => ({ selectedNodeId: id }));
      logStore();
    },

    setDepthLevel: (level) => {
      set(() => ({ depthLevel: level }));
      logStore();
    },
  };
});

export default useStoreMapping;
