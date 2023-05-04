import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../Components/ProductCard";
import { getLocalData } from "../Utils/localStorage";

export const Products = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const fetchCategoryData = (categoryName) => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then(({ data }) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    let value = getLocalData("category");
    if (value) {
      setCategory(value);
    }
  }, []);

  useEffect(() => {
    if (category) {
      fetchCategoryData(category);
    }
  }, [category]);

  console.log(products);

  return (
    <Box>
      <Grid
        templateColumns="repeat(3, 350px)"
        gap={10}
        textAlign="center"
        m="auto"
        mt="30px"
        w="80%"
        justifyContent="center"
      >
        {products.length > 0 &&
          products.map((item) => (
            <GridItem key={item.id}>
              <ProductCard {...item} />
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};
