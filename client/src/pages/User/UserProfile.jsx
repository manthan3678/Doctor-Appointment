import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import EditUser from "./EditUser";
const UserProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    navigate("/login");
    toast.success("Logout SuccessFully");
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h4 className="text-center">Manage Your Account & Appointment</h4>
          <div className="col-md-3">
            <img src="" alt="userprofile" className="card p-2" width={200} />
          </div>
          <div className="col-md-8 mt-3">
            <div className="user-container mb-3">
              <h6>Name</h6>
              <h6>Gender</h6>
              <h6>Email</h6>
              <h6>Phone</h6>
              <h6>Address</h6>
            </div>
            <div className="button-container mt-5"></div>
            <button
              className="btn btn-warning"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-pen-to-square"></i> Edit{" "}
            </button>
            <button
              className="btn btn-primary ms-3"
              onClick={() => navigate("/user/appointments")}
            >
              <i className="fa-solid fa-calendar-check"></i> Appointment{" "}
            </button>
            <button className="btn btn-danger ms-3" onClick={handleLogout}>
              <i className="fa-solid fa-outdent"></i> Logout{" "}
            </button>
          </div>
        </div>
      </div>
      {/* Model */}
      {isOpen && <EditUser isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default UserProfile;
