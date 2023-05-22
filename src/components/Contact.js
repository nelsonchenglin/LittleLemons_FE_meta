import {
  Box,
  Container,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const Contact = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      setError("Message field cannot be empty");
      return;
    }
    alert("Thank you for contacting us, we will get back to you soon!");
    setFormName("");
    setFormEmail("");
    setMessage("");
  };

  return (
    <Box backgroundColor="#FBDABB" height="100vh">
      <Container
        paddingTop="3rem"
        maxW={{ base: "100%", md: "container.xl" }}
        px={4}
      >
        <Heading as="h1" size="xl" mb={4} borderBottom={"1px solid black"}>
          Contact Us
        </Heading>
        <Text fontSize="xl" mb={4}>
          We would love to hear from you! Please fill out the form below and we
          will get back to you as soon as possible.
        </Text>
        <form
          style={{ maxWidth: "600px", margin: "auto" }}
          onSubmit={handleSubmit}
        >
          <FormControl id="formName" isRequired>
            <FormLabel htmlFor="formName">Name</FormLabel>
            <Input
              type="text"
              borderColor="black"
              value={formName}
              pattern="^[A-za-z\s]+$"
              onChange={(e) => setFormName(e.target.value)}
              title="Alphabetical characters and spaces only."
              aria-required="true"
            />
          </FormControl>
          <FormControl id="formEmail" isRequired mt={4}>
            <FormLabel htmlFor="formEmail">Email address</FormLabel>
            <Input
              type="email"
              borderColor="black"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              aria-required="true"
            />
          </FormControl>
          <FormControl id="message" isRequired mt={4}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              borderColor="black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-required="true"
            />
            {error && (
              <Text color="red" mt={1}>
                {error}
              </Text>
            )}
          </FormControl>
          <Button type="submit" mt={4} colorScheme="blue">
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
