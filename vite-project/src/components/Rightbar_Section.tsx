import React, { useState, useRef } from "react";

const Rightbar_Section = ({ children, title = "Default Title"}) => {
  const [isOpen, setIsOpen] = useState(false); // Closed by default
  const contentRef = useRef(null); // Reference for the collapsible content

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
        className="text-black"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          transition: "max-height 0.3s ease-in-out",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Rightbar_Section;
