import Navbar from "../../components/Navbar.tsx";
import Header from "../../components/Header.tsx";

const Dashboard = () => {
  return (
      <>
      <div className="flex h-screen w-full">
          <Navbar/>
          <Body/>
      </div>
      </>
  );
}

const Item = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start h-full">
      {/* Title */}
      <h2 className="text-black text-[23px] font-medium font-['Poppins'] mb-2">{title}</h2>

      {/* Main Container */}
      <div className="w-full h-full flex flex-col rounded-lg border border-[#ececec] text-[#797896] overflow-hidden">
        {children}
      </div>
    </div>
  );
};


// Live Thread

const Array_LiveThread = () => {
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
        {[...Array(20)].map((_, index) => (
          <Row_LiveThread key={index} />
        ))}
      </div>
    </>
  );
};

const Row_LiveThread = () => {
  const columnClasses = "flex items-center justify-center w-[12.09677419%] h-full";
  return (
    <div className="flex w-full h-[45px] text-[18px] font-['Poppins']">
      <div className="flex items-center justify-center w-[22.58064516%] h-full">PA_BUD_Transfert</div>
      <div className={columnClasses}>Run</div>
      <div className={columnClasses}>Idriss</div>
      <div className={columnClasses}>PAW</div>
      <div className="flex items-center justify-center w-[14.51612903%] h-full">0s</div>
      <div className="flex items-center justify-center w-[14.51612903%] h-full">1m 05s</div>
      <div className={columnClasses}>X</div>
    </div>
  );
};

// Live Logs

const Array_LiveLogs = () => {
  return (
    <>
      {/* Header */}
      <div className="flex-shrink-0 flex w-full h-[65px] border-b border-b-[#ececec] font-medium text-[19px] font-['Poppins']">
        <div className="flex items-center justify-center w-[7.211538462%] h-full">Thread ID</div>
        <div className="flex items-center justify-center w-[7.211538462%] h-full">Session ID</div>
        <div className="flex items-center justify-center w-[7.211538462%] h-full">Level</div>
        <div className="flex items-center justify-center w-[12.01923077%] h-full">Timestamp</div>
        <div className="flex items-center justify-center w-[7.211538462%] h-full">Logger</div>
        <div className="flex items-center justify-center w-[59.13461538%] h-full">Message</div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-grow overflow-y-auto pt-[13px] pb-[13px] no-scrollbar">
        {[...Array(20)].map((_, index) => (
          <Row_LiveLogs key={index} />
        ))}
      </div>
    </>
  );
};

const Row_LiveLogs = () => {
  return (
    <div className="flex w-full h-[40px] text-[16px] font-['Poppins']">
      <div className="flex items-center justify-center w-[7.211538462%] h-full">004565</div>
      <div className="flex items-center justify-center w-[7.211538462%] h-full">000000</div>
      <div className="flex items-center justify-center w-[7.211538462%] h-full">INFO</div>
      <div className="flex items-center justify-center w-[12.01923077%] h-full">2024-02-21 08:28:07.021</div>
      <div className="flex items-center justify-center w-[7.211538462%] h-full">TM1.Info</div>
      <div className="flex items-center justify-center w-[59.13461538%] h-full">processus `calc_conso_belgique`: exécution terminée normalement, temps écoulé 10.00 secondes</div>
    </div>
  );
};


const Content = () => {
  return (
    <div className="w-full px-[20px] flex flex-col box-border">
      <div className="h-[500px] w-full flex box-border gap-[20px]">
        <div className="h-full w-[60%]">
          <Item title="Live Threads">
            <Array_LiveThread/>
          </Item>
        </div>
        <div className="h-full w-[40%] ">
          <Item title="Another View"/>
        </div>
      </div>
      <div className="h-[700px] w-full mt-[37px] flex box-border">
        <div className="h-full w-full">
          <Item title="Live Logs">
            <Array_LiveLogs/>
          </Item>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="h-full bg-white flex-grow flex flex-col items-start">
      <Header />
      <Content />
    </div>
  );
};

export default Dashboard;