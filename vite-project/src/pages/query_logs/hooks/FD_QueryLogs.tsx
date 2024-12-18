import { useMemo } from "react";

const FD_QueryLogs = () => {
    const generateMockLogs = () => {
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
                level: "WARN",
                timestamp: "2024-11-23 10:16:00",
                logger: "Auth",
                message: "User session approaching expiration",
            },
            {
                threadId: "3234",
                sessionId: "7678",
                level: "ERROR",
                timestamp: "2024-11-23 10:16:30",
                logger: "Database",
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
            logs.push(sampleLogs.find(log => log.level === "INFO"));
        }

        // Add 5 logs for each of the other levels
        const otherLevels = ["DEBUG", "WARN", "ERROR", "FATAL"];
        otherLevels.forEach(level => {
            for (let i = 0; i < 5; i++) {
                logs.push(sampleLogs.find(log => log.level === level));
            }
        });

        // Shuffle the logs to randomize their order
        for (let i = logs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [logs[i], logs[j]] = [logs[j], logs[i]];
        }

        return logs;
    };

    // Use useMemo to memoize the generated logs and avoid recalculating on every render
    const mockLogs = useMemo(() => generateMockLogs(), []);

    return mockLogs;
};

export default FD_QueryLogs;
