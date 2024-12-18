import { useEffect, useState } from "react";

const use_FD_LiveLogs = (maxLogs = 50, initialIntervalTime = 2000) => {
    const [logs, setLogs] = useState([]);
    const [intervalTime, setIntervalTime] = useState(initialIntervalTime);

    useEffect(() => {
        const tick = () => {
            // Generate a new precise log
            const newLog = createPreciseLog(
                logs[0]?.timestamp ? new Date(logs[0].timestamp) : new Date()
            );

            // Update logs with the new log, maintaining the max limit
            setLogs((prevLogs) => [newLog, ...prevLogs.slice(0, maxLogs - 1)]);

            // Calculate the new interval time ±50% of the current intervalTime
            const newIntervalTime = Math.random() * (initialIntervalTime - 500) + 500;
            setIntervalTime(newIntervalTime);
        };

        // Start the interval
        const intervalId = setInterval(tick, intervalTime);

        // Cleanup and restart interval when intervalTime changes
        return () => clearInterval(intervalId);
    }, [intervalTime, logs, maxLogs]);

    return logs;
};

const createPreciseLog = (previousTimestamp) => {
    // Define allowed combinations
    const allowedCombinations = [
        { LEVEL: "DEBUG", LOGGER: "TM1.Login", MESSAGE: "Login attempt by client: {user}" },
        { LEVEL: "DEBUG", LOGGER: "TM1.Login", MESSAGE: "Login Success: User {user}" },
        { LEVEL: "DEBUG", LOGGER: "TM1.Login", MESSAGE: "Logout User {user}" },
        { LEVEL: "INFO", LOGGER: "TM1.Process", MESSAGE: 'Process "{process}" executed by user "{user}"' },
        { LEVEL: "INFO", LOGGER: "TM1.Process", MESSAGE: 'Processus "{process}": exécution terminée normalement, temps écoulé {duration} secondes' },
        { LEVEL: "INFO", LOGGER: "TM1.Process", MESSAGE: 'Process "{process}" run from process "{parent_process}" by user "{user}"' },
        { LEVEL: "INFO", LOGGER: "TM1.Chore", MESSAGE: 'Chore "{chore}" executed by scheduler' },
        { LEVEL: "INFO", LOGGER: "TM1.Chore", MESSAGE: 'Chore "{chore}" finished executing' },
        { LEVEL: "INFO", LOGGER: "TM1.SQLAPI", MESSAGE: "Query executed successfully for database '{database}'" },
        { LEVEL: "INFO", LOGGER: "TM1.SQLAPI", MESSAGE: "Checking Driver Capabilities for database {database}" },
        { LEVEL: "WARN", LOGGER: "TM1.Process", MESSAGE: 'Warning in process "{process}": Execution took longer than expected' },
        { LEVEL: "ERROR", LOGGER: "TM1.Process", MESSAGE: 'Process "{process}" failed: {error_detail}' },
        { LEVEL: "ERROR", LOGGER: "TM1.SQLAPI", MESSAGE: 'SQL error encountered: {sql_error}' },
        { LEVEL: "FATAL", LOGGER: "TM1.Process", MESSAGE: 'Fatal error in process "{process}". Immediate attention required' },
    ];

    const users = [
        "Aexis",
        "Linda.ayadi",
        "Yona.fauconnier",
        "Olivier.tronel",
        "Honore.dubreil",
        "Cecile.jeannet",
    ];

    const processes = [
        "Copie_Version_Gestion_Vers_Gestion",
        "z_ExportCubeTransfert",
        "INT41 Oracle_Ressource_Dim",
        "MSSQL_Export_to_lake",
        "Oracle_Export_Data",
    ];

    const chores = [
        "Copy_To_Prod_Saas",
        "Sauvegarde 22h00",
        "INT41_Ressource",
        "DataLake_Export",
        "Oracle_Export",
    ];

    const databases = ["TM1Database", "ODSTM1"];
    const errorDetail = "The attribute is not unique. Value XYZ cannot be defined.";
    const sqlError = "SQL Server error code 12345.";

    // Function to pick a random item based on probabilities
    const pickRandomWithProbability = () => {
        const random = Math.random();
        if (random < 0.8) return "INFO";
        return "OTHER"; // For WARN, ERROR, FATAL
    };

    // Filter allowedCombinations based on the picked level
    const pickedLevel = pickRandomWithProbability();
    const filteredCombinations = allowedCombinations.filter((item) => {
        if (pickedLevel === "OTHER") {
            return ["WARN", "ERROR", "FATAL","DEBUG"].includes(item.LEVEL);
        }
        return item.LEVEL === pickedLevel;
    });

    // Randomly pick a log entry from the filtered list
    const randomCombination =
        filteredCombinations[Math.floor(Math.random() * filteredCombinations.length)];

    // Replace placeholders with actual data
    const message = randomCombination.MESSAGE
        .replace("{user}", users[Math.floor(Math.random() * users.length)])
        .replace("{process}", processes[Math.floor(Math.random() * processes.length)])
        .replace("{parent_process}", processes[Math.floor(Math.random() * processes.length)])
        .replace("{chore}", chores[Math.floor(Math.random() * chores.length)])
        .replace("{database}", databases[Math.floor(Math.random() * databases.length)])
        .replace("{error_detail}", errorDetail)
        .replace("{sql_error}", sqlError)
        .replace("{duration}", (Math.random() * 500).toFixed(2));

    const now = new Date();
    const timestampStr = now.toISOString().replace("T", " ").slice(0, 19);

    return {
        TimeStamp: timestampStr,
        Level: randomCombination.LEVEL,
        Logger: randomCombination.LOGGER,
        ThreadID: Math.floor(Math.random() * 1000),
        SessionID: Math.floor(Math.random() * 10000),
        Message : message,
    };
};

export default use_FD_LiveLogs;
