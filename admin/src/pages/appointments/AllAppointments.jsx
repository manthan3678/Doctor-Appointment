import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAppointment } from "../../redux/actions/appoitmentAction";

const AllAppointments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAppointment());
  }, [dispatch]);

  const { appointments, loading } = useSelector((state) => state.appointments);

  return (
    <Layout>
      <div className="container py-4">
      {/* PAGE HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-0">Appointments</h3>
          <small className="text-muted">Manage and view all appointments</small>
        </div>
      </div>

      {/* CARD */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary mb-2" />
              <p className="mb-0 text-muted">Loading appointments...</p>
            </div>
          ) : appointments?.length === 0 ? (
            <div className="text-center py-5 text-muted">
              No appointments found
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Appointment ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((app, i) => (
                    <tr key={app._id}>
                      <td className="fw-semibold">{i + 1}</td>

                      <td className="text-muted">{app._id.slice(0, 8)}...</td>

                      <td>{app.slotdate}</td>

                      <td>
                        <span className="fw-semibold">₹ {app.amount}</span>
                      </td>

                      <td>
                        <span
                          className={`badge rounded-pill ${
                            app.status === "confirmed"
                              ? "bg-success"
                              : app.status === "pending"
                              ? "bg-warning text-dark"
                              : "bg-danger"
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>

                      <td className="text-end">
                        <Link
                          to={`/appointment-details/${app._id}`}
                          className="btn btn-sm btn-outline-primary rounded-pill px-3"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        </div>
        </div>
    </Layout>
  );
};

export default AllAppointments;
