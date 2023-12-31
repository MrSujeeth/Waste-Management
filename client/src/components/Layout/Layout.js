import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (porps) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "85vh" }}>{porps.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
