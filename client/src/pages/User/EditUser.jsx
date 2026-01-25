import React from "react";
import "./User.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  getUserDeatils,
  updateUserDetails,
} from "../../redux/actions/userAction";
const EditUser = ({ isOpen, onClose }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserDeatils());
  }, [dispatch]);
  const { user, success, error, updateSuccess } = useSelector(
    (state) => state.user,
  );

  const [name, setName] = useState(user?.name);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setGender(user.gender || "");
      setPhone(user.phone || "");
      setDob(user.dob || "");
      setAddress(user.address || "");
    }
  }, [user]);
  const handleUpdate = () => {
    console.log(name, phone, address, dob, gender);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("address", address);
    if (image instanceof File) {
      formData.append("image", image);
    }
    dispatch(updateUserDetails({ id, formData }));
  };
  useEffect(() => {
    if (updateSuccess) {
      toast.success("User Details Updated");
      navigate(`/user/profile/${user?._id}`);
    }

    if (error) {
      toast.error(error);
    }
  }, [dispatch, updateSuccess, error, navigate]);
  if (!isOpen) return null;

  return (
    <>
      <div className="editModal modal d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <div className="mod-detail d-flex flex-column">
                <img
                  src={
                    user?.image
                      ? `data:image/jpeg;base64,${user?.image}`
                      : `https://cdn-icons-png.flaticon.com/512/149/149071.png`
                  }
                  alt="userpicture"
                  height={80}
                  width={80}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="form-control"
                />
                <input
                  type="text"
                  name=""
                  value={name}
                  id=""
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="d-flex flex-row">
                  <select
                    className="m-1"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value={gender} selected>
                      Male
                    </option>
                    <option value={gender} selected>
                      Female
                    </option>
                  </select>
                  <input
                    type="date"
                    placeholder="DOB"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone"
                  name=""
                  id=""
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  name=""
                  id=""
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
