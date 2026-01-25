import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "./Auth.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { reset } from "../../redux/slice/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success, user } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(login({ email, password }));
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  useEffect(() => {
    if (success) {
      setEmail("");
      setPassword("");
      toast.success("SuccessFully Login");
      navigate(`/user/profile/${user?._id}`);
      dispatch(reset());
    }
    if (error) {
      console.log(error);
      toast.error(error);
      dispatch(reset());
    }
  }, [dispatch, navigate, success, error]);
  return (
    <>
      <div className="auth-container">
        <div className="card">
          <h2>Login</h2>
          <p>please enter your email & password</p>
          <div className="form-group mb-3"></div>
          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            disabled={!email || !password}
            onClick={handleSubmit}
          >
            LOGIN
          </button>
          <p className="mt-3">
            {" "}
            Not A user ? <NavLink to="/register">Register here!</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
