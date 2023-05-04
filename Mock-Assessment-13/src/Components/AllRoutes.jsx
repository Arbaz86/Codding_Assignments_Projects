import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/products";
import { Search } from "../Pages/Search";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};
