import React from "react";
import Topbar from "./Topbar";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router";
import Logo from "../../../assets/Logo1.jpg";
const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="row">
          <div className="col-md-3">
            <NavLink to="/">
              <img src={Logo} alt="logo" className="brand-logo" />
            </NavLink>
          </div>
          <div className="col-md-9">
            {/* Top Bar menu */}
            <div>
              <Topbar />
            </div>
            {/* Main Menu */}
            <div>
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
