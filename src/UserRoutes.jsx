import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    <Router>
      <Switch>
        <Route path="/" Component={LandingPage} />
        <Route path="/products" Component={ProductListing} />
        <Route path="/product/:id" Component={ProductDetails} />
        <Route path="/cart" Component={Cart} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/order-history" Component={OrderHistory} />
        <Route path="/admin" Component={AdminPanel} />
        <Route path="/login" Component={<CheckoutForm />} />
      </Switch>
    </Router>
  );
}

export default UserRoutes;
