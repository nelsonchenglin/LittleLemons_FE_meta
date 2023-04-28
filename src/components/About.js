import React from "react";
import { Box } from "@chakra-ui/react";

function About() {
  return (
    <Box bg="gray.100" p={4}>
      <Box bg="white" borderRadius="md" p={4} boxShadow="md">
        <Box fontSize="xl" fontWeight="bold">
          Welcome to my website!
        </Box>
        <Box mt={4}>
          <p>
            Thank you for visiting. Here you can find information about our
            products and services.
          </p>
        </Box>
      </Box>
      <Box bg="white" borderRadius="md" p={4} mt={4} boxShadow="md">
        <Box fontSize="xl" fontWeight="bold">
          Our Products
        </Box>
        <Box mt={4}>
          <p>Here are some of our top-selling products:</p>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
