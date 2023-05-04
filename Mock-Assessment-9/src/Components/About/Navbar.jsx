import {
  Box,
  Text,
  Button,
  Image,
  OrderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import hamburger from "../../assets/hamburger.svg";

export const Navbar = () => {
  const [isSmallerThan375] = useMediaQuery("(max-width: 375px)");

  return (
    <Flex
      overflow="hidden"
      pl={isSmallerThan375 ? "10px" : "5%"}
      h="90px"
      mb="16px"
      justifyContent="space-between"
      color="#FFFFFF"
    >
      <Box
        fontFamily="DM Serif Display"
        m={isSmallerThan375 ? "16px 14px" : "16px"}
      >
        <Text fontSize={isSmallerThan375 ? "24px" : "40px"} fontWeight="400">
          LOGO
        </Text>
      </Box>
      {isSmallerThan375 ? (
        <Box m="24px 15px 26px">
          <Image src={hamburger} />
        </Box>
      ) : (
        <Flex gap="20px" mr="5%">
          <OrderedList
            fontSize="16px"
            display="flex"
            fontWeight="700"
            fontFamily="DM Sans"
            listStyleType="none"
            m="28px 0px"
          >
            <ListItem ml="2rem">About</ListItem>
            <ListItem ml="2rem">Portfolio</ListItem>
            <ListItem ml="2rem">Blog</ListItem>
            <ListItem ml="2rem">Contact</ListItem>
            <ListItem></ListItem>
          </OrderedList>
          <Box w="170px" h="48px" mt="16px" ml="32px">
            <Button
              w="170px"
              h="48px"
              border="1px solid rgba(255, 255, 255, 0.3)"
              borderRadius="5px"
              bg="transparent"
              _hover={false}
              _active={false}
            >
              Sign up
            </Button>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};
