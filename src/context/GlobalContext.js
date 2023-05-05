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
  //   totalClients: ["Brad Pitt", "Adam Cohen", "Angela Simpson"],
  //   setTotalClients: () => {},
});

export default GlobalContext;
