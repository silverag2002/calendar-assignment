import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

export default function Heading() {
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
    <div className="flex flex-row justify-left items-center">
      <div>
        <h2 className="ml-4 text-xl font-bold px-2 ">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>
      <button>
        <span
          className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
          onClick={() => handlePreviousMonth()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <button>
        <span
          className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
          onClick={() => handleNextMonth()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
      <div class="flex items-center px-3">
        <button
          className="border font-semibold rounded py-1 px-3 mr-3 "
          onClick={() => handleReset()}
        >
          Today
        </button>
      </div>
    </div>
  );
}
