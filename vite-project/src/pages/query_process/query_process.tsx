import Navbar from "../../components/Navbar.tsx";
import Header from "../../components/Header.tsx";
import Item   from "../../components/Item.tsx";
import Array_ProcessList from "./components/ProcessList.tsx";
import Array_ProcessExecutionList from "./components/ProcessExecutionList.tsx";
import use_FD_ProcessExecutionData from "./hooks/FD_ProcessExecutionList.tsx";

const Query_Process = () => {
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
    const {
        selectedProcess,
        executions,
        selectedRowIndex,
        handleProcessClick,
    } = use_FD_ProcessExecutionData(); // Use the custom hook

    return (
        <div className="w-full px-[20px] flex flex-col box-border">
            <div className="h-[500px] w-full flex box-border gap-[20px]">
                <div className="h-full w-[60%]">
                    <Item title="Process List">
                        <Array_ProcessList
                            onProcessClick={handleProcessClick}
                            selectedRowIndex={selectedRowIndex}
                        />
                    </Item>
                </div>
                <div className="h-full w-[40%]">
                    <Item title="Last executions of selected process">
                        {selectedProcess ? (
                            <p>Selected Process: {selectedProcess.name}</p>
                        ) : (
                            <p>Select a process to view details.</p>
                        )}
                    </Item>
                </div>
            </div>
            <div className="h-[700px] w-full mt-[37px] flex box-border">
                <div className="h-full w-full">
                    <Item title="Last executions of selected process">
                        <Array_ProcessExecutionList executions={executions} />
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

export default Query_Process;