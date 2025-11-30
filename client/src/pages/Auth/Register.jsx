import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "./Auth.css";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(password, name, email);
      setName("");
      setEmail("");
      setPassword("");
      toast.success("SuccessFully Register");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
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
