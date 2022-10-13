import React from "react";
import "../styles/sign-up.css";

const SignUp1 = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="auth-wrapper">
      <div className="image-banner">
        <img src={"./img/hero-img.png"} />
      </div>
      <form className="auth-inner">
        <p id="titleform">
          <h4>Rimorin Dental Clinic</h4>
        </p>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            // onChange={(e) => this.setState({ fname: e.target.value})}
            // required
          />
        </div>

        <div className="row">
          <div className="col-8">
            <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                // onChange={(e) => this.setState({ lname: e.target.value})}
                // required
              />
            </div>
          </div>

          <div className="col-4">
            <div className="mb-3 suffix">
              <label>Suffix</label>
              <input
                type="text"
                className="form-control suffix"
                placeholder="(e.g. Jr. , Sr., II)"
                // onChange={(e) => this.setState({ suffix: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            // onChange={(e) => this.setState({ email: e.target.value})}
            // required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            // onChange={(e) => this.setState({ password: e.target.value})}
            // required
          />
        </div>

        <div className="row mb-3">
          <label>Gender</label>
          <div className="col-4">
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  // checked = {this.state.gender === "female"}
                  // onChange = {this.onValueChange}
                  className="form-check-input"
                  value="female"
                  name="gender"
                  // required
                />{" "}
                <span>Female</span>
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input
                type="radio"
                // checked = {this.state.gender === "male"}
                // onChange = {this.onValueChange}
                className="form-check-input"
                name="gender"
                value="male"
                // required
              />{" "}
              Male
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <div className="mb-3">
              <label>Mobile Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="09XXXXXXXXX"
                // onChange={(e) => this.setState({ fname: e.target.value})}
                // required
              />
            </div>
          </div>

          <div className="col-5">
            <div className="mb-3">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter birthday"
                // onChange={(e) => this.setState({ email: e.target.value})}
                // required
              />
            </div>
          </div>
        </div>

        <div className="d-grid justify-content-center">
          <button
            onClick={Continue}
            type="submit"
            className="btn btn-primary"
            style={{ padding: "10px 30px" }}
          >
            Next
          </button>
        </div>

        <p className="forgot-password text-right">
          Already registered? <a href="/login">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp1;
