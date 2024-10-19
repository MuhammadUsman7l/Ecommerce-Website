import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import {
  AdminPanel,
  Cart,
  Checkout,
  CheckoutForm,
  ContactPage,
  LandingPage,
  OrderHistory,
  ProductDetails,
  ProductListing,
} from "./pages";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/category/:category" element={<ProductListing />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product/:code" element={<ProductDetails />} />
      <Route path="/cart" Component={Cart} />
      <Route path="/checkout" Component={Checkout} />
      <Route path="/order-history" Component={OrderHistory} />
      <Route path="/admin" Component={AdminPanel} />
      <Route path="/login" element={<CheckoutForm />} />
    </Routes>
  );
}

export default UserRoutes;
