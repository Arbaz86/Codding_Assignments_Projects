import { Box, Flex, Grid, GridItem, Heading, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataCart } from "../Components/DataCart";
import { Navbar } from "../Components/Navbar";
import { getUsersData } from "../Redux/AppReducer/action";
import { GET_USERS_SUCCESS } from "../Redux/AppReducer/actionTypes";

export const Data = () => {
  const { users } = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState(users);

  useEffect(() => {
    if (users?.length === 0) {
      dispatch(getUsersData()).then((res) => {
        console.log(res);
        if (res.type == GET_USERS_SUCCESS) {
          setData(res.payload);
        }
      });
    }
  }, [dispatch]);

  console.log(data);

  const handleFilterByCountry = (e) => {
    let value = e.target.value;

    if (value) {
      let filtered = users.filter((el) => el.country.toLowerCase() == value);
      setData([...filtered]);
    }
  };

  const handleFilterByGender = (e) => {
    let value = e.target.value;

    if (value) {
      let filtered = users.filter((el) => el.gender.toLowerCase() == value);
      setData([...filtered]);
    }
  };

  return (
    <Box>
      <Navbar />
      <Heading m="20px" textAlign="center">
        Users Data
      </Heading>

      <Flex justifyContent="center" gap="30px">
        <Select
          onChange={handleFilterByCountry}
          w="300px"
          placeholder="Filter By Country"
        >
          <option value="india">India</option>
          <option value="america">America</option>
          <option value="china">China</option>
          <option value="england">England</option>
        </Select>
        <Select
          onChange={handleFilterByGender}
          w="300px"
          placeholder="Filter By Gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data?.length > 0 &&
          data.map((el) => (
            <GridItem key={el.id}>
              <DataCart {...el} />
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};
