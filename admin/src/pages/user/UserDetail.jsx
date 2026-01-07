import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserDeatils } from "../../redux/actions/userAction";
import { useParams } from "react-router-dom";
import "./user.css";

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDeatils(id));
  }, [dispatch, id]);

  const { user, appointments, loading } = useSelector((state) => state.user);

  return (
    <Layout>
      <div className="container py-4">
        {/* PAGE TITLE */}
        <h4 className="fw-semibold mb-4">👤 User Details</h4>

        {/* USER CARD */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <div className="row align-items-center">
              {/* IMAGE */}
              <div className="col-md-3 text-center">
                <img
                  src={
                    user?.image
                      ? `data:image/jpeg;base64,${user.image}`
                      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="User"
                  className="user-avatar mb-3"
                />
              </div>

              {/* INFO */}
              <div className="col-md-9">
                <h5 className="mb-2 fw-semibold">{user?.name}</h5>

                <div className="row text-muted">
                  <div className="col-sm-6 mb-2">
                    <strong>Email:</strong> {user?.email}
                  </div>
                  <div className="col-sm-6 mb-2">
                    <strong>Phone:</strong> {user?.phone || "NA"}
                  </div>
                  <div className="col-sm-12">
                    <strong>Address:</strong> {user?.address || "NA"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* APPOINTMENTS */}
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="px-3 py-3 border-bottom">
              <h5 className="mb-0 fw-semibold">📅 Appointments</h5>
            </div>

            <div className="table-responsive appointment-table">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Doctor</th>
                    <th>Fees</th>
                    <th>Status</th>
                    <th>Payment</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        <div className="spinner-border text-primary" />
                      </td>
                    </tr>
                  ) : appointments?.length > 0 ? (
                    appointments.map((a, i) => (
                      <tr key={a._id || i}>
                        <td>{i + 1}</td>
                        <td>{a?.slotdate}</td>
                        <td>{a?.doctorId}</td>
                        <td>₹{a?.amount}</td>
                        <td>
                          <span
                            className={`badge ${
                              a?.status === "approved"
                                ? "bg-success"
                                : a?.status === "pending"
                                ? "bg-warning text-dark"
                                : "bg-secondary"
                            }`}
                          >
                            {a?.status}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              a?.payment ? "bg-primary" : "bg-dark"
                            }`}
                          >
                            {a?.payment ? "ONLINE" : "CASH"}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-muted">
                        No appointments found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetail;
