import Header from "../../components/Header.tsx";
import Navbar from "../../components/Navbar.tsx";
import Item from "../../components/Item.tsx";
import Rightbar from "../../components/Rightbar.tsx";
import Array_QueryLogs from "./components/QueryLogs.tsx";
import Rightbar_Section from "../../components/Rightbar_Section.tsx";
import Checkbox from "../../components/rightbar/checkbox.tsx";
import DateTimePicker from "../../components/rightbar/datetimepicker.tsx";
import Multiple_Selector from "../../components/rightbar/multipleselector.tsx";

const Query_Logs = () => {

  const categories = [
    { name: "API" },
    { name: "Application" },
    { name: "Audit" },
    { name: "Blob" },
    { name: "CAMSecurity" },
    { name: "Chore" },
    { name: "Cognos" },
    { name: "Commit" },
    { name: "Cube" },
    { name: "Dimension" },
    { name: "Event" },
    { name: "Git" },
    { name: "HttpRequest" },
    { name: "LDAPAuth" },
    { name: "Lock" },
    { name: "Login" },
    { name: "Mdx" },
    { name: "NGAPI" },
    { name: "ODBC" },
    { name: "Process" },
    { name: "Server" },
    { name: "System" }
  ];

  return (
    <>
      <div className="flex w-full min-h-full">
        <Navbar/>
        <div className="ml-[17.1875%] min-h-full w-full bg-custom-gradient">
          <Body/>
        </div>
        <Rightbar>
          <Rightbar_Section title="Logging Level">

            <div className="w-full flex flex-wrap">
              <Checkbox bgColorChecked="#ADD8E6" fillColor="#005ED7" label="DEBUG"/>
              <Checkbox bgColorChecked="#B2DFDB" fillColor="#5A8E8A" label="INFO"/>
              <Checkbox bgColorChecked="#FFE0B2" fillColor="#C29B61" label="WARNING"/>
              <Checkbox bgColorChecked="#FFCDD2" fillColor="#A47076" label="ERROR"/>
              <Checkbox bgColorChecked="#F8B2B2" fillColor="#985959" label="FATAL"/>
            </div>

          </Rightbar_Section>
          <Rightbar_Section title="TM1 Logger">
            <div className="w-full flex flex-wrap">
              {categories.map((category) => (
                  <Checkbox label={category.name} width={"50%"}/>
              ))}
            </div>
          </Rightbar_Section>
          <Rightbar_Section title="Date">
            <div className="flex w-full">
              <DateTimePicker label="Starting Datetime" width={"50%"}/>
              <DateTimePicker label="Ending Datetime" width={"50%"}/>
            </div>
          </Rightbar_Section>
          <Rightbar_Section title="Text filtering">
            <Multiple_Selector label="Contains"/>
            <Multiple_Selector label="Not Contains"/>
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
      <Content/>
    </div>
  );
};

export default Query_Logs;