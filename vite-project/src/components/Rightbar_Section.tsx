import React, { useState } from "react";

const Rightbar_Section = ({ children, title = "Default Title" }) => {
  const [isOpen, setIsOpen] = useState(false); // Closed by default

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-col">
      {/* Title */}
      <div
        className="flex h-[50px] cursor-pointer items-center"
        onClick={toggleOpen} // Toggle state on click
      >
        <div
          className={`w-[15px] h-[15px] ml-[8px] transition-transform duration-300 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        >
          <img src="/static/rightbar/Tick.svg" alt="Toggle" />
        </div>
        <div className="ml-[7px] text-black font-poppins font-semibold text-[20px]">
          {title}
        </div>
      </div>

      {/* Collapsible Section */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="text-black">{children}</div>
      </div>
    </div>
  );
};

export default Rightbar_Section;
