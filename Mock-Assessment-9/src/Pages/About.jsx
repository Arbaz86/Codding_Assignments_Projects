import { Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { ContentCart } from "../Components/About/ContentCart";
import { ExploreSection } from "../Components/About/ExploreSection";
import { Header } from "../Components/About/Header";
import { HeroSection } from "../Components/About/HeroSection";
import { MidSimSection } from "../Components/About/MidSimSection";

export const About = () => {
  const [isSmallerThan1444] = useMediaQuery("(max-width: 1444px)");

  return (
    <Box bg="#F2F2F2">
      <Box w={isSmallerThan1444 ? "100%" : "1444px"} m="auto">
        <Header />
        <HeroSection />
        <hr />
        <ContentCart />
        <hr />
        <ExploreSection />
        <MidSimSection />
      </Box>
    </Box>
  );
};
