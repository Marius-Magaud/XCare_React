import Navbar from "../../components/Navbar.tsx";
import Header from "../../components/Header.tsx";
import Item   from "../../components/Item.tsx";
import TreeMap from "./components/Treemap.tsx";

const Statistics_Treemap = () => {
    return (
        <>
            <div className="flex w-full min-h-full overflow-x-hidden">
                <Navbar/>
                <div className="ml-[17.1875%] min-h-full w-full bg-custom-gradient ">
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
                    <Item title="Treemap">
                        <TreeMap/>
                    </Item>
                </div>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="flex flex-grow flex-col items-start ">
            <Header subtitle="Discover your process statistics.
" logo="Statistics.svg" title="Statistics - treemap" />
            <Content />
        </div>
    );
};

export default Statistics_Treemap