import { initializeTimes, updateTimes } from "./components/Reservations";
import { fetchAPI } from "./api";

test("initializeTimes should return an array of strings with valid time slots", () => {
  const expectedTimes = fetchAPI(new Date());
  expect(initializeTimes()).toEqual(expectedTimes);
});

describe("updateTimes", () => {
  it("should return the same state value when given an unknown action type", () => {
    const state = ["11:00 AM", "11:30 AM"];
    const action = { type: "SOME_ACTION" };
    expect(updateTimes(state, action)).toEqual(state);
  });
});
