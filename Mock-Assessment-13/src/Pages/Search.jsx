import {
  Box,
  Input,
  Button,
  Flex,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { ProductCard } from "../Components/ProductCard";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleClick = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${query}`)
      .then(({ data }) => {
        console.log(data);
        setSearchData(data.products);
        setNotFound(data.products.length ? false : true);
      })
      .catch((err) => {
        console.log(err.message, "message");
      });
  };

  return (
    <Box>
      <Flex justifyContent="center" mt="30px">
        <Input
          value={query}
          w="300px"
          type="text"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          bg="grey"
          color="white"
          m="0px 5px"
          onClick={handleClick}
        >
          Search
        </Button>
      </Flex>

      {notFound ? (
        <Heading textAlign="center" mt="80px">
          Oops! No Result available
        </Heading>
      ) : (
        <Grid
          templateColumns="repeat(3, 350px)"
          gap={10}
          textAlign="center"
          m="auto"
          mt="30px"
          w="80%"
          justifyContent="center"
        >
          {searchData.length > 0 &&
            searchData.map((item) => (
              <GridItem key={item.id}>
                <ProductCard {...item} />
              </GridItem>
            ))}
        </Grid>
      )}
    </Box>
  );
};
