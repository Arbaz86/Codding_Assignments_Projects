import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../Pages/Admin";
import { Data } from "../Pages/Data";
import { Homepage } from "../Pages/Homepage";
import { Login } from "../Pages/Login";
import { Reports } from "../Pages/Reports";
import { User } from "../Pages/User";
import { PrivateRoutes } from "./PrivateRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/data"
        element={
          <PrivateRoutes>
            <Data />
          </PrivateRoutes>
        }
      />
      <Route
        path="/report"
        element={
          <PrivateRoutes>
            <Reports />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
