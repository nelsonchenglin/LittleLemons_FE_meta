import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "../assets/landingBackground.jpeg";
import Specials from "./Specials";

function Landing() {
  return (
    <>
      <Box className="landing-container">
        <img className="landing-image" src={Image} alt="background" />
        <Box className="landing-description-container">
          <p>
            {`Thank you for visiting the Little Lemon! Our menu features a wide
          variety of dishes from the Mediterranean. From fresh salads and dips to
          hearty soups and stews, we use only the finest ingredients to create
          delicious and wholesome meals that are bursting with flavor. Our
          signature dishes include grilled meats and seafood, classic pasta
          dishes, and our famous mezze platters, which are perfect for sharing
          with friends and family. Whether you're looking for a quick lunch or a
          relaxing dinner, we've got you covered. Come experience the taste of
          the Mediterranean and indulge in a culinary journey that's sure to
          delight your taste buds.`}
          </p>
        </Box>
      </Box>
      <Box>
        <Specials />
      </Box>
    </>
  );
}

export default Landing;

persona
https://www.figma.com/file/BVcT0ej7ymQV9hckuZ3K2c/Little-Lemon-projects-for-Meta?type=design&amp;node-id=0%3A1&amp;t=5AM35Xh7Nb1MfPdC-1

wireframe figma
https://www.figma.com/file/BVcT0ej7ymQV9hckuZ3K2c/Little-Lemon-projects-for-Meta?type=design&amp;node-id=0%3A1&amp;t=5AM35Xh7Nb1MfPdC-1

prototype
https://coursera-assessments.s3.amazonaws.com/assessments/1683901717264/74f5aee5-2ee7-4798-b9f9-6f10ae3af0e8/pdf24_merged.pdf