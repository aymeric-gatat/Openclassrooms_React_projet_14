import React from "react";
import { daysInMonth, firstDayOfMonth } from "../utils/dateUtils";

function DatePickerCalendar({ currentMonth, currentYear, selectedDate, onDayClick, onPrevMonth, onNextMonth }) {
  const generateCalendarDays = () => {
    const totalDays = daysInMonth(currentYear, currentMonth);
    const startDay = firstDayOfMonth(currentYear, currentMonth);
    const calendarDays = Array(startDay).fill(null);

    for (let day = 1; day <= totalDays; day++) {
      calendarDays.push(day);
    }

    return calendarDays;
  };

  const calendarDays = generateCalendarDays();

  const isSelectedDay = (day) => {
    return day && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;
  };

  return (
    <div style={styles.calendarContainer}>
      <div style={styles.navBar}>
        <button onClick={onPrevMonth} style={styles.navButton}>
          &lt;
        </button>
        <span style={styles.navText}>
          {currentYear} - {currentMonth + 1}
        </span>
        <button onClick={onNextMonth} style={styles.navButton}>
          &gt;
        </button>
      </div>
      <div style={styles.daysHeader}>
        {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map((dayName) => (
          <div key={dayName} style={styles.dayHeaderCell}>
            {dayName}
          </div>
        ))}
      </div>
      <div style={styles.daysGrid}>
        {calendarDays.map((day, index) => (
          <div
            key={index}
            style={{
              ...styles.dayCell,
              backgroundColor: isSelectedDay(day) ? "#eee" : "white",
              cursor: day ? "pointer" : "default",
            }}
            onClick={() => day && onDayClick(day)}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  calendarContainer: {
    display: "inline-block",
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
  },
  navButton: {
    cursor: "pointer",
  },
  navText: {
    fontWeight: "bold",
  },
  daysHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 30px)",
    textAlign: "center",
    marginBottom: "4px",
  },
  dayHeaderCell: {
    fontWeight: "bold",
  },
  daysGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 30px)",
    gap: "2px",
    textAlign: "center",
  },
  dayCell: {
    height: "30px",
    lineHeight: "30px",
  },
};

export default DatePickerCalendar;
