
import Header from "../../components/Header.tsx";
import Navbar from "../../components/Navbar.tsx";
import Item from "../../components/Item.tsx";
import Array_MailBox from "./components/AlertsMailbox.tsx";


const Alerts_mailbox = () => {
  return (
    <>
      <div className="flex w-full min-h-full">
        <Navbar/>
        <div className="ml-[17.1875%] min-h-full w-full bg-custom-gradient m">
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
          <Item title="Mailbox">
            <Array_MailBox/>
          </Item>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="flex flex-grow flex-col items-start">
      <Header title="Alerts - Mailbox" subtitle="Check what's happening with your alerts"/>
      <Content />
    </div>
  );
};

export default Alerts_mailbox;