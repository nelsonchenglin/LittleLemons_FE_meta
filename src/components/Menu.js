import React from "react";
import {
  Box,
  GridItem,
  useBreakpointValue,
  Grid,
  Text,
} from "@chakra-ui/react";

function Menu() {
  const items = [
    {
      id: "hummus",
      name: "Hummus",
      description: "Chickpea dip with tahini, garlic, and lemon juice",
      price: 6.99,
    },
    {
      id: "baba",
      name: "Baba Ghanoush",
      description: "Smoky eggplant dip with tahini, garlic, and lemon juice",
      price: 7.99,
    },
    {
      id: "tabouli",
      name: "Tabouli",
      description: "Salad of parsley, mint, tomatoes, onions, and bulgur",
      price: 8.99,
    },
    {
      id: "falafel",
      name: "Falafel Wrap",
      description:
        "Fried chickpea balls with lettuce, tomatoes, and tahini sauce",
      price: 10.99,
    },
    {
      id: "shawarma",
      name: "Chicken Shawarma Plate",
      description: "Marinated chicken, rice, and salad",
      price: 13.99,
    },
    {
      id: "kebab",
      name: "Beef Kebab Plate",
      description: "Marinated beef, rice, and salad",
      price: 14.99,
    },
    {
      id: "baklava",
      name: "Baklava",
      description: "Sweet pastry with layers of phyllo dough and chopped nuts",
      price: 4.99,
    },
    {
      id: "dolma",
      name: "Dolma",
      description: "Stuffed grape leaves with rice and herbs",
      price: 9.99,
    },
    {
      id: "moussaka",
      name: "Moussaka",
      description:
        "Baked casserole with eggplant, ground beef, and tomato sauce",
      price: 12.99,
    },
    {
      id: "tzatziki",
      name: "Tzatziki",
      description: "Yogurt dip with garlic and cucumber",
      price: 5.99,
    },
  ];

  const numCols = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box backgroundColor="#333333">
      <Box
        width={{ base: "100vw", md: "50vw" }}
        margin="auto"
        pt={8}
        pl={{ base: "10px", md: "0px" }}
        borderBottom="1px solid #EDEFEE"
        mb={4}
      >
        <Text
          color="white"
          fontSize="2rem"
          fontStyle="italic"
          fontWeight="semibold"
        >
          Menu
        </Text>
      </Box>
      <Box p={4} height="100vh" display="flex" justifyContent="center">
        <Grid
          templateColumns={`repeat(${numCols}, 1fr)`}
          gap={6}
          width={{ base: "100vw", md: "50vw" }}
          height="100px"
        >
          {items.map((item) => {
            return (
              <GridItem
                key={item.id}
                borderRadius="1rem"
                color="#EDEFEE"
                border="1px solid #EDEFEE"
              >
                <Box borderRadius="md" p={4}>
                  <Box fontWeight="bold" fontSize="lg" mb={2}>
                    {item.name}
                  </Box>
                  <Box fontSize="sm" mb={2} fontStyle="italic">
                    {item.description}
                  </Box>
                  <Box fontWeight="semibold" fontSize="lg">
                    {item.price}
                  </Box>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Menu;
