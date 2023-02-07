import "../../styles/login-signup.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import validator from "validator";

// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

const SignUp1 = ({ nextStep, handleChange, values }) => {
  const [validated, setValidated] = useState(true);
  const [emailMessage, setEmailMessage] = useState(true);
  const [inputMessage, setInputMessage] = useState(true);

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  function validatePassword() {
    let newPassword = document.getElementById("newPassword");
    let renewPassword = document.getElementById("renewPassword");
    if (
      !(
        newPassword == null ||
        newPassword.value == "" ||
        renewPassword == null ||
        renewPassword.value == ""
      )
    ) {
      if (newPassword.value != renewPassword.value) {
        renewPassword.setCustomValidity("Passwords Does Not Match");
      } else {
        renewPassword.setCustomValidity("");
        document.getElementById("passwordForm").nextStep();
      }
    }
  }

  function validateEmail(input) {
    if (validator.isEmail(input)) {
      if (validator.isEmail(input)) {
        const response = Axios.get(
          "https://rimorin-dental-clinic.herokuapp.com/checkEmail",
          {
            params: {
              email: input,
            },
          }
        ).then((response) => {
          console.log(response.data.status);
          if (response.data.status == "ok") {
            setValidated(false);
            setEmailMessage(
              <div style={{ fontSize: "12px" }}>
                <a class="text-success">
                  <strong>Email is valid.</strong>
                </a>
              </div>
            );
          } else {
            setValidated(true);
            setEmailMessage(
              <div style={{ fontSize: "12px" }}>
                <a class="text-danger">
                  <strong>
                    This email is already in use. Please use another one.
                  </strong>
                </a>
              </div>
            );
          }
        });
      }
    } else {
      setValidated(true);
      setEmailMessage(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>
              Invalid email address.
            </strong>
          </a>
        </div>
      );
    }
  }

  function validateBlankspace(input) {
    const checkString = input.trim();

    if (!checkString) {
      setValidated(true);
      setInputMessage(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>
              Input should contain characters and not only blackspaces.
            </strong>
          </a>
        </div>
      );
    } else {
      setValidated(false);
      setInputMessage(
        <div style={{ fontSize: "12px" }}>
          <a class="text-success">
            <strong> </strong>
          </a>
        </div>
      );
    }
  }

  return (
    <>
      <form id="passwordForm" className="auth-inner-signup" onSubmit={Continue}>
        <div className="titleform">
          <a href="/">Rimorin Dental Clinic</a>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label>
                First name<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={handleChange("fname")}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                defaultValue={values.fname}
                required
              />
            </div>
          </div>

          <div className="col">
            <div className="mb-3 suffix">
              <label>
                Middle Name<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control suffix"
                placeholder="Middle Name"
                onChange={handleChange("mname")}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                defaultValue={values.mname}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="mb-3">
              <label>
                Last Name<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={handleChange("lname")}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                defaultValue={values.lname}
                required
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
                onChange={handleChange("suffix")}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                defaultValue={values.suffix}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>
            Email Address<span class="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={handleChange("email")}
            onBlur={function (event) {
              validateEmail(event.target.value);
            }}
            defaultValue={values.email}
            required
          />
          {emailMessage}
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label>
                Mobile Number<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="9XX-XXX-XXXX"
                onChange={handleChange("mobile")}
                defaultValue={values.mobile}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                maxLength={10}
                required
              />
              {/* <PhoneInput
                country={'ph'}
                placeholder="Enter mobile number"
                onChange={handleChange('mobile')}
                onlyCountries={['ph', 'us']}
                required
              /> */}
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label>
                Telephone Number<span class="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="123-456-789"
                onChange={handleChange("tellphone")}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                defaultValue={values.tellphone}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <label>
              Gender<span class="text-danger">*</span>
            </label>
            <div className="row">
              <div className="col-6">
                <div className="form-check">
                  <label>
                    <input
                      type="radio"
                      onChange={handleChange("gender")}
                      defaultValue={values.gender}
                      className="form-check-input"
                      value="Female"
                      name="gender"
                      required
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check">
                  <input
                    type="radio"
                    onChange={handleChange("gender")}
                    className="form-check-input"
                    name="gender"
                    value="Male"
                    required
                  />{" "}
                  Male
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label>
                Date of Birth<span class="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter birthday"
                onChange={handleChange("bday")}
                defaultValue={values.bday}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>
            Profession<span class="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="(e.g. Student, Government Employee, etc.)"
            onChange={handleChange("profession")}
            defaultValue={values.profession}
            onBlur={function (event) {
              validateBlankspace(event.target.value);
            }}
            required
          />
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label>
                Password<span class="text-danger">*</span>
              </label>
              <input
                id="newPassword"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange("password")}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                defaultValue={values.password}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label>
                Re-enter Password<span class="text-danger">*</span>
              </label>
              <input
                id="renewPassword"
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                onChange={handleChange("confirmPassword")}
                onBlur={function (event) {
                  validateBlankspace(event.target.value);
                }}
                defaultValue={values.confirmPassword}
                required
              />
            </div>
          </div>
        </div>

        <div className="d-grid justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ padding: "10px 30px" }}
            onClick={() => {
              validatePassword();
            }}
            disabled={validated}
          >
            Next
          </button>
          {inputMessage}
        </div>

        <div className="signup-link">
          <p class="text-center">
            Already registered? <a href="/auth/login">Sign In</a>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUp1;
