import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { Countries } from "./Pages/Countries";

function App() {
  return (
    <Box className="App">
      <Countries />
    </Box>
  );
}

export default App;
