import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const ProductCard = ({
  title,
  description,
  price,
  thumbnail,
  brand,
}) => {
  console.log(title);
  return (
    <Box>
      <Card maxW="sm" h="550px">
        <CardBody>
          <Image
            src={thumbnail}
            alt={title}
            borderRadius="lg"
            h="250"
            w="100%"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Text color="blue.800" fontSize="2xl">
              Brand : {brand}
            </Text>
            <Text color="red.800" fontSize="2xl">
              Price : {price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
