import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sam";
const bio1 = "Frontend developer";
const bio2 = "Developed this webpage using React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar size="x2" src="" alt="Profile Picture" />
      <Heading as="h1" fontSize="4xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" fontSize="6xl" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" fontSize="2xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
