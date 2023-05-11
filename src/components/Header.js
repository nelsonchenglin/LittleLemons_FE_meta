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
        backgroundColor="#EDEFEE"
      >
        <Link to="/">
          <Image src={Logo} alt="logo" height={50} />
        </Link>
        {/* Hamburger icon */}
        <IconButton
          aria-label="Open navigation menu"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "block", lg: "none" }}
          onClick={onOpen}
          color="#333333"
        />

        {/* Mobile navigation menu */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <VStack
              spacing="6"
              align="stretch"
              py="12"
              px="4"
              fontWeight="semibold"
            >
              <Link to="/" onClick={onClose}>
                Home
              </Link>
              <Link to="/about" onClick={onClose}>
                About
              </Link>

              <Link to="/reservations" onClick={onClose}>
                Reservations
              </Link>
              <Link to="/menu" onClick={onClose}>
                Menu
              </Link>
              <Link to="/contact-us" onClick={onClose}>
                Contact
              </Link>
            </VStack>
          </DrawerContent>
        </Drawer>

        {/* Desktop navigation menu */}
        <HStack
          as="nav"
          spacing="16"
          display={{ base: "none", md: "none", lg: "flex" }}
          fontWeight="semibold"
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact-us">Contact</Link>
        </HStack>
      </Flex>
    </>
  );
}

export default Header;
