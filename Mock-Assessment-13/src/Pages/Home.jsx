import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveLocalData } from "../Utils/localStorage";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = () => {
    axios.get("https://dummyjson.com/products/categories").then(({ data }) => {
      console.log(data);
      setCategories(data);
    });
  };

  const handleCategory = (category) => {
    saveLocalData("category", category);
    navigate("/products");
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Box>
      <Grid
        templateColumns="repeat(3, 350px)"
        gap={6}
        textAlign="center"
        fontWeight="700"
        w="80%"
        m="auto"
        mt="30px"
        justifyContent="space-around"
      >
        {categories.length > 0 &&
          categories.map((el) => (
            <GridItem
              onClick={() => handleCategory(el)}
              p="30px 20px"
              key={el}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              cursor="pointer"
            >
              <Text fontSize="20px">{el}</Text>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};
