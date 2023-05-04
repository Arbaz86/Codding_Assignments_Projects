import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoBookmarkSharp } from "react-icons/io5";

export const BookmarkCard = ({ title, description, date, id }) => {
  return (
    <Card>
      <CardHeader>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="md">{title}</Heading>

          <IoBookmarkSharp fontSize="20px" color="purple" />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardBody>
        <Tag size={"md"} variant="outline" colorScheme="blue">
          <TagLabel>{date}</TagLabel>
        </Tag>
      </CardBody>
    </Card>
  );
};
