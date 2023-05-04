import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../Redux/action";
import { ProfileEdit } from "./ProfileEdit";

export const ProfileCart = ({ username, fullName, email, avatar, id }) => {
  console.log(username, fullName);
  const dispatch = useDispatch();
  const { onOpen } = useDisclosure();

  const follower = Math.floor(Math.random() * 1000);
  const following = Math.floor(Math.random() * 1000);

  const handleDelete = () => {
    dispatch(deleteUserData(id));
  };

  return (
    <Box textAlign="center" bg="#1111">
      <Card maxW="sm">
        <CardBody>
          <Image src={avatar} alt={username} borderRadius="full" />
          <Stack mt="6" spacing="3">
            <Text textAlign="center" color="blue.600" fontSize="18px">
              @{username}
            </Text>
            <Heading size="md">{fullName} </Heading>
            <Text>{email}</Text>
          </Stack>
        </CardBody>

        <ButtonGroup m="0px 0px 15px" spacing="2" justifyContent="center">
          <Button bg="#2222">{follower} Followers</Button>
          <Button bg="#2222">{following} Following</Button>
        </ButtonGroup>

        <Divider />

        <CardFooter justifyContent="center">
          <ButtonGroup spacing="2">
            <ProfileEdit id={id} />
            <Button
              onClick={handleDelete}
              variant="ghost"
              bg="red.100"
              colorScheme="red"
            >
              Delete Account
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};
