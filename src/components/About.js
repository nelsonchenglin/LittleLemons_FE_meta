import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import Chefs from "../assets/chefs.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box backgroundColor="#FBDABB" minHeight="100vh" pb={8}>
      <Container
        paddingTop="1rem"
        maxW={{ base: "100%", md: "container.xl" }}
        px={4}
      >
        <Box display={{ md: "flex" }}>
          <Box flex={{ md: 1 }} mr={{ md: 4 }} mb={{ base: 4, md: 0 }} pr={4}>
            <Heading as="h1" size="xl" mb={4} borderBottom={"1px solid black"}>
              About Little Lemon
            </Heading>
            <Text fontSize="xl">
              Little Lemon is a charming neighborhood bistro that servers simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally sourced menu with daily specials
            </Text>
            <Text fontSize="xl" mt={4}>
              We believe that food should be both delicious and nutritious, and
              we strive to use only the best ingredients in our dishes. Our
              talented chefs have years of experience creating flavorful meals
              that are sure to satisfy any palate.
            </Text>
            <Box mt={4}>
              <Link to="/contact-us">
                <Heading
                  as="h1"
                  size="lg"
                  mb={4}
                  color="blue"
                  textDecoration="underline"
                >
                  Contact us
                </Heading>
              </Link>
            </Box>
          </Box>
          <Box flex={{ md: 1 }}>
            <Image
              src={Chefs}
              alt="Little Lemon Chefs"
              borderRadius="lg"
              w="100%"
              h={{ base: "auto", md: "100%" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
