import { useState } from "react";

const Radio = ({ label = "", name = "", options = [] }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="font-poppins p-[2px]">
      <div className="text-black font-poppins w-full text-left text-[17px]">
        {label}
      </div>

      <div className="text-black font-poppins w-full text-left flex-col pb-[4px] pl-[7px]">
        {options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center gap-[5px] w-full pb-[4px]`}
          >
            <input
              type="radio"
              name={name}
              value={option}
              onChange={() => handleSelection(option)}
              className="appearance-none w-[21px] h-[21px] border-[2px] border-[#ECECEC] rounded-full bg-white checked:bg-[#E6EDFD] flex items-center justify-center"
            />
            <div className="text-[17px] font-poppins mt-[2px]">{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
