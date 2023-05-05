import React, { useState, useContext, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

import Sidebar from "./components/Sidebar";

import Calendar from "./components/Calendar";
import Clients from "./components/Clients";
import Meetings from "./components/Meetings";
import Heading from "./components/Heading";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Home from "./components/Home";
import ContextWrapper from "./context/ContextWrapper";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <ContextWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetings" elementt={<Meetings />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </ContextWrapper>
  );
}

export default App;
