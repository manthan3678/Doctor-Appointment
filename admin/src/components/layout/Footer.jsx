import React from "react";
import "./layout.css";

const Footer = () => {
  return (
    <footer className="admin-footer mt-auto">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <span className="footer-text">
              © {new Date().getFullYear()} Maan Super Specialist Hospital. All
              Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
