import React from "react";
import Layout from "./Layout/Layout";
import { LandingPage, ProductListing } from "./pages";
import { ProductCard } from "./components";
import CheckoutForm from "./pages/CheckoutForm";

function App() {
  return (
    <>
      <Layout>
        <LandingPage />
      </Layout>
    </>
  );
}

export default App;
