import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import box from "../../assets/box.svg";
import timer from "../../assets/timer.svg";
import wan from "../../assets/wan.svg";

const cartData = [
  {
    icon: box,
    title: "Mazim nemore",
    des: "An mel everti invenire intellegam, legendos consequuntur eu sit. ",
  },
  {
    icon: wan,
    title: "Quidam officiis",
    des: "Pro ad ubique erroribus, in modo mutat sed. Suscipit, natum animal qui et.",
  },
  {
    icon: timer,
    title: "Idque maiestatis",
    des: "Diam facilisi insolens per cu, eos malorum voluptaria ei.",
  },
];

export const ContentCart = () => {
  const [isSmallerThan375] = useMediaQuery("(max-width: 375px)");

  return (
    <Box mt="59px" pb={isSmallerThan375 ? "60px" : "143px"}>
      <Box>
        <Box textAlign="center">
          <Heading
            fontSize={isSmallerThan375 ? "40px" : "56px"}
            fontFamily="DM Serif Display"
          >
            Vivendo omnesque
          </Heading>
          <Text
            textAlign="center"
            fontWeight="400"
            m={isSmallerThan375 ? "31px auto 50px" : "29px auto 36px"}
            w={isSmallerThan375 ? "90%" : "35%"}
            fontFamily="DM Sans"
            fontSize="20px"
          >
            Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea
            nam, at posse dicta est.
          </Text>
        </Box>
        <Flex
          direction={isSmallerThan375 ? "column" : "row"}
          rowGap="16px"
          justifyContent="center"
          alignItems="center"
        >
          {cartData.map((el, i) => (
            <Box
              bg="#FFFFFF"
              key={i}
              w={isSmallerThan375 ? "355px" : "370px"}
              h="416px"
              borderRadius="5px"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.297017)"
              p="0px 30px"
              m="0px 5px"
            >
              <Image
                src={el.icon}
                m={
                  i == 1
                    ? "73px auto 63px"
                    : i == 2
                    ? "58px auto 48px"
                    : "64px auto 54px"
                }
              />
              <Text fontSize="24px" fontFamily="DM Serif Display" mb="15px">
                {el.title}
              </Text>
              <Text fontFamily="DM Sans" color="rgba(0, 0, 0, 0.5)" mb="25px">
                {el.des}
              </Text>
              <hr />
              <Box fontFamily="DM Sans" fontWeight="700" mt="18px">
                Learn more {">"}
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
