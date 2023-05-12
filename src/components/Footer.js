import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYelp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="white" width="100%">
      <Flex align="center" justify="center" flexWrap="wrap">
        <IconButton
          as="a"
          href="https://www.instagram.com"
          aria-label="Instagram"
          icon={<FaInstagram />}
          variant="ghost"
          mx="2"
          size="lg"
          _hover={{ bg: "transparent" }}
        />
        <IconButton
          as="a"
          href="https://www.yelp.com"
          aria-label="Yelp"
          icon={<FaYelp />}
          variant="ghost"
          mx="2"
          size="lg"
          _hover={{ bg: "transparent" }}
        />
        <IconButton
          as="a"
          href="https://www.twitter.com"
          aria-label="Twitter"
          icon={<FaTwitter />}
          variant="ghost"
          mx="2"
          size="lg"
          _hover={{ bg: "transparent" }}
        />
        <Link to="/contact-us">
          <IconButton
            aria-label="Contact Us"
            icon={<FaEnvelope />}
            variant="ghost"
            mx="2"
            size="lg"
            _hover={{ bg: "transparent" }}
          />
        </Link>
      </Flex>
      <Box textAlign="center" pb={4}>
        <p>&copy; Little Lemon</p>
      </Box>
    </Box>
  );
}

export default Footer;
