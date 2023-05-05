import React, { useState, useEffect } from "react";
import Date from "./Date";
import dayjs from "dayjs";
export default function Calendar({ month }) {
  return (
    <React.Fragment>
      <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
        {month.map((row, ind) => (
          <React.Fragment key={ind}>
            {row.map((day, index) => (
              <Date day={day} key={index} rowIndex={ind} />
            ))}
          </React.Fragment>
        ))}
        {/* </div> */}
      </div>
    </React.Fragment>
  );
  // <div class="w-screen">
  //   <div class="m-5 py-0 ">
  {
    /* <div class="flex items-center">
          <button className="border rounded py-1 px-3 mr-3">Today</button>
        </div>
        <button>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </button> */
  }
  {
    /* <button>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </button> */
  }
  {
    /* <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2> */
  }
  //   </div>
  //   <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
  //     {month.map((row, ind) => (
  //       <React.Fragment key={ind}>
  //         {row.map((day, index) => (
  //           <Date day={day} key={index} rowIndex={ind} />
  //         ))}
  //       </React.Fragment>
  //     ))}
  //   </div>
  // </div>
}
