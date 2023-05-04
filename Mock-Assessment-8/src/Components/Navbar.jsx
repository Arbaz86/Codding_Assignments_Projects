import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box>
      <Flex
        justifyContent="space-around"
        p="12px"
        fontSize="18px"
        background="black"
        color="white"
        fontWeight="700"
      >
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/profile">User Profile</Link>
        <Link to="/timeline">Timeline</Link>
      </Flex>
    </Box>
  );
};
