import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import homero from "../../assets/homero.svg";

export const HeroSection = () => {
  const [isSmallerThan375] = useMediaQuery("(max-width: 375px)");

  return (
    <Box>
      <Flex
        m="127px 5%"
        justifyContent="space-between"
        direction={isSmallerThan375 ? "column" : "row"}
      >
        <Box w={isSmallerThan375 ? "100%" : "45%"}>
          <Box color="#000000">
            <Text letterSpacing="0.3em">HOMERO</Text>
            <Heading
              fontSize={isSmallerThan375 ? "40px" : "56px"}
              m="21px 0px 29px"
              lineHeight="64px"
              fontFamily="DM Serif Display"
            >
              Debet molestiae constituto{" "}
            </Heading>
            <Text fontFamily="DM Sans" fontSize="20px">
              Quo ex ocurreret quaerendum. Mel cu ancillae similique. Mei no{" "}
              ubique persecuti, at sit iusto aliquam interpretaris.
            </Text>
          </Box>
          <Flex rowGap="30px" direction={isSmallerThan375 ? "column" : "row"}>
            <Box w={isSmallerThan375 ? "70%" : "50%"}>
              <Heading mt="30px" fontFamily="DM Serif Display" fontSize="40px">
                295+
              </Heading>
              <Text
                m="5px 0px 8px"
                fontSize="16px"
                fontFamily="DM Sans"
                fontWeight="700"
              >
                Partem vocent
              </Text>
              <Text color="rgba(0, 0, 0, 0.5)">
                Ei nominavi suavitate deterruisset qui, assum ubique quodsi.
              </Text>
            </Box>
            <Box w={isSmallerThan375 ? "70%" : "50%"}>
              <Heading mt="30px" fontFamily="DM Serif Display" fontSize="40px">
                1500+
              </Heading>
              <Text
                m="5px 0px 8px"
                fontFamily="DM Sans"
                fontSize="16px"
                fontWeight="700"
              >
                Natum volutpat
              </Text>
              <Text color="rgba(0, 0, 0, 0.5)">
                Id qui purto dicit, bonorum minimum et sit.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box m={isSmallerThan375 ? "80px 0px" : ""}>
          <Image src={homero} height="90%" w="90%" />
        </Box>
      </Flex>
    </Box>
  );
};
