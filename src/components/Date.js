import React, { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export default function Date({ day, rowIndex }) {
  const [refreshPage, setRefreshPage] = useState(false);
  const { setShowEventModal, setDateSelected, showEventModal } =
    useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const allSavedEvent = JSON.parse(localStorage.getItem("savedEvents"));

    if (allSavedEvent?.length > 0) {
      const events = allSavedEvent.filter((eve) => {
        if (eve.selectedDate == day.format("YYYY-MM-DD").toString()) {
          return eve;
        }
      });

      setDayEvents(events);
    }
  }, [showEventModal, day]);
  function designPresentDay() {
    return dayjs().format("DD-MM-YYYY") == day.format("DD-MM-YYYY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : null;
  }
  return (
    <div
      class="border border-gray-200 flex flex-col"
      onClick={() => {
        setShowEventModal(true);
        setDateSelected(day);
      }}
    >
      <header class="flex flex-col items-center">
        {rowIndex == 0 ? (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        ) : null}
        <p class={`text-sm p-1 my-1 text-center ${designPresentDay()}`}>
          {day.format("DD")}
        </p>
        <div>
          {dayEvents.length
            ? dayEvents.map((eve, index) => {
                return (
                  <div
                    key={index}
                    className="bg-purple-400 text-black p-1 mr-3 text-xs rounded mb-1 flex flex-row justify-between"
                  >
                    <span className="px-2">{eve.selectedTime}</span>
                    <span className="px-2">{eve.client}</span>
                  </div>
                );
              })
            : null}
        </div>
      </header>
    </div>
  );
}
