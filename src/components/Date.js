import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function Date({ day, rowIndex }) {
  console.log("in Date component and date value received", day);
  function designPresentDay() {
    return dayjs().format("DD-MM-YYYY") == day.format("DD-MM-YYYY")
      ? "bg-blue-600 text-white rounded-full w-8"
      : null;
  }
  return (
    <div class="border border-gray-200 flex flex-col">
      <header class="flex flex-col items-center">
        {rowIndex == 0 ? (
          <p className="txt-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        ) : null}
        <p class={`txt-sm p-1 my-1 text-center ${designPresentDay()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}
