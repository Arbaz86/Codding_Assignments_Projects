import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <Box>
      <Heading
        w="100%"
        textAlign="center"
        color="white"
        bg="black"
        position="fixed"
        p="5px 5px 7px"
        zIndex="100"
      >
        Single Page E-Commerce App
      </Heading>
    </Box>
  );
};
