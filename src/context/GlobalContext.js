import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dateSelected: "",
  setDateSelected: () => {},
  savedEvents: [],
  setSavedEvents: () => {},
});

export default GlobalContext;
