import { useState } from "react";

const ClassicSelector = ({ label = "", options = [] }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClearSelection = () => {
    setSelectedValue("");
  };

  return (
    <div className="font-poppins p-[2px]">
      <div className="text-black font-poppins w-full text-left text-[17px]">
        {label}
      </div>

      <div className="text-black font-poppins w-full text-left flex gap-[7px] pb-[10px]">
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="w-[200px] h-[25px] bg-white border-[1px] border-[#ECECEC] rounded-[3px] text-center font-poppins text-[14px]"
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {selectedValue && (
          <div
            className="w-[25px] h-[25px] bg-[#FFCDD2] rounded-md overflow-hidden border cursor-pointer flex justify-center items-center"
            onClick={handleClearSelection}
          >
            <img
              src="/static/rightbar/CrossRemove.svg"
              className="w-[15px] h-[15px]"
              alt="cross"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassicSelector;
