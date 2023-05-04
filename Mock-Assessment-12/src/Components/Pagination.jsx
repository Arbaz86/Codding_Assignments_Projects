import { Box, Button } from "@chakra-ui/react";
import React from "react";

const PAGINATION_RANGE = 10;

function Pagination({ currentPage, totalPages, handlePageChange }) {
  const start = Math.max(0, currentPage - PAGINATION_RANGE / 2);
  const end = Math.min(totalPages, start + PAGINATION_RANGE);

  const pages = [];
  for (let i = start; i < end; i++) {
    pages.push(
      <Button
        key={i}
        style={{ border: i === currentPage ? "2px solid red" : "" }}
        onClick={() => handlePageChange(i)}
      >
        {i + 1}
      </Button>
    );
  }

  return (
    <Box textAlign="center" m="10px">
      <Button onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </Button>
      {pages}
      {currentPage < totalPages && (
        <Button onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
      )}
    </Box>
  );
}

export default Pagination;
