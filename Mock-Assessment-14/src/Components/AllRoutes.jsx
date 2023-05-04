import React from "react";
import { Route, Routes } from "react-router-dom";
import { Bookmarks } from "../Pages/Bookmarks";
import { Home } from "../Pages/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  );
};
