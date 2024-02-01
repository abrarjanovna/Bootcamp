import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Calendar = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Datepicker
      inputClassName="w-[300px] focus:outline-none border rounded-lg p-2"
      placeholder="Сегодня"
      showShortcuts={true}
      showFooter={true}
      value={value}
      onChange={handleValueChange}
    />
  );
};
export default Calendar;
