import { useMemo } from "react";
import seedrandom from "seedrandom";

const use_FD_ProcessData = (count = 20, seed = "3345321") => {
    const processNames = [
        "DataSyncJob",
        "ReportGeneration",
        "CacheCleanup",
        "BackupTask",
        "UserImportProcess",
        "DataValidation",
        "AnalyticsPipeline",
        "ETLWorkflow",
        "FileUpload",
        "SystemHealthCheck",
        "AuditLogExport",
        "NotificationDispatcher",
        "ScheduledMaintenance",
        "DatabaseMigration",
        "ErrorReportProcessor",
        "JobScheduler",
        "ResourceMonitor",
        "ApiGatewayCheck",
        "SessionValidator",
        "WorkflowExecutor",
    ];

    const executors = [
        "jdoe",
        "asmith",
        "mbrown",
        "ljohnson",
        "kwhite",
        "tperez",
        "mgarcia",
        "zclark",
        "kharris",
        "rlee",
        "bthompson",
        "wrobinson",
        "njackson",
        "acampbell",
        "dmartinez",
    ];

    return useMemo(() => {
        // Initialize the seed-based random number generator
        const rng = seedrandom(seed);

        const getRandomDate = () => {
            const now = new Date();
            const pastDate = new Date(
                now.getTime() - rng() * 1e10 // Random past date within a large range
            );
            return pastDate.toISOString().slice(0, 19).replace("T", " "); // Format: YYYY-MM-DD HH:mm:ss
        };

        const getRandomDuration = () =>
            `${Math.floor(rng() * 60)}m ${Math.floor(rng() * 60)}s`; // Random duration

        const getRandomStatus = () => (rng() < 0.1 ? "ERROR" : "SUCCESS"); // 10% chance for ERROR

        // Shuffle and take the first `count` names
        const shuffledNames = [...processNames]
            .sort(() => rng() - 0.5)
            .slice(0, count);

        const processes = shuffledNames.map((processName) => {
            const date = getRandomDate();
            const executor =
                executors[Math.floor(rng() * executors.length)]; // Random executor
            const status = getRandomStatus();

            return {
                name: processName,
                executor,
                date,
                duration: getRandomDuration(),
                version: `v - ${date}`,
                status,
            };
        });

        processes.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort descending by date

        return processes;
    }, [count, seed]);
};

export default use_FD_ProcessData;
