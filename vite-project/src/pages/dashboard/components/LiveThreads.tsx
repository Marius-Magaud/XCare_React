import FD_Live_Threads from "../hooks/FD_LiveThreads.tsx";

const Array_LiveThread = () => {

    const rows = FD_Live_Threads(); // Fetch rows using the hook

    return (
        <>
            {/* Header */}
            <div className="flex-shrink-0 flex w-full h-[65px] border-b border-b-[#ececec] text-[19px] font-medium font-['Poppins']">
                <div className="flex items-center justify-center w-[22.58064516%] h-full">Function</div>
                <div className="flex items-center justify-center w-[12.09677419%] h-full">State</div>
                <div className="flex items-center justify-center w-[12.09677419%] h-full">User</div>
                <div className="flex items-center justify-center w-[12.09677419%] h-full">Context</div>
                <div className="flex items-center justify-center w-[14.51612903%] h-full">Wait Time</div>
                <div className="flex items-center justify-center w-[14.51612903%] h-full">Elapsed Time</div>
                <div className="flex items-center justify-center w-[12.09677419%] h-full">Delete</div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto pt-[13px] pb-[13px] no-scrollbar">
                {rows.map((row, index) => (
                    <div
                        key={index}
                        className="flex w-full h-[45px] text-[18px] font-['Poppins']"
                        style={row.state === "Wait" ? { backgroundColor: "#FDCCCC" } : {}}
                    >
                        <div className="flex items-center justify-center w-[22.58064516%] h-full">{row.function}</div>
                        <div className="flex items-center justify-center w-[12.09677419%] h-full">{row.state}</div>
                        <div className="flex items-center justify-center w-[12.09677419%] h-full">{row.user}</div>
                        <div className="flex items-center justify-center w-[12.09677419%] h-full">{row.context}</div>
                        <div className="flex items-center justify-center w-[14.51612903%] h-full">{`${row.waitTime}s`}</div>
                        <div className="flex items-center justify-center w-[14.51612903%] h-full">
                            {`${Math.floor(row.elapsedTime / 60)}m ${row.elapsedTime % 60}s`}
                        </div>
                        <div className="flex items-center justify-center w-[12.09677419%] h-full">X</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Array_LiveThread;
