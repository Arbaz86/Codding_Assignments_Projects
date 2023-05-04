import { Box, Button, Card, Grid, GridItem, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NoteCard } from "../Components/NoteCard";
import { v4 as uuidv4 } from "uuid";
import { saveLocalData } from "../Utils/localStorage";

const initState = {
  title: "",
  description: "",
  date: "",
};

export const Home = () => {
  const [inputData, setInputData] = useState(initState);
  const [notes, setNotes] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);

  const { title, description } = inputData;

  const getNotesData = () => {
    axios
      .get("https://rich-jade-mite-garb.cyclic.app/notes")
      .then(({ data }) => {
        setNotes(data);
        console.log(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...inputData,
      id: uuidv4(),
    };

    axios
      .post("https://rich-jade-mite-garb.cyclic.app/notes", payload)
      .then(({ data }) => {
        setNotes([...notes, data]);
        console.log(data);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://rich-jade-mite-garb.cyclic.app/notes/${id}`)
      .then(({ data }) => {
        getNotesData();
      });
  };

  const handleBookmark = (payload) => {
    setBookmarked([...bookmarked, payload]);

    saveLocalData("bookmarked", [...bookmarked, payload]);
  };

  useEffect(() => {
    if (notes.length == 0) {
      getNotesData();
    }
  }, []);

  return (
    <Box>
      <Box textAlign="center">
        <form onSubmit={handleSubmit}>
          <Input
            w="200px"
            type="text"
            placeholder="Title of note"
            m="5px"
            onChange={handleChange}
            name="title"
            required
            value={title}
          />
          <Input
            w="200px"
            type="text"
            placeholder="Description"
            m="5px"
            onChange={handleChange}
            name="description"
            required
            value={description}
          />
          <Input
            w="200px"
            type="date"
            m="5px"
            onChange={handleChange}
            required
            name="date"
          />

          <Button type="submit" m="5px" colorScheme="purple" variant="outline">
            Create Notes
          </Button>
        </form>
      </Box>

      <Box m="30px">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {notes?.length > 0 &&
            notes?.map((note) => (
              <GridItem key={note.id}>
                <NoteCard
                  {...note}
                  handleBookmark={handleBookmark}
                  handleDelete={handleDelete}
                />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
