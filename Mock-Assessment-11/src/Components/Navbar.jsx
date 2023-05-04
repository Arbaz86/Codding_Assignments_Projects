import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box>
      <Flex
        fontSize="25px"
        bg="black"
        color="white"
        fontWeight="600"
        p="10px 30px"
        justifyContent="space-around"
      >
        <Link className="adminSec_links" to="/login">
          Login
        </Link>
        <Link className="adminSec_links" to="/data">
          Data
        </Link>
        <Link className="adminSec_links" to="/report">
          Reports
        </Link>
      </Flex>
    </Box>
  );
};
