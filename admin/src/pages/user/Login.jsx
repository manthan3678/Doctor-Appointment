import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    toast.success("Login Successfully");
    navigate("/home");
  };
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <h1>Admin Panel</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
