import {
  useMediaQuery,
  Box,
  Heading,
  Flex,
  Grid,
  GridItem,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { getProductsData } from "./../Redux/AppReducer/action";

export const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");
  const [isSmallerThan560] = useMediaQuery("(max-width: 560px)");

  useEffect(() => {
    dispatch(getProductsData()).then((res) => {
      setData(res);
    });
  }, []);

  const handleSort = (e) => {
    let value = e.target.value;
    let newData = [];

    if (value == "asc") {
      newData = data.sort((a, b) => a.price - b.price);
    } else if (value == "desc") {
      newData = data.sort((a, b) => b.price - a.price);
    } else {
      newData = data;
    }
    setData([...newData]);
  };

  const handleFilter = (e) => {
    let value = e.target.value;
    if (value) {
      let filtered = products.filter((item) => item.category === value);
      setData(filtered);
    } else {
      setData(products);
    }
  };

  return (
    <Box>
      <Heading textAlign="center" m="20px">
        PRODUCTS
      </Heading>

      <Flex>
        <Select
          onChange={handleSort}
          m="0px 50px"
          placeholder="Sort By Price"
          w="200px"
        >
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </Select>

        <Select
          onChange={handleFilter}
          m="0px 50px"
          placeholder="Filter By Category"
          w="200px"
        >
          <option value="kids">Kids</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="homedecor">Homedecor</option>
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
          data?.map((prod, index) => (
            <GridItem w="100%" key={index}>
              <Link to={`/product/${prod.id}`}>
                <ProductCard {...prod} />
              </Link>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};
