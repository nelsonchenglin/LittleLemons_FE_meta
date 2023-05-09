import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import Chefs from "../assets/chefs.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box backgroundColor="#FBDABB" height="100vh">
      <Container
        paddingTop="1rem"
        maxW={{ base: "100%", md: "container.xl" }}
        px={4}
      >
        <Box display={{ md: "flex" }}>
          <Box flex={{ md: 1 }} mr={{ md: 4 }} mb={{ base: 4, md: 0 }}>
            <Heading as="h1" size="xl" mb={4} borderBottom={"1px solid black"}>
              About Little Lemon
            </Heading>
            <Text fontSize="xl">
              Little Lemon is a Mediterranean restaurant that serves authentic
              dishes made with fresh ingredients. Our menu features a variety of
              appetizers, salads, entrees, and desserts that will take you on a
              culinary journey through the Mediterranean.
            </Text>
            <Text fontSize="xl" mt={4}>
              We believe that food should be both delicious and nutritious, and
              we strive to use only the best ingredients in our dishes. Our
              talented chefs have years of experience creating flavorful meals
              that are sure to satisfy any palate.
            </Text>
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
        &nbsp;
        <Link to="/contact-us">
          <Heading
            as="h1"
            size="xl"
            mb={4}
            color="blue"
            textDecoration="underline"
          >
            Contact us
          </Heading>
        </Link>
      </Container>
    </Box>
  );
};

export default About;
