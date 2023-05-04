import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import SingleRestaurantPage from "./SingleRestaurantPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/restaurants/:id"
        element={
          <PrivateRoute>
            <SingleRestaurantPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
