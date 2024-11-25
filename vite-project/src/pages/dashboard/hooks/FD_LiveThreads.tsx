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
                            if (row.state === "Wait") {
                                return { ...row, waitTime: row.waitTime + 1 };
                            } else if (row.state === "Run") {
                                return { ...row, elapsedTime: row.elapsedTime + 1 };
                            }
                            return row;
                        })
                        .filter(() => Math.random() > 0.1); // 10% chance to remove a row

                    // Randomly add a new row with 90% "Run", 10% "Wait"
                    if (Math.random() < 0.5) {
                        const newRow = {
                            function:
                                tm1ProcessNames[
                                    Math.floor(Math.random() * tm1ProcessNames.length)
                                    ], // Random TM1 process name
                            state: Math.random() < 0.9 ? "Run" : "Wait", // 90% chance "Run", 10% chance "Wait"
                            user: ["Alice", "Bob", "Charlie", "Diana"][
                                Math.floor(Math.random() * 4)
                                ], // Random user
                            context: ["PAW", "Architect", "PAFE", "Perspective", "TM1py"][
                                Math.floor(Math.random() * 4)
                                ], // Random context
                            waitTime: 0,
                            elapsedTime: 0,
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
