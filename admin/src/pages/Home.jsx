import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/actions/authAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="flex-column my=3 border bh-light rounded-3 text-center p-3">
        <h1>DashBoard</h1>
        <p className="text-success">
          Welcome {user?.name} || Email: {user?.email}{" "}
        </p>
      </div>
    </Layout>
  );
};

export default Home;
