import useGlobalStore from "../../../store/golbal_store.tsx";
import FD_Live_Threads from "../hooks/FD_LiveThreads.tsx";
import RD_LiveThreads from "../hooks/RD_LiveThreads.tsx";

type Row = {
  Function: string;
  State: string;
  Name: string;
  Context: string;
  WaitTime: number;
  ElapsedTime: number;
};

const Array_LiveThread = () => {
  // Get the isDemo value from Zustand store
  const { isDemo } = useGlobalStore();

  // Fetch rows using the appropriate hook based on isDemo value
  const rows: Row[] = isDemo ? FD_Live_Threads() : RD_LiveThreads();

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
                {rows.filter(row => row.State !== "Idle")
                  .map((row, index) => (
                  <div
                    key={index}
                    className={`flex w-full h-[45px] text-[18px] font-['Poppins'] ${row.State === "Wait" ? "bg-[#FDCCCC]" : ""}`}
                  >
                    <div className="flex items-center justify-center w-[22.58064516%] h-full">{row.Function}</div>
                    <div className="flex items-center justify-center w-[12.09677419%] h-full">{row.State}</div>
                    <div className="flex items-center justify-center w-[12.09677419%] h-full">{row.Name}</div>
                    <div className="flex items-center justify-center w-[12.09677419%] h-full">{row.Context}</div>
                    <div className="flex items-center justify-center w-[14.51612903%] h-full">{`${row.WaitTime}s`}</div>
                    <div className="flex items-center justify-center w-[14.51612903%] h-full">
                      {isDemo ? `${Math.floor(row.ElapsedTime / 60)}m ${row.ElapsedTime % 60}s` : `${row.ElapsedTime}` }
                    </div>
                    <div className="flex items-center justify-center w-[12.09677419%] h-full">
                      <button className="text-red-500" onClick={() => handleDelete(index)}>
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
    </>
  );
};

// Function to handle delete action (this is just a placeholder and can be updated as needed)
const handleDelete = (index: number) => {
  console.log(`Delete thread at index: ${index}`);
};

export default Array_LiveThread;
