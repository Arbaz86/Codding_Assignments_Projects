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

export const ProductCard = ({ thumbnail, title, description, price }) => {
  return (
    <Box>
      <Card
        maxW="sm"
        h="550px"
        boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      >
        <CardBody>
          <Image
            src={thumbnail}
            alt={title}
            borderRadius="lg"
            h="300px"
            w="100%"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              Item Price: {price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
