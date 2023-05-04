import React, { useEffect, useState } from "react";
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

export const CartItem = ({
  image,
  title,
  brand,
  category,
  price,
  handleTotalPrice,
}) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    handleTotalPrice(price * count);
  }, [count, price]);

  return (
    <Box>
      <Card maxW="sm">
        <CardBody>
          <Image src={image} alt={title} w="100%" h="313px" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Brand : {brand}</Heading>
            <Text>Title : {title}</Text>
            <Text>Category : {category}</Text>
            <Text>Price : ₹{price}</Text>
          </Stack>
        </CardBody>
        <Flex justifyContent="center" alignItems="center">
          <Button
            onClick={() => {
              if (count < 1) {
                return;
              }
              setCount(count - 1);
            }}
          >
            -
          </Button>
          <Text>{count}</Text>
          <Button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </Button>
        </Flex>
      </Card>
    </Box>
  );
};
