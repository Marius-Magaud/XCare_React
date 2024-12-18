import { useState, useEffect } from "react";

const Checkbox = ({
  bgColorChecked = "#E6EDFD",
  bgColorUnchecked = "white",
  fillColor = "#1973EE",
  label = "DEBUG",
  width = "100%",
  store = null, // Optional store
  filterCategory = null // Optional filterCategory
}) => {
  const [isChecked, setIsChecked] = useState(true);

  // Safely access filter and updateFilter only if store and filterCategory are provided
  const filter = store?.[filterCategory] || [];
  const updateFilter = store?.[`set${filterCategory}`] || null;

  // Sync the checkbox state with the store if store and filterCategory exist
  useEffect(() => {
    if (store && filterCategory) {
      setIsChecked(filter.includes(label));
    }
  }, [filter, label, store, filterCategory]);

  const handleCheckboxClick = () => {
    if (store && filterCategory && updateFilter) {
      // Update the store if provided
      if (isChecked) {
        updateFilter((prev) => prev.filter((item) => item !== label));
      } else {
        updateFilter((prev) => [...prev, label]);
      }
    }
    // Update local state regardless of whether store is provided
    setIsChecked(!isChecked);
  };

  return (
    <div className={`flex select-none h-[33px] w-[${width}]`}>
      <div
        onClick={handleCheckboxClick}
        className={`h-[23px] w-[23px] border-[1px] rounded-[3px] ml-[11px] mt-[6px] border-blue cursor-pointer flex items-center justify-center`}
        style={{
          backgroundColor: isChecked ? bgColorChecked : bgColorUnchecked,
        }}
      >
        {isChecked && (
          <div
            style={{
              width: "15px",
              height: "13px",
              backgroundColor: fillColor,
              mask: "url(/static/rightbar/Vector.svg)",
              WebkitMask: "url(/static/rightbar/Vector.svg)",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          ></div>
        )}
      </div>
      <div className="ml-[6px] mt-[6px] font-poppins font-regular text-[17px]">
        {label}
      </div>
    </div>
  );
};

export default Checkbox;
