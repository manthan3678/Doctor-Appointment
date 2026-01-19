import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/actions/authAction";
import { getAllStats } from "../redux/actions/userAction";
import { FaUsers, FaUserMd, FaRupeeSign } from "react-icons/fa";
import "../index.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getAllStats());
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);
  const { stats } = useSelector((state) => state.user);

  return (
    <Layout>
      <div className="container py-4">
        {/* ================= HEADER ================= */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card dashboard-header border-0 shadow-sm">
              <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div>
                  <h3 className="fw-bold mb-1">Admin Dashboard</h3>
                  <p className="text-muted mb-0">
                    Welcome back, <strong>{user?.name}</strong>
                  </p>
                </div>

                <div className="text-md-end mt-3 mt-md-0">
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                    {user?.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATISTICS ================= */}
        <div className="row g-4">
          {/* Total Users */}
          <div className="col-md-4">
            <div className="card stat-card stat-users border-0 shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="stat-icon bg-primary">
                  <FaUsers />
                </div>
                <div className="ms-3">
                  <p className="mb-1 text-muted fw-semibold">Total Users</p>
                  <h4 className="fw-bold mb-0">{stats?.totalUser || 0}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Total Doctors */}
          <div className="col-md-4">
            <div className="card stat-card stat-doctors border-0 shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="stat-icon bg-success">
                  <FaUserMd />
                </div>
                <div className="ms-3">
                  <p className="mb-1 text-muted fw-semibold">Total Doctors</p>
                  <h4 className="fw-bold mb-0">{stats?.totalDoctor || 0}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Total Earnings */}
          <div className="col-md-4">
            <div className="card stat-card stat-earning border-0 shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="stat-icon bg-warning text-dark">
                  <FaRupeeSign />
                </div>
                <div className="ms-3">
                  <p className="mb-1 text-muted fw-semibold">Total Earnings</p>
                  <h4 className="fw-bold mb-0">₹ {stats?.totalEarning || 0}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
