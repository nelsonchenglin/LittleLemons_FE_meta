import React, { useReducer } from "react";
import ReservationsForm from "./ReservationsForm";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes();
    default:
      return state;
  }
};

export const initializeTimes = () => [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
];
function Reservations() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div
      style={{
        backgroundColor: "#F4CE14",
        paddingBottom: "2rem",
        paddingTop: "2rem",
      }}
    >
      <ReservationsForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Reservations;
