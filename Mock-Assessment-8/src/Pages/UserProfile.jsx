import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfileCart } from "../Components/ProfileCart";

export const UserProfile = () => {
  const signupUsers = useSelector((store) => store.signupUsers);

  return (
    <Box>
      <Heading textAlign="center" m="20px">
        Users Profile
      </Heading>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {signupUsers?.length > 0 &&
          signupUsers?.map((el) => (
            <GridItem key={el.id}>
              <ProfileCart {...el} />
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};
