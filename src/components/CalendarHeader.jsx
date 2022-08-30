import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

import dayjs from "dayjs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";

export default function CalendarHeader() {

  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-4 flex items-center bg-gray-900 gap-3">
      <button
        onClick={handleReset}
        className="border-2 rounded py-2 px-4 mr-5 text-white "
      >
        Сегодня
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-white font-bold">
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-white font-bold">
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </span>
      </button>
      <h1 className="text-white text-xl font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h1>
    </header>
  );
}
