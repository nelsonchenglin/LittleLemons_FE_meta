import { render, screen } from "@testing-library/react";
import Reservations, {
  initializeTimes,
  updateTimes,
} from "./components/Reservations";

test("Renders the form and some elements", () => {
  render(<Reservations />);
  const reservationFormText = screen.getByText("Reservation Form");
  expect(reservationFormText).toBeInTheDocument();
});

test("initializeTimes should return an array of strings with valid time slots", () => {
  const expectedTimes = [
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
  expect(initializeTimes()).toEqual(expectedTimes);
});

describe("updateTimes", () => {
  it("should return the same state value when given an unknown action type", () => {
    const state = ["11:00 AM", "11:30 AM"];
    const action = { type: "SOME_UNKNOWN_ACTION" };
    expect(updateTimes(state, action)).toEqual(state);
  });
});
