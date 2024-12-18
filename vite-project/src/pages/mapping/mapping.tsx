import Navbar from "../../components/Navbar.tsx";
import Header from "../../components/Header.tsx";
import Item   from "../../components/Item.tsx";
import CytoscapeGraph from "./components/CytoscapeGraph.tsx";

const Mapping = () => {
    return (
        <>
            <div className="flex w-full min-h-full">
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
            <div className="h-[1230px] w-full flex box-border gap-[20px] mb-[10px]">
                <div className="h-full w-[100%]">
                    <Item title="Query Logs">
                        <CytoscapeGraph/>
                    </Item>
                </div>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="flex flex-grow flex-col items-start">
            <Header logo='Mapping.svg' settings={true}/>
            <Content />
        </div>
    );
};

export default Mapping