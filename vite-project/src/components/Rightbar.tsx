import React, { useState, useRef, useEffect } from "react";

let toggleVisibilityCallback = null;

const Rightbar = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true); // Set to true to make it open by default
  const sidebarRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  // Close the sidebar if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsVisible(false); // Close the sidebar
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  // Assign the toggle function to a global callback
  toggleVisibilityCallback = toggleVisibility;

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 right-0 h-screen w-[456px] bg-[#F7F7F8] z-50 overflow-y-auto shadow-custom transform transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex w-full h-[84px] border-b-[4px] border-[#f1f1f1]">
        <div className="ml-[20px] mt-[5px] flex h-full items-center font-poppins font-semibold text-black text-[20px]">
          Configuration Panel
        </div>
        <div className="ml-auto mr-[22px] flex h-full items-center font-poppins font-semibold text-black text-[20px]">
          <div
            className="w-[30px] h-[30px] justify-end cursor-pointer"
            onClick={toggleVisibility}
          >
            <img src="/static/header/Cross.svg" alt="Close" />
          </div>
        </div>
      </div>
      <div className=" p-[12px] flex-col flex">
        {children}
      </div>
    </div>
  );
};

// Export the toggleVisibility function
export const toggleVisibility = () => {
  if (toggleVisibilityCallback) {
    toggleVisibilityCallback();
  }
};

export default Rightbar;
