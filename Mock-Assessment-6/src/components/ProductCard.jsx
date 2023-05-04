import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const ProductCard = ({ brand, title, image, category, price }) => {
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
      </Card>
    </Box>
  );
};
