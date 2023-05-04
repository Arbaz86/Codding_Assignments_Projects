import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../Redux/action";

const initialState = {
  username: "",
  fullName: "",
  email: "",
  password: "",
};

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const signupUsers = useSelector((store) => store.signupUsers);
  const dispatch = useDispatch();

  const { username, fullName, email, password } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let filtered = signupUsers.filter(
      (el) => el.username == formData.username.toLowerCase()
    );

    if (filtered.length > 0) {
      alert("Username Already Taken");
      return;
    }

    let payload = {
      ...formData,
      username: formData.username.toLowerCase(),
      avatar: "https://i.pravatar.cc/300",
    };
    dispatch(signupUser(payload));
  };

  return (
    <Flex
      minH={"94vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} w="70%" py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="lastName">
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="username"
                  required
                  value={username}
                />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="fullName"
                  value={fullName}
                  required
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={email}
                  required
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    name="password"
                    value={password}
                    required
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <NavLink to="/signin">Signin</NavLink>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
