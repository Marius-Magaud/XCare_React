const Array_MailBox = () => {
  // Function to generate mock log data
  const generateMockLogs = () => {
    const sampleLogs = [
      {
        level: 1,
        timestamp: "2024-11-23 10:15:30",
        object: "Process",
        instance: "DEV",
        name: "ServiceA",
        message: "This is a debug message",
      },
      {
        level: 2,
        timestamp: "2024-11-23 10:16:00",
        object: "Chores",
        instance: "PRODUCTION",
        name: "AuthService",
        message: "User session approaching expiration",
      },
      {
        level: 1,
        timestamp: "2024-11-23 10:16:30",
        object: "Cube",
        instance: "DEV",
        name: "DatabaseService",
        message: "Database connection failed",
      },
      {
        level: 2,
        timestamp: "2024-11-23 10:17:00",
        object: "Dimension",
        instance: "PRODUCTION",
        name: "CriticalService",
        message: "Critical system failure detected",
      },
      {
        level: 1,
        timestamp: "2024-11-23 10:18:00",
        object: "Process",
        instance: "DEV",
        name: "WorkerService",
        message: "Info classic message",
      },
    ];

    // Generate 100 logs by picking random samples
    return Array.from({ length: 100 }, () => {
      const randomIndex = Math.floor(Math.random() * sampleLogs.length);
      return sampleLogs[randomIndex];
    });
  };

  const mockLogs = generateMockLogs();

  // Function to determine the background color based on the log level
  const getBackgroundColor = (level) => {
    switch (level) {
      case 1:
        return "bg-white"; // White for Level 1
      case 2:
        return "bg-[#FFCDD2]"; // Light Red for Level 2
      default:
        return ""; // Default background
    }
  };

  return (
    <>
      {/* Header */}
      <div
        className="flex-shrink-0 flex w-full h-[65px] border-b border-b-[#ececec] font-medium text-[19px] font-['Poppins']">
        <div className="flex items-center justify-center w-[10%] h-full">
          Instance
        </div>
        <div className="flex items-center justify-center w-[10%] h-full">
          Level
        </div>
        <div className="flex items-center justify-center w-[10%] h-full">
          Object
        </div>
        <div className="flex items-center justify-center w-[10%] h-full">
          Name
        </div>
        <div className="flex items-center justify-center w-[20%] h-full">
          Timestamp
        </div>
        <div className="flex items-center justify-center w-[50%] h-full">
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
            <div className="flex items-center justify-center w-[10%] h-full">
              {log.instance}
            </div>
            <div className="flex items-center justify-center w-[10%] h-full">
              {log.level}
            </div>
            <div className="flex items-center justify-center w-[10%] h-full">
              {log.object}
            </div>
            <div className="flex items-center justify-center w-[10%] h-full">
              {log.name}
            </div>
            <div className="flex items-center justify-center w-[20%] h-full">
              {log.timestamp}
            </div>
            <div className="flex items-center justify-center w-[50%] h-full">
              {log.message}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Array_MailBox;
