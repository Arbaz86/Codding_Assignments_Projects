import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
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
        <Heading mb="30px">Go To Admin Section</Heading>
        <Link to="/admin" className="section_links">
          Admin Section
        </Link>
      </Box>
      <Box
        boxShadow="dark-lg"
        rounded="md"
        bg="white"
        p="40px 50px"
        fontSize="30px"
      >
        <Heading mb="30px">Go To User Section</Heading>
        <Link to="/user" className="section_links">
          User Section
        </Link>
      </Box>
    </Flex>
  );
};
