import React from "react";
import Menus from "./Menus";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* LEFT SIDEBAR */}
        <div className="col-md-3 col-lg-2 sidebar-fixed">
          <Menus />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-9 col-lg-10 content-scroll">
          <div className="p-4" style={{minHeight:"90vh"}}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
