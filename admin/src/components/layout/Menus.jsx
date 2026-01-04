import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

const Menus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("appData");
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <div className="menu-wrapper d-flex">
      <div className="menu-card">
        <h4 className="menu-title">Admin Menu</h4>

        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              🏠 Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/all-users"
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              👤 Users
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/all-doctors"
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              🩺 Doctors
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/all-appointment"
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              📅 Appointments
            </NavLink>
          </li>
          <button className="btn logout-btn" onClick={handleLogout}>
            📤 Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Menus;
