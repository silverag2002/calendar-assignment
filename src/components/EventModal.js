import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function EventModal() {
  const { setShowEventModal } = useContext(GlobalContext);
  const [services, setServices] = useState("");
  const [client, setClient] = useState("");
   const [timeAndDuration,setTimeAndDuration]=useState({
    date:
   })
  const date = new Date();
  const defaultTime = date.toLocaleTimeString();
  console.log("Default time ", defaultTime);

  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  function handleChangeServices(event) {
    console.log("change", event);
    setClient(event.value);
  }
  function handleChange(event) {
    console.log("change", event);
    setServices(event.value);
  }
  return (
    <div className=" md:h-3/5 md:w-full fixed left-0 top-0 flex justify-center items">
      <form className="bg-white rounded-lg shadow-2xl md:w-1/4 h-96 w-96">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <h1>New Appointment</h1>
        </header>
        <div className="flex flex-row justify-between items-center px-4 py-8">
          <div className="w-3/5 px-1 ">
            <Dropdown
              options={options}
              onChange={(event) => {
                handleChange(event);
              }}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
          <div>
            <button className="font-bold bg-gray-200 px-4 py-2 rounded-md">
              +New Client
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-3 py-2">
          <div className="pl-2 ">
            <input type="date" className="border-2 border-gray-200 p-1 w-32" />
          </div>
          <div>
            <input
              type="time"
              value={defaultTime}
              className="border-2 border-gray-200 p-1 w-36"
            />
          </div>
          <div className="flex flex-row items-center">
            <input
              type="number"
              pattern="[0-9]*"
              className="border-2 border-gray-200 p-1 w-10 "
            />
            <span className="pl-1">min</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-4 py-2">
          <div className="w-4/5 px-1 ">
            <span>Services</span>
            <Dropdown
              options={options}
              onChange={(event) => {
                handleChangeServices(event);
              }}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
          <div className="w-1/5 px-1 ">
            <span className="px-3">Fee</span>
            <div className="flex flex-row items-center">
              $
              <input
                type="number"
                pattern="[0-9]*"
                value=""
                className="border-2 border-gray-200 p-1 w-16 "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-4 py-2">
          <span className="px-1"> Total Amount</span>
          <span> $100</span>
        </div>
      </form>
    </div>
  );
}
