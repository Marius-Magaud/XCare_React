import Header from "../../components/Header.tsx";
import Navbar from "../../components/Navbar.tsx";
import Item from "../../components/Item.tsx";
import Rightbar from "../../components/Rightbar.tsx";

import Process_Versioning from "./components/ProcessVersioning.tsx";
import Rightbar_Section from "../../components/Rightbar_Section.tsx";
import Classicselector from "../../components/rightbar/classicselector.tsx";
import VersioningSpecialSelector from "../../components/rightbar/versioning_special_selector.tsx";
import Radio from "../../components/rightbar/radio.tsx";

const Versioning_Process = () => {
  return (
    <>
      <div className="flex w-full min-h-full">
        <Navbar/>
        <div className="ml-[17.1875%] min-h-full w-full bg-custom-gradient m">
          <Body/>
        </div>
        <Rightbar>
          <Rightbar_Section title="Process Options">
            <Classicselector label="Selected Process" options={["Option 1 ","Option 2"]}></Classicselector>
            <Classicselector label="Selected Version" options={["Option 1 ","Option 2"]}></Classicselector>
            <Classicselector label="Comparison Version" options={["Option 1 ","Option 2"]}></Classicselector>

          </Rightbar_Section>
          <Rightbar_Section title="Comparaison Options">
            <VersioningSpecialSelector label="Whitespace"/>
            <Radio label="Diff display" name="DiffDisplay" options={["Unified", "Split"]}></Radio>
          </Rightbar_Section>
          <Rightbar_Section title="Recover Options">
            <Classicselector label="Selected Version" options={["Option 1 ","Option 2"]}></Classicselector>
            <Classicselector label="Comparison Version" options={["Option 1 ","Option 2"]}></Classicselector>
          </Rightbar_Section>
        </Rightbar>
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
      <Header title="Versioning - Process" logo='Versioning.svg' subtitle="Discover your logs" settings={true}/>
      <Content/>
    </div>
  );
};

export default Versioning_Process;