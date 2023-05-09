import React from "react";
import {
  Box,
  Button,
  useTheme,
  Card,
  CardHeader,
  SimpleGrid,
  CardBody,
  CardFooter,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";

function Specials() {
  const theme = useTheme();

  const specials = [
    {
      dish: "Greek Salad",
      price: "$12.99",
      description:
        "Salad made with crispy lettuce, peppers, olives, and our house made feta cheese. Garnished with crispy garlic chips and rosemary croutons.",
      image: greekSalad,
    },
    {
      dish: "Bruchetta",
      price: "$6.99",
      description:
        "Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta,
    },
    {
      dish: "Little Lemon Cake",
      price: "5.99",
      description:
        "Our signature dessert, this recipe comes straight from grandma's recipe book. All ingredients are locally sourced and is as authentic as can be imagined.",
      image: lemonDessert,
    },
  ];

  return (
    <Box backgroundColor="#495E57">
      <Box
        display={{ base: "flex", md: "flex" }}
        justifyContent="space-between"
        alignItems={{ base: "center", md: "center" }}
        textAlign={{ base: "center", md: "initial" }}
        maxWidth="100%"
        className="specials-container"
        padding="1rem"
        paddingLeft={{ md: "3rem", lg: "5rem", xl: "10rem" }}
        paddingRight={{ md: "3rem", lg: "5rem", xl: "10rem" }}
        marginTop="10px"
      >
        <Text
          fontSize={{ sm: "1rem", md: "2rem" }}
          fontStyle={"italic"}
          color="white"
        >
          Specials
        </Text>
        <Link to="/order-online">
          <Button
            size={{ base: "sm", md: "md" }}
            mt={{ base: 2, md: 0 }}
            marginTop="0px"
            backgroundColor="#EE9972"
          >
            View Menu
          </Button>
        </Link>
      </Box>
      <SimpleGrid
        marginLeft="2rem"
        marginRight="2rem"
        spacing={10}
        minChildWidth={{ base: "100%", md: "20vw" }}
        paddingBottom="2rem"
      >
        {specials.map((item) => (
          <Card
            key={item.dish}
            id={item.dish}
            image={item.image}
            backgroundColor={"#FBdABB"}
          >
            <CardHeader>
              <img
                src={item.image}
                style={{ objectFit: "cover", width: "100%" }}
              />
              <HStack
                justifyContent={"space-between"}
                fontSize={{ base: "1.5rem", lg: "2rem" }}
              >
                <Text>{item.dish}</Text>
                <Text>{item.price}</Text>
              </HStack>
            </CardHeader>
            <CardBody fontStyle={"italic"}>{item.description}</CardBody>
            <CardFooter color="blue">
              <Link to="/order-online">Order for delivery!</Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Specials;
