import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      p="10px"
      m="20px"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      fontWeight="700"
      color="purple"
    >
      <Flex fontSize="20px" justifyContent="space-around">
        <Box _hover={{ textDecoration: "underline" }}>
          <Link to="/">Home</Link>
        </Box>
        <Box _hover={{ textDecoration: "underline" }}>
          <Link to="/bookmarks">Bookmarked</Link>
        </Box>
      </Flex>
    </Box>
  );
};
