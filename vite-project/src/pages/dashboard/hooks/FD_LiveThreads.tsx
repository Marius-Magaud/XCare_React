import { useEffect, useState } from "react";

// Custom hook for polling API
const use_FD_LiveThread = () => {
    const [rows, setRows] = useState([]);

    // Predefined list of TM1 process names
    const tm1ProcessNames = [
        "SaveData",
        "RefreshCube",
        "RebuildHierarchy",
        "ExportData",
        "UpdateSecurity",
        "RunOptimization",
        "RecalculateModel",
        "ValidateInput",
    ];

    useEffect(() => {
        const fetchData = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // Update existing rows
                    const updatedRows = rows
                      .map((row) => {
                          if (row.State === "Wait") {
                              return { ...row, WaitTime: row.WaitTime + 1 };
                          } else if (row.State === "Run") {
                              return { ...row, ElapsedTime: row.ElapsedTime + 1 };
                          }
                          return row;
                      })
                      .filter(() => Math.random() > 0.1); // 10% chance to remove a row

                    // Randomly add a new row with 90% "Run", 10% "Wait"
                    if (Math.random() < 0.5) {
                        const newRow = {
                            Function:
                              tm1ProcessNames[
                                Math.floor(Math.random() * tm1ProcessNames.length)
                                ], // Random TM1 process name
                            State: Math.random() < 0.9 ? "Run" : "Wait", // 90% chance "Run", 10% chance "Wait"
                            Name: ["Alice", "Bob", "Charlie", "Diana"][
                              Math.floor(Math.random() * 4)
                              ], // Random user
                            Context: ["PAW", "Architect", "PAFE", "Perspective", "TM1py"][
                              Math.floor(Math.random() * 4)
                              ], // Random context
                            WaitTime: 0,
                            ElapsedTime: 0,
                        };
                        updatedRows.push(newRow);
                    }

                    resolve(updatedRows);
                }, 500); // Simulate network delay
            });
        };

        const pollApi = () => {
            fetchData().then((data) => setRows(data));
        };

        pollApi(); // Fetch data initially
        const interval = setInterval(pollApi, 1000); // Poll every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, [rows]);

    return rows;
};

export default use_FD_LiveThread;
