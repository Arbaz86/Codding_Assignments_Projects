import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export const Pagination = ({ currentPage, handlePageChange }) => {
  return (
    <Box>
      <Button
        m="5px"
        disabled={currentPage < 1}
        bg="black"
        color="white"
        onClick={() => handlePageChange(-1)}
      >
        Previous
      </Button>
      <Button
        m="5px"
        bg="black"
        color="white"
        p="8px"
        _hover={false}
        _active={false}
        cursor="default"
      >
        {currentPage + 1}
      </Button>
      <Button
        m="5px"
        bg="black"
        color="white"
        onClick={() => handlePageChange(1)}
      >
        Next
      </Button>
    </Box>
  );
};
