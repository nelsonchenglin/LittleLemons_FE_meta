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
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../assets/Logo.svg";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      width="100%"
      px={{ base: "4", md: "6" }}
      py={{ base: "3", md: "5" }}
      align="center"
      justify="space-between"
    >
      <Image src={Logo} alt="logo" />

      {/* Hamburger icon */}
      <IconButton
        aria-label="Open navigation menu"
        icon={<HamburgerIcon />}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      />

      {/* Mobile navigation menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <VStack spacing="6" align="stretch" py="12" px="4">
            <Text fontWeight="bold">Menu</Text>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu</a>
            <a href="/reservations">Reservations</a>
            <a href="/order-online">Order Online</a>

            {/* Close button */}
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </VStack>
        </DrawerContent>
      </Drawer>

      {/* Desktop navigation menu */}
      <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/reservations">Reservations</a>
        <a href="/order-online">Order Online</a>
        <a href="/login">Login</a>
      </HStack>
    </Flex>
  );
}
export default Header;
