import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Reservations from "./components/Reservations";
import Menu from "./components/Menu";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Contact from "./components/Contact";

function URLPaths() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}
export default URLPaths;
