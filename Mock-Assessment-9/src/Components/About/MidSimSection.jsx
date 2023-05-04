import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

let list = [
  {
    title: "50+",
    des: "Diam facilisi insolens per",
  },
  {
    title: "73%",
    des: "Esse concludaturque usu",
  },
  {
    title: "0.03",
    des: "Quo ex ocurreret quaerendum",
  },
  {
    title: "$9",
    des: "Mei no ubique persecuti",
  },
];

export const MidSimSection = () => {
  const [isSmallerThan375] = useMediaQuery("(max-width: 375px)");

  return (
    <Box bg="#434CCC" color="#FFFFFF" p="76px 0px 89px" mb="30px">
      <Box m="0px 5%">
        <Box textAlign="center">
          <Heading
            fontSize={isSmallerThan375 ? "40px" : "56px"}
            fontFamily="DM Serif Display"
          >
            Similique sea
          </Heading>
          <Text
            textAlign="center"
            fontWeight="400"
            m={isSmallerThan375 ? "31px auto 50px" : "29px auto 35px"}
            w={isSmallerThan375 ? "100%" : "67%"}
            fontFamily="DM Sans"
            fontSize="20px"
          >
            Mazim nemore singulis an ius, nullam ornatus nam ei. Idque
            maiestatis vis ut. An mel everti invenire intellegam.
          </Text>
        </Box>
        <Flex
          direction={isSmallerThan375 ? "column" : "row"}
          justifyContent="space-between"
          textAlign="center"
        >
          {list.map((el) => (
            <Box mb={isSmallerThan375 ? "40px" : ""}>
              <Heading fontFamily="DM Serif Display" fontSize="72px">
                {el.title}
              </Heading>
              <Text fontFamily="DM Sans" color="rgba(255, 255, 255, 0.5)">
                {el.des}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
