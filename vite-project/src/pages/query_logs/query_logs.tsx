
import Header from "../../components/Header.tsx";
import Navbar from "../../components/Navbar.tsx";
import Item from "../../components/Item.tsx";
import Array_QueryLogs from "./components/QueryLogs.tsx";



const Query_Logs = () => {
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
            <div className="h-[1230px] w-full flex box-border gap-[20px]">
                <div className="h-full w-[100%]">
                    <Item title="Query Logs">
                        <Array_QueryLogs/>
                    </Item>
                </div>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="flex bg-white flex-grow flex-col items-start">
            <Header title="Query - Logs" subtitle="Discover your logs"/>
            <Content />
        </div>
    );
};

export default Query_Logs;