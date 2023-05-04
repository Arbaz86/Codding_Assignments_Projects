import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../Redux/AuthReducer/action";
import { ADMIN_LOGIN } from "../Redux/AuthReducer/actionTypes";

export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    let payload = {
      email,
      password,
    };

    dispatch(adminLogin(payload)).then((res) => {
      if (res.type == ADMIN_LOGIN) {
        navigate("/data");
      }
    });
  };

  return (
    <Box bg="#1111" h="100vh" p="50px">
      <Heading m="20px" textAlign="center">
        Login
      </Heading>
      <Box
        w="450px"
        m="30px auto"
        p="25px"
        shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        rounded="md"
        bg="white"
      >
        <label>
          Email:
          <Input
            m="2px 0px 12px"
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
          />
        </label>
        <label>
          password:
          <Input
            m="2px 0px 12px"
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
          />
        </label>
        <Button
          margin="20px auto"
          colorScheme="teal"
          variant="outline"
          p="12px 20px 15px"
          w="100%"
          onClick={handleClick}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
