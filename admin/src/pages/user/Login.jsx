import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { reset } from "../../redux/slice/authSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (!email || !password) {
      return toast.error("Please provide email or password");
    }
    dispatch(login({ email, password }));
  };
  const { success, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (success) {
      toast.success("Login Successfully");
      navigate("/home");
      dispatch(reset());
    }
    if (error) {
      toast.error(error);
      dispatch(reset());
    }
  }, [success, error, dispatch, navigate]);
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
