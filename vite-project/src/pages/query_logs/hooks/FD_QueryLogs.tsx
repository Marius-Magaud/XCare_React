import { useMemo } from "react";
import useStoreQueryLogs from "../store/STORE_QueryLogs.tsx";

const FD_QueryLogs = () => {
    const generateMockLogs = () => {
    const store = useStoreQueryLogs();

    const sampleLogs = [
        {
            threadId: "1234",
            sessionId: "5678",
            level: "DEBUG",
            timestamp: "2024-11-23 10:15:30",
            logger: "System",
            message: "This is a debug message",
        },
        {
            threadId: "2234",
            sessionId: "6678",
            level: "WARNING",
            timestamp: "2024-11-23 10:16:00",
            logger: "API",
            message: "User session approaching expiration",
        },
        {
            threadId: "3234",
            sessionId: "7678",
            level: "ERROR",
            timestamp: "2024-11-23 10:16:30",
            logger: "ODBC",
            message: "Database connection failed",
        },
        {
            threadId: "4234",
            sessionId: "8678",
            level: "FATAL",
            timestamp: "2024-11-23 10:17:00",
            logger: "Server",
            message: "Critical system failure detected",
        },
        {
            threadId: "4234",
            sessionId: "8678",
            level: "INFO",
            timestamp: "2024-11-23 10:17:00",
            logger: "Server",
            message: "Info classic message",
        },
    ];

    const logs = [];

    // Add 80 INFO logs
    for (let i = 0; i < 80; i++) {
        const infoLog = sampleLogs.find(log => log.level === "INFO");
        if (infoLog) logs.push(infoLog);
    }

    // Add 5 logs for each of the other levels
    const otherLevels = ["DEBUG", "WARNING", "ERROR", "FATAL"];
    otherLevels.forEach(level => {
        console.log(level)
        const matchingLogs = sampleLogs.filter(log => log.level === level);
        console.log(matchingLogs)
        for (let i = 0; i < 5; i++) {
            if (matchingLogs[0]) logs.push(matchingLogs[0]);
        }
    });

    // Shuffle the logs to randomize their order
    for (let i = logs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [logs[i], logs[j]] = [logs[j], logs[i]];
    }

    const filteredLogs = logs.filter(log => {
        return (
            store.LoggingLevel.includes(log.level) &&
            store.TM1Logger.includes(log.logger)
        );
    });

    return filteredLogs;
};



    // Use useMemo to memoize the generated logs and avoid recalculating on every render
     return generateMockLogs()

};

export default FD_QueryLogs;
