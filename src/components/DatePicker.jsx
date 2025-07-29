import React, { useState } from "react";
import { formatDate, parseDateString } from "../utils/dateUtils";
import DatePickerCalendar from "./DatePickerCalendar";

function DatePicker({ onDateChange, initialDate, label, id, name }) {
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());
  const [inputValue, setInputValue] = useState(selectedDate && "");
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const [isOpen, setIsOpen] = useState(false);

  const handleDayClick = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setInputValue(newDate);
    setIsOpen(false);

    const syntheticEvent = {
      target: {
        name: name,
        value: formatDate(newDate),
      },
    };

    if (onDateChange) {
      onDateChange(syntheticEvent);
    }
  };

  const goToPreviousMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const goToNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleInputBlur = () => {
    const parsed = parseDateString(inputValue);
    if (parsed) {
      setSelectedDate(parsed);
      setCurrentMonth(parsed.getMonth());
      setCurrentYear(parsed.getFullYear());
      if (onDateChange) {
        onDateChange(parsed);
      }
    } else {
      if (selectedDate) {
        setInputValue(formatDate(selectedDate));
      } else {
        setInputValue("");
      }
    }
  };

  return (
    <>
      <label htmlFor={id && ""}>{label}</label>
      <div>
        <input
          type="text"
          id={id}
          name={name}
          value={formatDate(inputValue)}
          onChange={onDateChange}
          onBlur={handleInputBlur}
          placeholder="DD/MM/YYYY"
          style={{ padding: "4px", width: "120px", boxSizing: "border-box" }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          style={{ marginLeft: "5px", padding: "4px 8px" }}
        >
          Ouvrir
        </button>
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            zIndex: 999,
            marginTop: "5px",
          }}
        >
          <DatePickerCalendar
            currentMonth={currentMonth}
            currentYear={currentYear}
            selectedDate={selectedDate}
            onDayClick={handleDayClick}
            onPrevMonth={goToPreviousMonth}
            onNextMonth={goToNextMonth}
          />
        </div>
      )}
    </>
  );
}

export default DatePicker;
