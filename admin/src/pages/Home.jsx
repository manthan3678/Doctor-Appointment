import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/actions/authAction";
import "../index.css"
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container py-4">
        <div className="card dashboard-card shadow-sm border-0">
          <div className="card-body text-center">
            <h2 className="fw-bold mb-2">Dashboard</h2>

            <p className="text-success mb-0">
              Welcome <strong>{user?.name}</strong>
            </p>

            <p className="text-muted">
              Email: <span className="fw-medium">{user?.email}</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
