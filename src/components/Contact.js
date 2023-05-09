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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
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
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              borderColor="black"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
          </FormControl>
          <FormControl id="formEmail" isRequired mt={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              borderColor="black"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="message" isRequired mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor="black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
