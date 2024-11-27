
import Header from "../../components/Header.tsx";
import Navbar from "../../components/Navbar.tsx";
import Item from "../../components/Item.tsx";
import Rightbar from "../../components/Rightbar.tsx";
import Array_QueryLogs from "./components/QueryLogs.tsx";
import Rightbar_Section from "../../components/Rightbar_Section.tsx";



const Query_Logs = () => {
    return (
        <>
            <div className="flex w-full min-h-full">
                <Navbar/>
                <div className="ml-[17.1875%] min-h-full w-full bg-custom-gradient">
                    <Body/>
                </div>
                <Rightbar>
                  <Rightbar_Section title="Logging Level">
                    Tutututu <br/>
                    Tutututu <br/>
                    Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/>

                    <br/><br/><br/><br/>
                    MAX VERSTAPPEN
                    <br/><br/>

                  </Rightbar_Section>
                  <Rightbar_Section title="TM1 Logger">
                    Tutututu <br/>
                    Tutututu <br/>
                    Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/>

                    <br/><br/><br/><br/>
                    MAX VERSTAPPEN
                    <br/><br/>

                  </Rightbar_Section>
                  <Rightbar_Section title="Date">
                    Tutututu <br/>
                    Tutututu <br/>
                    Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/>

                    <br/><br/><br/><br/>
                    MAX VERSTAPPEN
                    <br/><br/>

                  </Rightbar_Section>
                  <Rightbar_Section title="Text filtering">
                    Tutututu <br/>
                    Tutututu <br/>
                    Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/> Tutututu <br/>
                    Tutututu <br/>

                    <br/><br/><br/><br/>
                    MAX VERSTAPPEN
                    <br/><br/>

                  </Rightbar_Section>
                </Rightbar>
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
                        <Array_QueryLogs/>
                    </Item>
                </div>
            </div>
        </div>
    );
};


const Body = () => {
    return (
        <div className="flex flex-grow flex-col items-start">
            <Header title="Query - Logs" subtitle="Discover your logs" settings={true}/>
            <Content />
        </div>
    );
};

export default Query_Logs;