import Navbar from "../../components/Navbar.tsx";
import Header from "../../components/Header.tsx";
import Item   from "../../components/Item.tsx";
import CytoscapeGraph from "./components/CytoscapeGraph.tsx";

import Rightbar from "../../components/Rightbar.tsx";
import Rightbar_Section from "../../components/Rightbar_Section.tsx";
import Checkbox from "../../components/rightbar/checkbox.tsx";
import Multiple_Selector from "../../components/rightbar/multipleselector.tsx";
import useStoreMapping from "./store/STORE_mapping.tsx";
import ClassicSelector from "../../components/rightbar/classicselector.tsx";




const Mapping = () => {
  const store = useStoreMapping(); // Access Zustand store instance

  return (
    <>
      <div className="flex w-full min-h-full">
        <Navbar />
        <div className="ml-[17.1875%] min-h-full w-full bg-custom-gradient">
          <Body />
        </div>
        <Rightbar>
          <Rightbar_Section title="Global Options">
            <ClassicSelector options={["Cube","Chores","Dimension","Process"]}/>
            <ClassicSelector options={["Cube","Chores","Dimension","Process"]}/>

          </Rightbar_Section>
          <Rightbar_Section title="Nodes Level">
            <div className="w-full flex flex-wrap">
              <Checkbox label="Cube" store={store} filterCategory="NodesFilter" />
              <Checkbox label="Process" store={store} filterCategory="NodesFilter" />
              <Checkbox label="Dimension" store={store} filterCategory="NodesFilter" />
              <Checkbox label="Chores" store={store} filterCategory="NodesFilter" />
            </div>
          </Rightbar_Section>
          <Rightbar_Section title="Edges Level">
            <div className="w-full flex flex-wrap">
              <Checkbox label="Dependencies" store={store} filterCategory="EdgesFilter" />
              <Checkbox label="Rules" store={store} filterCategory="EdgesFilter" />
              <Checkbox label="Process" store={store} filterCategory="EdgesFilter" />
            </div>
          </Rightbar_Section>
          <Rightbar_Section title="Text filtering">
            <Multiple_Selector label="Contains" store={store} filterCategory="Contains" />
            <Multiple_Selector label="Not Contains" store={store} filterCategory="NotContains" />
          </Rightbar_Section>
        </Rightbar>
      </div>
    </>
  );
};

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