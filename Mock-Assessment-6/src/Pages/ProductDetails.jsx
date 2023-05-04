import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartData, getProductsData } from "./../Redux/AppReducer/action";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { id } = useParams();

  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  useEffect(() => {
    if (id) {
      let filtered = products.filter((item) => item.id == id);
      setSingleData(...filtered);
    }
  }, [id]);

  const handleClick = () => {
    alert("Product added to cart");
    dispatch(addToCartData(singleData));
  };

  return (
    <Flex justifyContent="center">
      <Card maxW="sm">
        <CardBody>
          <Image
            src={singleData?.image}
            alt={singleData?.title}
            w="100%"
            h="313px"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Brand : {singleData?.brand}</Heading>
            <Text>Title : {singleData?.title}</Text>
            <Text>Category : {singleData?.category}</Text>
            <Text>Price : ₹{singleData?.price}</Text>
            <Text>
              Description : Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Saepe consequatur blanditiis beatae et ab debitis recusandae
              nesciunt. Sit, eius libero, veniam vero tempora consectetur
              voluptate et nesciunt quidem quis recusandae!
            </Text>
          </Stack>
          <Button m="10px 0px" onClick={handleClick}>
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </Flex>
  );
};
