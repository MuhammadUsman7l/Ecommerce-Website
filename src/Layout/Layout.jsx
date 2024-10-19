import React from "react";
import { Footer, Header } from "../components";
import { BrowserRouter as Router } from "react-router-dom";
import UserRoutes from "../UserRoutes";

function Layout() {
  return (
    <>
      <Header />
      <UserRoutes />
      <Footer />
    </>
  );
}

export default Layout;
