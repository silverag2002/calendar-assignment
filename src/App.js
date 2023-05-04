import React, { useState, useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMonth } from "./util";
import Sidebar from "./components/Sidebar";
import CalendarHeader from "./components/CalendarHeader";
import Calendar from "./components/Calendar";
import Heading from "./components/Heading";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

function App() {
  const [month, setMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  const { showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setMonth(getMonth(monthIndex));
  }, [monthIndex]);
  console.log("Month value in app.js", month);
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-row flex-1">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Heading />
            <Calendar month={month} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
