import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      spacing={4}
      align="start"
    >
      <Image src={imageSrc} alt={title} boxSize="200px" objectFit="cover" />

      <VStack align="start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>

      <HStack>
        <Text>Read more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
