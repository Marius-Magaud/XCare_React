const Array_ProcessExecutionList = ({ executions }) => {

    const getBackgroundColor = (status) => {
        return status == "ERROR" ? "#FFCDD2" : "#FFFFFF"
    };

    return (
        <>
            {/* Header */}
            <div className="flex-shrink-0 flex w-full h-[65px] border-b border-b-[#ececec] font-medium text-[19px] font-['Poppins']">
                <div className="flex items-center justify-center w-[2.403846154%] h-full"></div>
                <div className="flex items-center justify-center w-[15.38461538%] h-full">Name</div>
                <div className="flex items-center justify-center w-[11.05769231%] h-full">Executor</div>
                <div className="flex items-center justify-center w-[4.807692308%] h-full">Duration</div>
                <div className="flex items-center justify-center w-[12.01923077%] h-full">Date</div>
                <div className="flex items-center justify-center w-[13.94230769%] h-full">Version</div>
                <div className="flex items-center justify-center w-[40.38461538%] h-full">Message</div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto pt-[13px] pb-[13px] no-scrollbar">
                {executions.map((execution, index) => (
                    <div
                        key={index}
                        className="flex w-full h-[40px] text-[16px] font-['Poppins']"
                        style={{
                            backgroundColor: getBackgroundColor(execution.status), // Apply background color based on error check
                        }}
                    >
                        <div className="flex items-center justify-center w-[2.403846154%] h-full">

                        </div>
                        <div className="flex items-center justify-center w-[15.38461538%] h-full">
                            {execution.name}
                        </div>
                        <div className="flex items-center justify-center w-[11.05769231%] h-full">
                            {execution.executor}
                        </div>
                        <div className="flex items-center justify-center w-[4.807692308%] h-full">
                            {execution.duration}
                        </div>
                        <div className="flex items-center justify-center w-[12.01923077%] h-full">
                            {execution.date}
                        </div>
                        <div className="flex items-center justify-center w-[13.94230769%] h-full">
                            {execution.version}
                        </div>
                        <div className="flex items-center justify-center w-[40.38461538%] h-full">
                            {execution.message}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Array_ProcessExecutionList;
