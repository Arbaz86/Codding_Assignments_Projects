import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountriesCart } from "../components/CountriesCart";
import { getCountriesData } from "./../Redux/action";
import { useMediaQuery } from "@chakra-ui/react";

export const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");
  const [isSmallerThan560] = useMediaQuery("(max-width: 560px)");

  useEffect(() => {
    if (countries?.length === 0) {
      dispatch(getCountriesData()).then((r) => {
        setData(r);
      });
    }
  }, []);

  console.log(data);

  let handleFilter = (e) => {
    let value = e.target.value;
    let filtered = countries.filter((item) => item.region === value);
    setData(filtered);
  };

  let handleSort = (e) => {
    let value = e.target.value;
    if (value == "asc") {
      let newData = data.sort((a, b) => a.population - b.population);
      setData(newData);
      console.log(newData);
    } else {
      let newData = data.sort((a, b) => b.population - a.population);
      setData(newData);
    }
  };

  return (
    <Box>
      <Heading color="green" textAlign="center" m="20px">
        COUNTRIES
      </Heading>

      <Flex>
        <Select
          onChange={handleSort}
          m="0px 50px"
          placeholder="Sort By Population"
          w="200px"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>

        <Select
          onChange={handleFilter}
          m="0px 50px"
          placeholder="Filter by Region"
          w="200px"
        >
          {countries?.length > 0 &&
            countries?.map((country, i) => (
              <option key={i} value={country.region}>
                {country.region}
              </option>
            ))}
        </Select>
      </Flex>

      <Grid
        templateColumns={
          isSmallerThan560
            ? "repeat(1,1fr)"
            : isSmallerThan960
            ? "repeat(2, 1fr)"
            : "repeat(4,1fr)"
        }
        gap={4}
        m="30px"
      >
        {data?.length > 0 &&
          data?.map((country, index) => (
            <GridItem w="100%" key={index}>
              <CountriesCart country={country} />
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};
