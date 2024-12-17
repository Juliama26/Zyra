import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

import men from "./assets/banner_mens.png";
import women from "./assets/banner_women.png";
import kids from "./assets/banner_kids.png";
import { Login, Register } from "./pages/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={men} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={women} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kids} category="kid" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
