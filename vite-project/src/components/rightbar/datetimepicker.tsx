import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = ({ label = "", onDateChange, width = "100%" }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <div className={`flex-col select-none justify-start p-[2px]`} style={{ width }}>
      <div className="text-black font-poppins w-full text-left text-[17px]">
        {label}
      </div>

      <div className="text-black font-poppins w-full text-left">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="yyyy-MM-dd HH:mm:ss"
          placeholderText="Choose date and time"
          className="w-[170px] h-[25px] bg-white border-[1px] border-[#ECECEC] rounded-[3px] text-center font-poppins text-[14px] "
          popperProps={{
            modifiers: [
              {
                name: 'preventOverflow',
                options: {
                  boundary: 'viewport',
                },
              },
              {
                name: 'offset',
                options: {
                  offset: [0, 8],
                },
              },
            ],
          }}
          popperPlacement="bottom-start"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
