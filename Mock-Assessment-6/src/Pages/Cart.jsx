import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./../components/CartItem";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");
  const [isSmallerThan560] = useMediaQuery("(max-width: 560px)");

  console.log(cart);

  const handleTotalPrice = (price) => {
    setTotal(total + price + 50);
  };

  const handleOrder = () => {
    alert("Order Placed successfully");
  };

  return (
    <Box>
      <Heading textAlign="center">Total : {total}</Heading>
      <Text textAlign="center">Delivery charges (50/-)</Text>

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
        {cart?.length > 0 &&
          cart?.map((prod, index) => (
            <GridItem w="100%" key={index}>
              <CartItem {...prod} handleTotalPrice={handleTotalPrice} />
            </GridItem>
          ))}
      </Grid>

      <Button onClick={handleOrder}>Place order</Button>
    </Box>
  );
};
