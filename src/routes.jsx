import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import {
  AdminPanel,
  Cart,
  Checkout,
  LandingPage,
  OrderHistory,
  ProductDetails,
  ProductListing,
} from "./pages";

function routes() {
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
      </Switch>
    </Router>
  );
}

export default routes;
