import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import hand from "../../assets/hand.svg";
import star from "../../assets/star.svg";
import heart from "../../assets/heart.svg";
import shape from "../../assets/shape.svg";

export const ExploreSection = () => {
  const [isSmallerThan375] = useMediaQuery("(max-width: 375px)");

  return (
    <Box pb="50px">
      <Flex
        m={isSmallerThan375 ? "0px 3.5%" : "127px 5%"}
        justifyContent="space-between"
        direction={isSmallerThan375 ? "column" : "row"}
      >
        <Box m={isSmallerThan375 ? "50px 0px" : ""}>
          <Image src={hand} height="90%" w="90%" />
        </Box>
        <Box w={isSmallerThan375 ? "100%" : "50%"}>
          <Box color="#000000">
            <Text letterSpacing="0.3em">INCIDERINT</Text>
            <Heading
              fontFamily="DM Serif Display"
              fontSize={isSmallerThan375 ? "40px" : "56px"}
              m="21px 0px 29px"
              lineHeight="64px"
            >
              Lorem deterruisset
            </Heading>
            <Text fontFamily="DM Sans" fontSize="20px" mb="23px">
              Mei mazim iudico tritani te, qui feugait electram an. An mel
              corpora consectetuer. Duo veri eripuit honestatis ei.
            </Text>
          </Box>
          <Box fontFamily="DM Sans" color="rgba(0, 0, 0, 0.5)">
            <Flex alignItems="center">
              <Image src={star} />
              <Text ml="23px">Mandamus expetenda has ex</Text>
            </Flex>
            <Flex alignItems="center" mt="7px">
              <Image src={heart} />
              <Text ml="17px">Eu minim movet quodsi eum</Text>
            </Flex>
            <Flex alignItems="center" mt="10px">
              <Image src={shape} />
              <Text ml="25px">Usu vitae decore ut</Text>
            </Flex>
          </Box>
          <Box
            mt="60px"
            display={isSmallerThan375 ? "flex" : "block"}
            justifyContent="center"
          >
            <Button
              textAlign="center"
              fontWeight="700"
              p="13px 55.5px"
              bg="#434CCC"
              color=" #FFFFFF"
              _hover={false}
              _active={false}
              borderRadius="5px"
              h="48px"
              w="170px"
              mr={isSmallerThan375 ? "6px" : "30px"}
            >
              Explore
            </Button>
            <Button
              border="1px solid #434CCC"
              borderRadius="5px"
              color="#434CCC"
              _hover={false}
              _active={false}
              h="48px"
              w="170px"
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
