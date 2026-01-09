import React from "react";
import "./layout.css";

const Footer = () => {
  return (
    <footer className="admin-footer mt-auto py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <small className="footer-text">
              © {new Date().getFullYear()}{" "}
              <strong>Maan Super Specialist Hospital</strong>. All Rights
              Reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
