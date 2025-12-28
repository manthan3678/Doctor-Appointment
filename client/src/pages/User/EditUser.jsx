import React from "react";
import "./User.css";
const EditUser = ({ isOpen, onClose }) => {
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
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="userpicture"
                  height={80}
                  width={80}
                />
                <input type="file" name="" id="" />
                <input type="text" name="" id="" placeholder="Name" />
                <div className="d-flex flex-row">
                  <select className="m-1">
                    <option value={"male"} selected>
                      Male
                    </option>
                    <option value={"female"} selected>
                      Female
                    </option>
                  </select>
                  <input type="date" placeholder="DOB" />
                </div>
                <input type="text" placeholder="Phone" name="" id="" />
                <input type="text" placeholder="Address" name="" id="" />
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
              <button type="button" className="btn btn-primary">
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
