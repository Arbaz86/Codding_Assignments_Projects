import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box>
      <Flex
        h="90vh"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        gap="30px"
      >
        <Box
          boxShadow="dark-lg"
          rounded="md"
          bg="white"
          p="40px 50px"
          fontSize="30px"
        >
          <Heading mb="30px">Go To Job Posting Page</Heading>
          <Link to="/posting" className="section_links">
            Job Posting
          </Link>
        </Box>
        <Box
          boxShadow="dark-lg"
          rounded="md"
          bg="white"
          p="40px 50px"
          fontSize="30px"
        >
          <Heading mb="30px">Go To Job Listing Page</Heading>
          <Link to="/listing" className="section_links">
            Job Listing
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
