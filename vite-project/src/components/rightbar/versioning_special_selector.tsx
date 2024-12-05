import Checkbox from "./checkbox.tsx";

const VersioningSpecialSelector = ({ label = ""}) => {

  return (
    <div className="font-poppins p-[2px]">
      <div className="text-black font-poppins w-full text-left text-[17px]">
        {label}
      </div>

      <div className="text-black font-poppins w-full text-left flex gap-[7px] pb-[4px]">
        <Checkbox label={"Hide white space changes"}></Checkbox>
      </div>

      <div className="text-black font-light font-poppins w-full text-left flex gap-[7px] pb-[10px] ml-[12px] italic">
        <i> Interacting with individual lines or hunks will be disabled while hiding whitespaces </i>
      </div>

    </div>
  );
};

export default VersioningSpecialSelector;
