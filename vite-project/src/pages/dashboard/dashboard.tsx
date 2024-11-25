import Navbar from "../../components/Navbar.tsx";
import Header from "../../components/Header.tsx";
import Item   from "../../components/Item.tsx";

import Array_LiveThread from "./components/LiveThreads.tsx";
import Array_LiveLogs   from "./components/LiveLogs.tsx";


const Dashboard = () => {
  return (
      <>
      <div className="flex w-full" >
          <Navbar/>
          <Body/>
      </div>
      </>
  );
}

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
          <Item title="Wait History"/>
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
    <div className="flex bg-white flex-grow flex-col items-start">
      <Header />
      <Content />
    </div>
    );
};

export default Dashboard;