import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "./Auth.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";
import { reset } from "../../redux/slice/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !password) {
      return toast.error("Provide All Details");
    }
    dispatch(register({ name, email, password }));
  };
  useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setPassword("");
      toast.success("SuccessFully Register");
      navigate("/login");
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
        <h2>Create An Account</h2>
        <p>Please Enter Your Details To Register</p>
        <div className="form-group mb-3">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={!name || !email || !password}
          onClick={handleSubmit}
        >
          Register
        </button>
        <p>
          Already a User ? <NavLink to={"/login"}>Login Here</NavLink>
        </p>
      </div>
    </>
  );
};

export default Register;
