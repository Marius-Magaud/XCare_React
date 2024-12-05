import {useState} from 'react';

const Multiple_Selector = ({label = ""}) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
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
            alt="cross"
          />
        </div>
      </div>
      {items.map((item, index) => (
        <div className="h-[35px] w-full flex pt-[5px] gap-[6px]">
          <div className="w-[25px] h-[25px] bg-[#FFCDD2] rounded-md overflow-hidden border ml-[11px]">
            <img
              src="/static/rightbar/CrossRemove.svg"
              className="mt-[4px] ml-[4px] w-[15px] h-[15px] cursor-pointer"
              onClick={() => handleRemoveItem(index)}
              alt="cross"
            />
          </div>
          <div className="text-black font-poppins text-left text-[17px]">
            {item}
          </div>
        </div>

      ))}

    </div>
  );
};


export default Multiple_Selector;
