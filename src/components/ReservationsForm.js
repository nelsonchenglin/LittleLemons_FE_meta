import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";

function ReservationsForm({ availableTimes = [], dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      date,
      time,
      numGuests,
      occasion,
    });
    alert(
      `Thank you for your reservation, ${name}. We look forward to your visit!`
    );
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", date: e.target.value });
  };

  return (
    <Box maxWidth="500px" margin="auto" height="100vh">
      <Text fontSize="xl" fontWeight="bold" marginBottom="1rem">
        Reservation Form
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            border="0px solid black"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </FormControl>
        <FormControl isRequired marginTop="1rem">
          <FormLabel htmlFor="time">Time</FormLabel>
          <Select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Select>
          <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
            Reservations are only available from 11:00 AM to 9:00 PM.
          </p>
        </FormControl>
        <FormControl isRequired marginTop="1rem">
          <FormLabel htmlFor="numGuests">Number of Guests</FormLabel>
          <Select
            id="numGuests"
            value={numGuests}
            onChange={(event) => setNumGuests(event.target.value)}
          >
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5">5 guests</option>
            <option value="6">6 guests</option>
            <option value="7">7 guests</option>
            <option value="8">8 guests</option>
            <option value="9">9 guests</option>
            <option value="10">10 guests</option>
          </Select>
          <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
            For parties larger than 10 please call us!
          </p>
        </FormControl>
        <FormControl marginTop="1rem">
          <FormLabel htmlFor="occasion">Occasion (optional)</FormLabel>
          <Textarea
            id="occasion"
            placeholder="Enter the occasion (e.g. birthday, anniversary)"
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
          />
        </FormControl>
        <Button type="submit" marginTop="1rem" backgroundColor="#ee9972">
          Submit
        </Button>
      </form>
    </Box>
  );
}

// ReservationsForm.propTypes = {
//   availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default ReservationsForm;
