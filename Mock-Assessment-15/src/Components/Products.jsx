import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/AppReducer/action";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.AppReducer.products);
  const isLoading = useSelector((store) => store.AppReducer.isLoading);
  const isError = useSelector((store) => store.AppReducer.isError);
  const [currentPage, setCurrentPage] = useState(0);

  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const handlePageChange = (value) => {
    setCurrentPage(currentPage + value);
  };

  useEffect(() => {
    dispatch(getProducts(currentPage));
  }, [currentPage]);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
    }
  }, []);

  return (
    isAuth && (
      <Box m="50px" textAlign="center">
        <Box>
          <Heading m="30px">Our All Products</Heading>
        </Box>
        <Box>
          {isLoading ? (
            <Heading>Loading....</Heading>
          ) : isError ? (
            <Heading>Something Went Wrong</Heading>
          ) : (
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              {products?.length > 0 &&
                products?.map((item) => (
                  <GridItem key={item.key}>
                    <ProductCard {...item} />
                  </GridItem>
                ))}
            </Grid>
          )}
        </Box>

        <Box m="20px">
          <Pagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </Box>
      </Box>
    )
  );
};
