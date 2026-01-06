import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";
import "./user.css";

const AllUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const { users, loading } = useSelector((state) => state.user);

  return (
    <Layout>
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-semibold text-dark">👥 All Users</h4>
          <span className="badge bg-primary">Total: {users?.length || 0}</span>
        </div>

        {/* Table Card */}
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        <div className="spinner-border text-primary" />
                      </td>
                    </tr>
                  ) : users?.length > 0 ? (
                    users.map((user, i) => (
                      <tr key={user._id}>
                        <td className="fw-medium">{i + 1}</td>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>{user?.phone || "NA"}</td>
                        <td className="text-center">
                          <Link
                            to={`/user-details/${user?._id}`}
                            className="btn btn-sm btn-outline-primary rounded-pill px-3"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-muted">
                        No users found
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

export default AllUser;
