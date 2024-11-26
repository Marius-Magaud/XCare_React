
import Header from "../../components/Header.tsx";
import Navbar from "../../components/Navbar.tsx";
import Item from "../../components/Item.tsx";

import Process_Versioning from "./components/ProcessVersioning.tsx";

const Versioning_Process = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <Navbar/>
        <div className="ml-[17.1875%] min-h-full w-full bg-custom-gradient">
         <Body/>
        </div>
      </div>
    </>
  );
}

const Content = () => {
    return (
        <div className="w-full px-[20px] flex flex-col box-border">
            <div className="h-[1230px] w-full flex box-border gap-[20px]">
                <div className="h-full w-[100%]">
                    <Item title="Query Logs">
                        <Process_Versioning/>
                    </Item>
                </div>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="flex flex-grow flex-col items-start">
            <Header title="Versioning - Process" subtitle="Discover your logs"/>
            <Content />
        </div>
    );
};

export default Versioning_Process;