import { useState, useCallback } from 'react';
import seedrandom from 'seedrandom';

const use_FD_ProcessExecutionData = () => {
    const [selectedProcess, setSelectedProcess] = useState(null);
    const [executions, setExecutions] = useState([]);
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);

    // List of possible executors for random selection
    const executors = [
        "jdoe", "asmith", "mbrown", "ljohnson", "kwhite", "tperez", "mgarcia",
        "zclark", "kharris", "rlee", "bthompson", "wrobinson", "njackson",
        "acampbell", "dmartinez"
    ];

    // Stable handler for process click
    const handleProcessClick = useCallback((process, index) => {
        setSelectedProcess(process); // Update selected process
        setSelectedRowIndex(index); // Highlight row

        // Generate a seed based on the process name and index
        const seed = `${process.name}-${index}`;
        const rng = seedrandom(seed);

        // Determine if the process is in error status
        const isError = process.status === "ERROR";

        // Number of errors to generate randomly (between 1 and 3, only if the process status is "ERROR")
        const errorCount = isError ? Math.floor(rng() * 3) + 1 : 0;

        // Helper function to generate a random date within a certain range
        const generateRandomDate = () => {
            // Generate a random timestamp within the last 30 days (in milliseconds)
            const currentTime = Date.now();
            const randomOffset = Math.floor(rng() * 30 * 24 * 60 * 60 * 1000); // Random offset within 30 days
            const randomTimestamp = currentTime - randomOffset;

            // Create a Date object and format it as "YYYY-MM-DD HH:MM:SS"
            const randomDate = new Date(randomTimestamp);
            const formattedDate = randomDate.toISOString().replace('T', ' ').slice(0, 19); // Format as "2024-11-19 07:57:00"
            return formattedDate;
        };

        // Generate execution data
        const fakeExecutions = Array.from({ length: 20 }, (_, idx) => {
            const isInErrorGroup = isError && idx < 5 && rng() < errorCount / 5; // Randomly decide if it's an error among the first 5

            // Generate a more complex message with "TM1" logs
            const tm1LogMessages = [
                `TM1 Log: Execution started for task #${idx + 1}`,
                `TM1 Log: Task #${idx + 1} encountered an issue`,
                `TM1 Log: Task #${idx + 1} completed successfully`,
                `TM1 Log: Task #${idx + 1} is in progress`,
                `TM1 Log: Task #${idx + 1} requires attention`
            ];

            const message = isInErrorGroup
                ? `Execution failed due to error #${idx + 1}: ${tm1LogMessages[Math.floor(rng() * tm1LogMessages.length)]}`
                : `Execution message #${idx + 1}: ${tm1LogMessages[Math.floor(rng() * tm1LogMessages.length)]}`;

            // Generate a random date
            const date = generateRandomDate();

            // Version is based on the same random date (formatted as "v-YYYY-MM-DD HH:MM:SS")
            const version = `v-${date}`;

            // Randomly assign executor, except for the first row after shuffle
            return {
                id: idx + 1,
                status: isInErrorGroup ? "ERROR" : "SUCCESS",
                name: process.name,
                executor: null, // Placeholder for executor, we'll assign later
                duration: isInErrorGroup
                    ? `${Math.floor(rng() * 30)}m ${Math.floor(rng() * 60)}s` // Shorter duration for error
                    : `${Math.floor(rng() * 60)}m ${Math.floor(rng() * 60)}s`, // Regular duration
                date: date,  // Use random date
                version: version,
                message,
            };
        });

        // Shuffle the fake executions
        const shuffledExecutions = fakeExecutions.sort(() => rng() - 0.5); // Shuffle using the RNG

        // Sort the executions by date and version in descending order
        const sortedExecutions = shuffledExecutions.sort((a, b) => {
            // First sort by date in descending order
            const dateCompare = b.date.localeCompare(a.date);
            if (dateCompare !== 0) return dateCompare;

            // If dates are equal, sort by version in descending order
            return b.version.localeCompare(a.version);
        });

        // After sorting, assign the first executor to be process.executor
        if (sortedExecutions.length > 0) {
            sortedExecutions[0].executor = process.executor;
            sortedExecutions[0].duration = process.duration// Set process.executor for the first row
        }

        // For the rest, randomly assign an executor
        sortedExecutions.forEach((execution, idx) => {
            if (idx !== 0) { // Skip the first row
                execution.executor = executors[Math.floor(rng() * executors.length)];
            }
        });

        setExecutions(sortedExecutions); // Set sorted executions
    }, []);

    return {
        selectedProcess,
        setSelectedProcess,
        executions,
        selectedRowIndex,
        setSelectedRowIndex,
        handleProcessClick,
    };
};

export default use_FD_ProcessExecutionData;
