import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box>
      <Flex
        border="1px solid"
        bg="black"
        color="white"
        fontWeight="700"
        fontSize="25px"
        justifyContent="Space-around"
        padding="5px"
      >
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
      </Flex>
    </Box>
  );
};
