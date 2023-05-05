import React, { useContext } from "react";
import TableData from "./TableData";
import Sidebar from "./Sidebar";
import CalendarHeader from "./CalendarHeader";
import GlobalContext from "../context/GlobalContext";
import MeetingData from "./MeetingData";
export default function Meetings() {
  return (
    <React.Fragment>
      <div className="h-screen min-w-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-row flex-1">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <MeetingData />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
