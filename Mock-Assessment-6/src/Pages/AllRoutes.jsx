import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";
import { Orders } from "./Orders";
import { Product } from "./Product";
import { ProductDetails } from "./ProductDetails";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};
