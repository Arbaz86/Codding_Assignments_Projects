import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      p="10px"
      m="10px"
      color="purple"
    >
      <Flex justifyContent="space-around" alignItems="center">
        <Text fontSize="25px" fontWeight="700">
          Navbar
        </Text>
        <Box fontSize="20px" _hover={{ textDecoration: "underline" }}>
          <Link to="/search">Search</Link>
        </Box>
      </Flex>
    </Box>
  );
};
