import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ padding: "1rem 3rem" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
