import React, { useReducer } from "react";
import ReservationsForm from "./ReservationsForm";
import { fetchAPI, submitAPI } from "../api.js";
import { useNavigate } from "react-router-dom";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const date = new Date(action.payload);
      const newTimes = fetchAPI(date);
      console.log("updateTimes reducer new times", newTimes);
      return newTimes.length ? newTimes : [];
    }
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const date = new Date();
  const initialTimes = fetchAPI(date);
  console.log("initializeTimes", fetchAPI(date));
  return initialTimes.length ? initialTimes : [];
};

function Reservations() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    submitAPI(formData);
    navigate("/confirmed");
  };

  return (
    <div
      style={{
        backgroundColor: "#F4CE14",
        paddingBottom: "2rem",
        paddingTop: "2rem",
      }}
    >
      <ReservationsForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default Reservations;
