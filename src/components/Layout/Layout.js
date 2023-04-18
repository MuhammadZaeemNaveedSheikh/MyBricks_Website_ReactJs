import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ children, bg }) {
  return (
    <div style={{
      maxWidth: "100%",
      overflowX: "hidden",
    }}>
      <Header bg={bg} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
