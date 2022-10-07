import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <div
          style={{
            flex: 1,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
