import FD_QueryLogs from "../hooks/FD_QueryLogs.tsx";

const Array_QueryLogs = () => {
    // Function to generate mock log data
    const mockLogs = FD_QueryLogs();

    // Function to determine the background color based on the log level
    const getBackgroundColor = (level) => {
        switch (level) {
            case "DEBUG":
                return "bg-[#ADD8E6]"; // Light Blue
            case "WARN":
                return "bg-[#FFE0B2]"; // Light Orange
            case "ERROR":
                return "bg-[#FFCDD2]"; // Light Red
            case "FATAL":
                return "bg-[#F8B2B2]"; // Pinkish Red
            default:
                return ""; // Default background
        }
    };

    return (
        <>
            {/* Header */}
            <div className="flex-shrink-0 flex w-full h-[65px] border-b border-b-[#ececec] font-medium text-[19px] font-['Poppins']">
                <div className="flex items-center justify-center w-[7.211538462%] h-full">
                    Thread ID
                </div>
                <div className="flex items-center justify-center w-[7.211538462%] h-full">
                    Session ID
                </div>
                <div className="flex items-center justify-center w-[7.211538462%] h-full">
                    Level
                </div>
                <div className="flex items-center justify-center w-[12.01923077%] h-full">
                    Timestamp
                </div>
                <div className="flex items-center justify-center w-[7.211538462%] h-full">
                    Logger
                </div>
                <div className="flex items-center justify-center w-[59.13461538%] h-full">
                    Message
                </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto pt-[13px] pb-[13px] no-scrollbar">
                {mockLogs.map((log, index) => (
                    <div
                        key={index}
                        className={`flex w-full h-[40px] text-[16px] font-['Poppins'] ${getBackgroundColor(
                            log.level
                        )}`}
                    >
                        <div className="flex items-center justify-center w-[7.211538462%] h-full">
                            {log.threadId}
                        </div>
                        <div className="flex items-center justify-center w-[7.211538462%] h-full">
                            {log.sessionId}
                        </div>
                        <div className="flex items-center justify-center w-[7.211538462%] h-full">
                            {log.level}
                        </div>
                        <div className="flex items-center justify-center w-[12.01923077%] h-full">
                            {log.timestamp}
                        </div>
                        <div className="flex items-center justify-center w-[7.211538462%] h-full">
                            {log.logger}
                        </div>
                        <div className="flex items-center justify-center w-[59.13461538%] h-full">
                            {log.message}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Array_QueryLogs;
