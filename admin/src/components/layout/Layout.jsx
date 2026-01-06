import React from "react";
import Menus from "./Menus";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <Menus />
        </div>
        <div className="col-md-9">
          <div style={{ minHeight: "80vh" }}>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
