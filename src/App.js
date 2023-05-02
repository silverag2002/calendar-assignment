import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMonth } from "./util";
import Sidebar from "./components/Sidebar";
import CalendarHeader from "./components/CalendarHeader";
import Calendar from "./components/Calendar";

function App() {
  const [month, setMonth] = useState(getMonth());
  console.log("Month value in app.js", month);
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          {/* <Sidebar /> */}
          <Calendar month={month} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
