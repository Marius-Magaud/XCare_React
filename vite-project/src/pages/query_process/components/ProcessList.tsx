import { useState } from "react";
import use_FD_ProcessData from "../hooks/FD_ProcessList.tsx";

const Array_ProcessList = ({ onProcessClick }) => {
    const processes = use_FD_ProcessData(100); // Generate 100 fake rows
    const [selectedIndex, setSelectedIndex] = useState(null); // Track selected row index

    const getBackgroundColor = (status, index) => {
        if (selectedIndex === index) {
            return "bg-[#E6EDFD]";
        }

        switch (status) {
            case "ERROR":
                return "bg-[#FFCDD2]";
            case "SUCCESS":
            default:
                return "";
        }
    };

    const handleRowClick = (process, index) => {
        setSelectedIndex(index);
        onProcessClick(process);
    };

    return (
        <>
            {/* Header */}
            <div className="flex-shrink-0 flex w-full h-[65px] border-b border-b-[#ececec] font-medium text-[19px] font-['Poppins']">
                <div className="flex items-center justify-center w-[4.032258065%] h-full"></div>
                <div className="flex items-center justify-center w-[25.80645161%] h-full">
                    Name
                </div>
                <div className="flex items-center justify-center w-[18.5483871%] h-full">
                    Executor
                </div>
                <div className="flex items-center justify-center w-[8.064516129%] h-full">
                    Duration
                </div>
                <div className="flex items-center justify-center w-[20.16129032%] h-full">
                    Date
                </div>
                <div className="flex items-center justify-center w-[23.38709677%] h-full">
                    Version
                </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto pt-[13px] pb-[13px] no-scrollbar">
                {processes.map((process, index) => (
                    <div
                        key={index}
                        onClick={() => handleRowClick(process, index)} // Handle row click
                        className={`flex w-full h-[40px] text-[16px] font-['Poppins'] ${getBackgroundColor(
                            process.status,
                            index
                        )} cursor-pointer hover:bg-gray-100`}
                    >
                        <div className="flex items-center justify-center w-[4.032258065%] h-full"></div>
                        <div className="flex items-center justify-center w-[25.80645161%] h-full">
                            {process.name}
                        </div>
                        <div className="flex items-center justify-center w-[18.5483871%] h-full">
                            {process.executor}
                        </div>
                        <div className="flex items-center justify-center w-[8.064516129%] h-full">
                            {process.duration}
                        </div>
                        <div className="flex items-center justify-center w-[20.16129032%] h-full">
                            {process.date}
                        </div>
                        <div className="flex items-center justify-center w-[23.38709677%] h-full">
                            {process.version}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Array_ProcessList;
