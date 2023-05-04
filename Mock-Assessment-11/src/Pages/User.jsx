import {
  Box,
  Button,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserData } from "../Redux/AppReducer/action";

let initState = {
  name: "",
  age: "",
  gender: "",
  country: "",
  profession: "",
};

export const User = () => {
  const [formData, setFormData] = useState(initState);
  const toast = useToast();
  const dispatch = useDispatch();

  const { name, age, country, gender } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUserData(formData));

    toast({
      title: "Successfully Registered",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setFormData(initState);
  };

  return (
    <Box bg="#1111" h="100vh" p="50px">
      <Heading m="20px" textAlign="center">
        Registration Form
      </Heading>
      <Box
        w="450px"
        m="30px auto"
        p="25px"
        shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        rounded="md"
        bg="white"
      >
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <Input
              m="2px 0px 12px"
              required
              onChange={handleChange}
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
            />
          </label>
          <label>
            Age:
            <Input
              m="2px 0px 12px"
              required
              onChange={handleChange}
              type="number"
              placeholder="Enter age"
              name="age"
              value={age}
            />
          </label>

          <RadioGroup m="15px 0px">
            <Stack onChange={handleChange} spacing={5} direction="row">
              <label>Gender:</label>
              <Radio colorScheme="orange" name="gender" value="male">
                Male
              </Radio>
              <Radio colorScheme="orange" name="gender" value="female">
                Female
              </Radio>
            </Stack>
          </RadioGroup>

          <label htmlFor=""> Country</label>
          <Select
            required
            onChange={handleChange}
            placeholder="Select country"
            name="country"
            m="3px 0px 15px"
          >
            <option value="india">India</option>
            <option value="america">America</option>
            <option value="china">China</option>
            <option value="england">England</option>
          </Select>

          <label htmlFor=""> Profession</label>
          <Select
            required
            onChange={handleChange}
            placeholder="Select profession"
            name="profession"
            m="10px 0px"
          >
            <option value="Student">Student</option>
            <option value="Employed">Employed</option>
          </Select>

          <Button
            margin="20px auto"
            colorScheme="teal"
            variant="outline"
            p="12px 20px 15px"
            type="submit"
            w="100%"
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};
