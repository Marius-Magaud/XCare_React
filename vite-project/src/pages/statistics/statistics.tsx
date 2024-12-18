import Navbar from "../../components/Navbar.tsx";
import Header from "../../components/Header.tsx";
import Item   from "../../components/Item.tsx";
import BarChart from "../../components/charts/BarChart.tsx";
import LineChart from "../../components/charts/LineChart.tsx";


const Statistics = () => {
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
      <div className="h-[600px] w-full flex box-border gap-[20px] mb-[20px]">
        <div className="h-full w-[50%]">
          <Item title="Process List">
            <BarChart/>
          </Item>
        </div>
        <div className="h-full w-[50%]">
          <Item title="Process List">
            <LineChart/>
          </Item>
        </div>
      </div>
      <div className="h-[600px] w-full flex box-border gap-[20px]">
        <div className="h-full w-[50%]">
          <Item title="Process List">
            <BarChart/>
          </Item>
        </div>
        <div className="h-full w-[50%]">
          <Item title="Process List" >
            <BarChart/>
          </Item>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="flex flex-grow flex-col items-start">
      <Header logo="Statistics.svg"/>
      <Content/>
    </div>
  );
};

export default Statistics;