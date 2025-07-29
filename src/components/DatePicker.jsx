import React, { useState } from "react";
import { formatDate, parseDateString } from "../utils/dateUtils";
import DatePickerCalendar from "./DatePickerCalendar";

function DatePicker({ onDateChange, initialDate, label, id, name }) {
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());
  const [inputValue, setInputValue] = useState(formatDate(selectedDate));
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const [isOpen, setIsOpen] = useState(false);

  const goToPreviousMonth = (e) => {
    e.preventDefault();
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 0 ? 11 : prevMonth - 1;
      if (prevMonth === 0) {
        setCurrentYear(currentYear - 1);
      }
      return newMonth;
    });
  };

  const goToNextMonth = (e) => {
    e.preventDefault();
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 11 ? 0 : prevMonth + 1;
      if (prevMonth === 11) {
        setCurrentYear(currentYear + 1);
      }
      return newMonth;
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const parsedDate = parseDateString(inputValue);
    if (parsedDate) {
      setSelectedDate(parsedDate);
      setCurrentMonth(parsedDate.getMonth());
      setCurrentYear(parsedDate.getFullYear());
      if (onDateChange) {
        onDateChange({ target: { name, value: formatDate(parsedDate) } });
      }
    } else {
      setInputValue(formatDate(selectedDate));
    }
  };

  const handleDayClick = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setInputValue(formatDate(newDate));
    setIsOpen(false);
    if (onDateChange) {
      onDateChange({ target: { name, value: formatDate(newDate) } });
    }
  };

  const toggleCalendar = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          type="text"
          id={id}
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="DD/MM/YYYY"
          style={{ padding: "4px", width: "120px", boxSizing: "border-box" }}
        />
        <button onClick={toggleCalendar} style={{ marginLeft: "5px", padding: "4px 8px" }}>
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
          onClick={(e) => e.stopPropagation()}
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
    </div>
  );
}

export default DatePicker;
