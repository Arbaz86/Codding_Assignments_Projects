import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsDot } from "react-icons/bs";

export const ListingCard = ({
  company,
  city,
  location,
  role,
  level,
  contract,
  position,
  language,
  postedAt,
}) => {
  return (
    <Flex
      bg="#ffffff"
      justifyContent="space-between"
      w="70%"
      m="30px auto"
      p="20px"
      alignItems="center"
      rounded="8px"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
    >
      <Flex>
        <Box>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://via.placeholder.com/100"
            alt="company"
          />
        </Box>
        <Box m="0px 20px">
          <Text fontWeight="600" color="#70aeae">
            {company}
          </Text>
          <Heading fontSize="25px" m="10px 0px" color="#2d3b3b">
            {position}
          </Heading>
          <HStack m="10px 0px" color="#7b8d8d" gap="10px">
            <Text>{postedAt}</Text>
            <BsDot />
            <Text>{contract}</Text>
            <BsDot />
            <Text>{location}</Text>
          </HStack>
        </Box>
      </Flex>
      <HStack spacing={4}>
        <Tag size="lg" color="#60a5a6" bg="#edf5f4">
          <TagLabel>{role}</TagLabel>
        </Tag>
        <Tag size="lg" color="#60a5a6" bg="#edf5f4">
          <TagLabel>{level}</TagLabel>
        </Tag>
        <Tag size="lg" color="#60a5a6" bg="#edf5f4">
          <TagLabel>{language}</TagLabel>
        </Tag>
      </HStack>
    </Flex>
  );
};
