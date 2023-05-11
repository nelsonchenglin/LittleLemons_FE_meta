import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";

const today = new Date();
today.setDate(today.getDate() + 1);

function ReservationsForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState(today.toISOString().slice(0, 10));
  const [time, setTime] = useState("");
  const [numGuests, setNumGuests] = useState("1");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateError, setDateError] = useState("");

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
    const inputDate = new Date(e.target.value);
    const today = new Date();
    if (inputDate <= today) {
      setDateError("Reservations can only be made for future dates.");
    } else {
      setDateError("");
    }

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
      <Text fontSize="s" fontWeight="bold" fontStyle="italic">
        All fields with <span style={{ color: "red" }}>* </span>are required
      </Text>
      &nbsp;
      <form onSubmit={handleSubmit}>
        <FormControl isRequired isInvalid={!name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            borderColor="black"
            type="name"
            id="name"
            value={name}
            pattern="^[A-za-z\s]+$"
            onChange={(e) => setName(e.target.value)}
            title="Alphabetical characters and spaces only."
            aria-invalid={!name}
          />
        </FormControl>
        <FormControl isRequired isInvalid={!email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            borderColor="black"
            type="email"
            id="email"
            value={email}
            pattern="^\S+@\S+\.\S+$"
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!email}
          />
        </FormControl>
        <FormControl isRequired isInvalid={dateError}>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            borderColor="black"
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            aria-invalid={dateError}
          />
          <FormErrorMessage style={{ fontWeight: "bold", fontStyle: "italic" }}>
            {dateError}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired marginTop="1rem" isInvalid={!time}>
          <FormLabel htmlFor="time">Time</FormLabel>
          <Select
            borderColor="black"
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-invalid={!time}
          >
            <option value="">- Choose Reservation Time -</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Select>
          <FormHelperText style={{ fontWeight: "bold", fontStyle: "italic" }}>
            We are currently only offering reservations for dinner.
          </FormHelperText>
        </FormControl>
        <FormControl isRequired marginTop="1rem">
          <FormLabel htmlFor="numGuests">Party Size</FormLabel>
          <Select
            id="numGuests"
            value={numGuests}
            borderColor="black"
            onChange={(event) => setNumGuests(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </Select>
          <FormHelperText style={{ fontWeight: "bold", fontStyle: "italic" }}>
            For parties larger than 10 please call us.
          </FormHelperText>
        </FormControl>
        <FormControl marginTop="1rem">
          <FormLabel htmlFor="occasion">Occasion (optional)</FormLabel>
          <Textarea
            borderColor="black"
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
