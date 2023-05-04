import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { Signin } from "../Pages/Signin";
import { Signup } from "../Pages/Signup";
import { Timeline } from "../Pages/Timeline";
import { UserProfile } from "../Pages/UserProfile";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/timeline"
        element={
          <PrivateRoute>
            <Timeline />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
