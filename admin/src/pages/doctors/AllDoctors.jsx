import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllDoctor } from "../../redux/actions/doctorAction";
import "./doctor.css";

const AllDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllDoctor());
  }, [dispatch]);

  const { doctors, loading } = useSelector((state) => state.doctor);

  return (
    <Layout>
      <div className="container py-4">
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-semibold mb-0">🩺 All Doctors</h4>

          <button
            className="btn btn-primary rounded-pill px-4"
            onClick={() => navigate("/add-doctor")}
          >
            + Add Doctor
          </button>
        </div>

        {/* TABLE CARD */}
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="all-doctor-table table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Speciality</th>
                    <th>Fees</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        <div className="spinner-border text-primary" />
                      </td>
                    </tr>
                  ) : doctors?.length > 0 ? (
                    doctors.map((doc, i) => (
                      <tr key={doc._id}>
                        <td>{i + 1}</td>
                        <td className="fw-medium">{doc?.name}</td>
                        <td>{doc?.speciality}</td>
                        <td>₹{doc?.fees}</td>
                        <td>
                          <span
                            className={`badge ${
                              doc?.available ? "bg-success" : "bg-danger"
                            }`}
                          >
                            {doc?.available ? "Available" : "Unavailable"}
                          </span>
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/doctor-details/${doc?._id}`}
                            className="btn btn-sm btn-outline-primary rounded-pill px-3"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-muted">
                        No doctors found
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

export default AllDoctors;
