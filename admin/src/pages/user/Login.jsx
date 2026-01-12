import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { reset } from "../../redux/slice/authSlice";
import "./user.css";

const Login = () => {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !password) {
      return toast.error("Please provide email and password");
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
    <div className="login-wrapper">
      <div className="login-card card shadow-lg border-0">
        <div className="card-body p-4">
          {/* HEADER */}
          <div className="text-center mb-4">
            <h3 className="fw-bold text-primary mb-1">🏥 Admin Login</h3>
            <p className="text-muted mb-0">Maan Super Specialist Hospital</p>
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg"
              placeholder="admin@example.com"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg"
              placeholder="••••••••"
            />
          </div>

          {/* BUTTON */}
          <button
            className="btn btn-primary w-100 btn-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
