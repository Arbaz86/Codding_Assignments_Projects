import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BookmarkCard } from "../Components/BookmarkCard";
import { getLocalData } from "../Utils/localStorage";

export const Bookmarks = () => {
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    let data = getLocalData("bookmarked");
    setBookmarked(data);
  }, []);

  console.log(bookmarked);
  return (
    <Box>
      <Heading textAlign="center">Bookmarked</Heading>
      <Box m="30px">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {bookmarked?.length > 0 &&
            bookmarked?.map((note) => (
              <GridItem key={note.id}>
                <BookmarkCard {...note} />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
