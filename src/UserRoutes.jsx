import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import {
  AdminPanel,
  Cart,
  Checkout,
  CheckoutForm,
  LandingPage,
  OrderHistory,
  ProductDetails,
  ProductListing,
} from "./pages";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/category/:category" element={<ProductListing />} />
      <Route path="/product/:id" Component={ProductDetails} />
      <Route path="/cart" Component={Cart} />
      <Route path="/checkout" Component={Checkout} />
      <Route path="/order-history" Component={OrderHistory} />
      <Route path="/admin" Component={AdminPanel} />
      <Route path="/login" Component={<CheckoutForm />} />
    </Routes>
  );
}

export default UserRoutes;
