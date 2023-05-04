import { useState } from "react";
import "./App.css";
import { Login } from "./Components/Login";
import { Navbar } from "./Components/Navbar";
import { Products } from "./Components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Products />
    </div>
  );
}

export default App;
