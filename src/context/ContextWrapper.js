import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [dateSelected, setDateSelected] = useState("");
  const [totalClients, setTotalClients] = useState([
    "Brad Pitt",
    "Adam Cohen",
    "Angela Simpson",
  ]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        setDateSelected,
        dateSelected,
        totalClients,
        setTotalClients,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
