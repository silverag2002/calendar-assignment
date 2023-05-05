import React, { useState, useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import CalendarHeader from "./CalendarHeader";
import Calendar from "./Calendar";
import { getMonth } from "../util";

import Heading from "./Heading";
import GlobalContext from "../context/GlobalContext";
import EventModal from "./EventModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dayjs from "dayjs";
export default function Home() {
  const [month, setMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  const { showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setMonth(getMonth(monthIndex));
  }, [monthIndex]);

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
