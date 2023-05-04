import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../Redux/AuthReducer/action";

export const Login = () => {
  const toast = useToast();

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((store) => store.AuthReducer.token);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    const payload = {
      email,
      password,
    };

    dispatch(loginUser(payload));

    toast({
      title: "Login Successfully.",
      description: "You have successfully login :)",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast({
      title: "Logout Successfully.",
      description: "You have successfully Logout :)",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return isAuth ? (
    <Box>
      <Box p="120px 20px" textAlign="center">
        <Heading>Token - {token}</Heading>

        <Button mt="30px" bg="black" color="white" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  ) : (
    <Flex justifyContent="center">
      <Box
        w="350px"
        mt="120px"
        p="30px 20px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <FormControl isRequired mb="10px">
          <FormLabel>Email: </FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bg="#f9eaac"
          />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Password: </FormLabel>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bg="#f9eaac"
          />
        </FormControl>
        <Button onClick={handleLogin} w="100%" bg="black" color="white">
          Login
        </Button>
      </Box>
    </Flex>
  );
};
