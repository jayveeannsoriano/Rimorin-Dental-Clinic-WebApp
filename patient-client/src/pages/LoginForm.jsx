import React, { useState, useRef } from "react";
import { login } from "../actions/authActions";

export default function LoginForm() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await login(username, password);
  //   localStorage.setItem("token", response)
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="#">Forgot password?</a>
        </p>
        <p className="forgot-password text-right">
          <a href="/sign-up">Register</a>
        </p>
      </form>
    </div>
  );
}

