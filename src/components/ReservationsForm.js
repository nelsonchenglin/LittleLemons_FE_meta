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

function ReservationsForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numGuests, setNumGuests] = useState("1");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      Name: name,
      Email: email,
      Date: date,
      Time: time,
      "Reservation Size": numGuests,
      Occasion: occasion,
    };
    console.log(formData);
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    console.log("handledatechange", e.target.value);
    setDate(e.target.value);
    setTime("");
    dispatch({
      type: "UPDATE_TIMES",
      payload: e.target.value,
    });
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
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            value={email}
            pattern="^\S+@\S+\.\S+$"
            onChange={(e) => setEmail(e.target.value)}
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
        <p>We only offer reservations for dinner hours!</p>
        <FormControl isRequired marginTop="1rem">
          <FormLabel htmlFor="time">Time</FormLabel>
          <Select
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">- Choose Reservation Time -</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Select>
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
