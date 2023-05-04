import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  const [isSmallerThan375] = useMediaQuery("(max-width: 375px)");

  return (
    <Box bg="#434CCC" m="0px" color="#FFFFFF">
      <Navbar />
      <Box textAlign="center">
        <Heading
          mt={isSmallerThan375 ? "28px 0xp 13px" : "47px"}
          mb="10px"
          fontFamily="DM Serif Display"
          fontSize={isSmallerThan375 ? "56px" : "72px"}
          fontWeight="400"
        >
          About
        </Heading>
        <Text
          pb={isSmallerThan375 ? "70px" : "90px"}
          fontSize="20px"
          h="32px"
          fontWeight="400"
        >
          Vivendo offendit persecuti
        </Text>
      </Box>
    </Box>
  );
};
