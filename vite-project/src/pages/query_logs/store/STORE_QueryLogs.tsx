import { create } from 'zustand';

const logStore = () => {
  console.log('Store updated');
};

// Define the Zustand store
const useStoreQueryLogs = create((set) => ({
  LoggingLevel: ["INFO","ERROR","WARNING","FATAL","DEBUG"],
  TM1Logger: [
    "API",
    "Application",
    "Audit",
    "Blob",
    "CAMSecurity",
    "Chore",
    "Cognos",
    "Commit",
    "Cube",
    "Dimension",
    "Event",
    "Git",
    "HttpRequest",
    "LDAPAuth",
    "Lock",
    "Login",
    "Mdx",
    "NGAPI",
    "ODBC",
    "Process",
    "Server",
    "System"
  ]
  ,
  Contains: [],
  NotContains: [],

  // Specific setters
  setLoggingLevel: (updateFn) => {
    set((state) => {
      const newLoggingLevel = updateFn(state.LoggingLevel);
      return { LoggingLevel: newLoggingLevel };
    });
    logStore();
  },
  setTM1Logger: (updateFn) => {
    set((state) => {
      const newTM1Logger = updateFn(state.TM1Logger);
      return { TM1Logger: newTM1Logger };
    });
    logStore();
  },
  setContains: (updateFn) => {
    set((state) => {
      const newContains = updateFn(state.Contains);
      return { Contains: newContains };
    });
    logStore();
  },
  setNotContains: (updateFn) => {
    set((state) => {
      const newNotContains = updateFn(state.NotContains);
      return { NotContains: newNotContains };
    });
    logStore();
  },
}));

export default useStoreQueryLogs;
