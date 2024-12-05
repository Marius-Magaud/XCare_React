import {useState} from "react";

const Checkbox = ({
                    bgColorChecked = "#E6EDFD",
                    bgColorUnchecked = "white",
                    fillColor = "#1973EE",
                    label = "DEBUG",
                    width = "100%"
                  }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`flex select-none h-[33px] w-[${width}]`}>
      <div
        onClick={handleCheckboxClick}
        className={`h-[23px] w-[23px] border-[1px] rounded-[3px] ml-[11px] mt-[6px] border-blue  cursor-pointer flex items-center  justify-center`}
        style={{
          backgroundColor: isChecked ? bgColorChecked : bgColorUnchecked,
        }}
      >
        {isChecked && (
          <div
            style={{
              width: '15px',
              height: '13px',
              backgroundColor: fillColor,
              mask: 'url(/static/rightbar/Vector.svg)',
              WebkitMask: 'url(/static/rightbar/Vector.svg)',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            }}
          ></div>
        )}
      </div>
      <div className="ml-[6px] mt-[6px] font-poppins font-regular text-[17px]">{label}</div>
    </div>
  );
};

export default Checkbox;