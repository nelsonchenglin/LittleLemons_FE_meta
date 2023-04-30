import React from "react";
import {
  Flex,
  Image,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
  HStack,
  extendTheme,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        width="100%"
        px={{ base: "4", md: "10" }}
        py={{ base: "3", md: "5 " }}
        align="center"
        justify="space-between"
        borderBottom="1px solid lightgray"
      >
        <a href="/">
          <Image src={Logo} alt="logo" height={50} />
        </a>
        {/* Hamburger icon */}
        <IconButton
          aria-label="Open navigation menu"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "block", lg: "none" }}
          onClick={onOpen}
        />

        {/* Mobile navigation menu */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <VStack spacing="6" align="stretch" py="12" px="4">
              <Link to="/" onClick={onClose}>
                Home
              </Link>
              <Link to="/about" onClick={onClose}>
                About
              </Link>
              <Link to="/menu" onClick={onClose}>
                Menu
              </Link>
              <Link to="/reservations" onClick={onClose}>
                Reservations
              </Link>
              <Link to="/order-online" onClick={onClose}>
                Order Online
              </Link>
              <Link to="/signup">
                <Button colorScheme="blue" onClick={onClose}>
                  Sign up
                </Button>
              </Link>
              <Link to="/login">
                <Button colorScheme="blue" variant="outline" onClick={onClose}>
                  Log in
                </Button>
              </Link>
            </VStack>
          </DrawerContent>
        </Drawer>

        {/* Desktop navigation menu */}
        <HStack
          as="nav"
          spacing="5"
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order-online">Order Online</Link>
          <Link to="/signup">
            <Button colorScheme="blue">Sign up</Button>
          </Link>
          <Link to="/login">
            <Button colorScheme="blue" variant="outline">
              Log in
            </Button>
          </Link>
        </HStack>
      </Flex>
    </>
  );
}

export default Header;
