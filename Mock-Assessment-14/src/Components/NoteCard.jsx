import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";

export const NoteCard = ({
  title,
  description,
  date,
  id,
  handleDelete,
  handleBookmark,
}) => {
  const toast = useToast();

  const handleAdding = () => {
    const payload = {
      title,
      description,
      date,
      id,
    };

    handleBookmark(payload);
    toast({
      title: "Bookmarked.",
      description: `You Bookmarked, ${title}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardBody>
        <Tag size={"md"} variant="outline" colorScheme="blue">
          <TagLabel>{date}</TagLabel>
        </Tag>
      </CardBody>
      <CardBody>
        <Button onClick={handleAdding} colorScheme="blue" mr="10px">
          Bookmarked
        </Button>
        <Button
          onClick={() => handleDelete(id)}
          colorScheme="red"
          variant="outline"
          m="0px 10px"
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};
