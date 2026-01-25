import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import EditUser from "./EditUser";
import { useDispatch, useSelector } from "react-redux";
import { getUserDeatils } from "../../redux/actions/userAction";
const UserProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    navigate("/login");
    toast.success("Logout SuccessFully");
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDeatils());
  }, [dispatch]);
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h4 className="text-center">Manage Your Account & Appointment</h4>
          <div className="col-md-3">
            <img
              src={
                user?.image
                  ? `data:image/jpeg;base64,${user.image}`
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="User Profile"
              className="card user-avatar p-2"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="col-md-8 mt-3">
            <div className="user-container mb-3">
              <h6>Name: {user?.name}</h6>
              <h6>Gender: {user?.gender}</h6>
              <h6>Email: {user?.email}</h6>
              <h6>Phone: {user?.phone}</h6>
              <h6>Address: {user?.address}</h6>
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
