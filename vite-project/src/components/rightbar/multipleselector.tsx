import { useEffect, useState } from "react";

const Multiple_Selector = ({ label = "", store = null, filterCategory = null }) => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  // Safely access storeItems and updateStoreItems only if store and filterCategory are provided
  const storeItems = store?.[filterCategory] || []; // Fallback to an empty array if store or filterCategory is missing
  const updateStoreItems = store?.[`set${filterCategory}`] || null;

  // Sync the local state with the store if store and filterCategory exist
  useEffect(() => {
    if (store && filterCategory) {
      setItems(storeItems);
    }
  }, [storeItems, store, filterCategory]);

  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newItems = [...items, inputValue.trim()];
      if (store && filterCategory && updateStoreItems) {
        // Update the store if available
        updateStoreItems(newItems);
      }
      setItems(newItems); // Update local state regardless
      setInputValue(""); // Clear input
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    if (store && filterCategory && updateStoreItems) {
      // Update the store if available
      updateStoreItems(newItems);
    }
    setItems(newItems); // Update local state regardless
  };

  return (
    <div className="font-poppins p-[2px]">
      <div className="text-black font-poppins w-full text-left text-[17px]">
        {label}
      </div>
      <div className="text-black font-poppins w-full text-left flex gap-[7px] pb-[10px]">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a word"
          className="w-[170px] h-[25px] bg-white border-[1px] border-[#ECECEC] rounded-[3px] text-center font-poppins text-[14px]"
        />
        <div
          className="w-[25px] h-[25px] bg-[#B2D8B2] rounded-md overflow-hidden border hover:border-black"
          onClick={handleAddItem}
        >
          <img
            src="/static/rightbar/PlusAdd.svg"
            className="mt-[4px] ml-[4px] w-[15px] h-[15px] cursor-pointer"
            alt="add"
          />
        </div>
      </div>
      {items.map((item, index) => (
        <div className="h-[35px] w-full flex pt-[5px] gap-[6px]" key={index}>
          <div
            className="w-[25px] h-[25px] bg-[#FFCDD2] rounded-md overflow-hidden border ml-[11px]"
            onClick={() => handleRemoveItem(index)}
          >
            <img
              src="/static/rightbar/CrossRemove.svg"
              className="mt-[4px] ml-[4px] w-[15px] h-[15px] cursor-pointer"
              alt="remove"
            />
          </div>
          <div className="text-black font-poppins text-left text-[16px]">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Multiple_Selector;
