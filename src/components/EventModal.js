import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function initialEvents() {
  const storedEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
  return parsedEvents;
}

export default function EventModal() {
  const { setShowEventModal, dateSelected } = useContext(GlobalContext);

  const [services, setServices] = useState("Not Selected");
  const [addNewClient, setAddNewClient] = useState(false);
  const [newClient, setNewClient] = useState("");
  const [client, setClient] = useState("Not Selected");
  const [selectedDate, setSelectedDateInEventModal] = useState(
    dateSelected.format("YYYY-MM-DD")
  );
  const [totalClients, setTotalClients] = useState([]);

  const date = new Date();
  const [selectedTime, setSelectedTime] = useState(date.toLocaleTimeString());
  const [duration, setDuration] = useState("60");
  const [fees, setFees] = useState("100");

  function handleChangeNewClient(event) {
    setNewClient(event.target.value);
  }

  useEffect(() => {
    const clientInfo = JSON.parse(localStorage.getItem("Total Clients"));
    if (clientInfo?.length) {
      setTotalClients(clientInfo);
    }
  }, []);
  function handleAddNewClient(event) {
    event.preventDefault();
    const newList = [...totalClients, newClient];
    setTotalClients(newList);
    localStorage.setItem("Total Clients", JSON.stringify(newList));
    setAddNewClient(false);
  }

  const options = ["Appointment", "Meeting", "Consultation"];

  const defaultOption = options[0];
  function handleChangeServices(event) {
    setClient(event.value);
  }
  function handleChange(event) {
    setServices(event.value);
  }
  function handleChangeTime(event) {
    setSelectedTime(event.target.value);
  }
  function handleChangeDate(event) {
    setSelectedDateInEventModal(event.target.value);
  }
  function handleChangeFees(event) {
    setFees(event.target.value);
  }
  function handleChangeDuration(event) {
    setDuration(event.target.value);
  }

  function handleNewEntry(event) {
    event.preventDefault();
    setAddNewClient(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      duration,
      fees,
      selectedDate,
      selectedTime,
      services,
      client,
      id: Date.now(),
    };
    savedEvents.push(data);

    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    // let check = 0;
    // for (let i = 0; i < totalClients.length; i++) {
    //   if (totalClients[i] === client) {
    //     check += 1;
    //   }
    // }
    // if (check === 0) {
    //   const newOptions = [...options, client];
    //   setTotalClients(newOptions);
    // }
    // console.log("Total clients", totalClients);
    setShowEventModal(false);
  }

  const [savedEvents, setSavedEvents] = useState(initialEvents());

  //   useEffect(() => {

  //   }, [savedEvents]);

  return (
    <div className=" md:h-3/5 md:w-full fixed left-0 top-0 flex justify-center items">
      <form
        className="bg-white rounded-lg shadow-2xl md:w-1/4 h-96 md:h-full w-96"
        onSubmit={(event) => handleSubmit(event)}
      >
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <h1>New Appointment</h1>
          <h1>{dateSelected.format("dddd , MMMM DD")}</h1>
        </header>
        <div className="flex flex-row justify-between items-center px-4 py-8">
          <div className="w-3/5 px-1 ">
            <Dropdown
              options={totalClients}
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="Select an option"
            />
          </div>
          <div>
            <button
              className="font-bold bg-gray-200 px-4 py-2 rounded-md"
              onClick={(event) => handleNewEntry(event)}
            >
              +New Client
            </button>
          </div>
        </div>
        {addNewClient ? (
          <div className="flex flex-row justify-between items-center px-4 ">
            <div className="w-3/5 px-1 ">
              <input
                type="text"
                value={newClient}
                onChange={(eve) => handleChangeNewClient(eve)}
                className="border-2 border-gray-200 p-1 "
                placeholder="Add Client"
              />
            </div>
            <div>
              <button
                className="font-bold bg-gray-200 px-4 py-2 rounded-md"
                onClick={(event) => handleAddNewClient(event)}
              >
                Add
              </button>
            </div>
          </div>
        ) : null}
        <div className="flex flex-row justify-between items-center px-3 py-2">
          <div className="pl-2 ">
            <input
              type="date"
              value={dateSelected.format("YYYY-MM-DD")}
              className="border-2 border-gray-200 p-1 w-32"
              onChange={(event) => {
                handleChangeDate(event);
              }}
            />
          </div>
          <div>
            <input
              type="time"
              value={selectedTime}
              onChange={(event) => {
                handleChangeTime(event);
              }}
              className="border-2 border-gray-200 p-1 w-36"
            />
          </div>
          <div className="flex flex-row items-center">
            <input
              type="number"
              pattern="[0-9]*"
              onChange={(event) => {
                handleChangeDuration(event);
              }}
              value={duration}
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
                onChange={(event) => {
                  handleChangeFees(event);
                }}
                value={fees}
                className="border-2 border-gray-200 p-1 w-16 "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-4 py-2">
          <span className="px-1"> Total Amount</span>
          <span> ${fees}</span>
        </div>
        <div className="flex flex-row justify-center items-center px-4 py-2">
          <button
            className="cursor-pointer  bg-sky-600 mx-2 px-4 py-2 rounded-md   text-white"
            type="submit"
          >
            Done
          </button>
          <button
            className="cursor-pointer  bg-gray-100 px-4 mx-2 py-2  text-black rounded-md"
            onClick={() => {
              setShowEventModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
