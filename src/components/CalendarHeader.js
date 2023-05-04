import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handlePreviousMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleReset() {
    setMonthIndex(dayjs().month());
  }

  return (
    <header className="p-4  flex items-center justify-between bg-sky-700">
      <img
        class="w-48"
        src="https://d34piorrop57r.cloudfront.net/frontend/assets/images/logo-white@2x-de2a63f37a89a3e1e51b486d3170bf3c-v1.png"
        alt="simple practice log"
      />
    </header>
  );
}
