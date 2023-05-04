import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { JobPosting } from "../Pages/JobPosting";
import { JobListing } from "../Pages/JobListing";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posting" element={<JobPosting />} />
      <Route path="/listing" element={<JobListing />} />
    </Routes>
  );
};
