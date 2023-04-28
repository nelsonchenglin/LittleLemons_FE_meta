import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import Order from "./components/Order";
import Signup from "./components/Signup";
import Login from "./components/Login";

function URLPaths() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/order-online" element={<Order />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default URLPaths;
