import "../../styles/login-signup.css";
import Axios from "axios";
import React, { useState } from "react";
import validator from "validator";
import Alert from "react-bootstrap/Alert";
import Form from 'react-bootstrap/Form';

const SignUp1 = ({ nextStep, handleChange, values }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const Continue = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsFormValid(true);
    nextStep();
  };

  //Password Validator
  const [passwordError, setPasswordError] = useState("");

  function validatePassword() {
    let newPassword = document.getElementById("newPassword").value;
        
    const containsUppercase = /[A-Z]/.test(newPassword);
    const containsNumber = /\d/.test(newPassword);
    const isPasswordValid =
      newPassword.length >= 6 && containsUppercase && containsNumber;

    !isPasswordValid
      ? setPasswordError(
          <div style={{ fontSize: "12px" }} className="text-danger">
            <strong>
              Password must be at least 6 characters long and contain at least
              one capital letter (A-Z) and one number (0-9)
            </strong>
          </div>
        )
      : setPasswordError(
          <div style={{ fontSize: "12px" }} className="text-success">
            <strong>Password is valid!</strong>
          </div>
        );

    return isPasswordValid;
  }

  //Password match Validator
  const [passwordNotMatchError, setPasswordNotMatchError] = useState("");

  function validatePasswordMatch(input) {
    let newPassword = document.getElementById("newPassword").value;
    let reEnteredPassword = document.getElementById("reEnteredPassword").value;

    newPassword !== reEnteredPassword
      ? setPasswordNotMatchError(
          <div style={{ fontSize: "12px" }}>
            <a class="text-danger">
              <strong>Passwords does not match!</strong>
            </a>
          </div>
        )
      : setPasswordNotMatchError(
          <div style={{ fontSize: "12px" }}>
            <a class="text-success">
              <strong>Passwords match!</strong>
            </a>
          </div>
        );
  }

  //Email Validator
  const [emailMessage, setEmailMessage] = useState(true);
  function validateEmail(input) {
    if (validator.isEmail(input)) {
      if (validator.isEmail(input)) {
        const response = Axios.get(
          "http://localhost:3001/checkEmail",
          {
            params: {
              email: input,
            },
          }
        ).then((response) => {
          console.log(response.data.status);
          if (response.data.status == "ok") {
            setIsFormValid(false);
            setEmailMessage(
              <div style={{ fontSize: "12px" }}>
                <a class="text-success">
                  <strong>Email is valid!</strong>
                </a>
              </div>
            );
          } else {
            setIsFormValid(true);
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
    }
  }

  //Blank input validator
  const [blankInputError, setBlankInputError] = useState(true);
  function validateBlankspace(input, field) {
    const trimmedInput = input.trim();
    const hasBlankspace = input !== trimmedInput;
    
    if (hasBlankspace) {
      setBlankInputError((prevErrors) => ({
        ...prevErrors,
        [field]: (
          <div style={{ fontSize: "12px" }}>
            <a class="text-danger">
              <strong>Blank spaces are not allowed.</strong>
            </a>
          </div>
        ),
      }));
      setIsFormValid(true);
    } else if (!trimmedInput) {
      setBlankInputError((prevErrors) => ({
        ...prevErrors,
        [field]: (
          <div style={{ fontSize: "12px" }}>
            <a class="text-danger">
              <strong>Please fill in this field.</strong>
            </a>
          </div>
        ),
      }));
      setIsFormValid(true);
    } else {
      setBlankInputError((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
      setIsFormValid(false);
    }
  }

  //Suffix Blankspace input validator
  const [suffixBlankInputError, setSuffixBlankInputError] = useState(true);
  function suffixValidateBlankspace(input, field){
    const trimmedInput = input.trim();
    const hasBlankspace = input !== trimmedInput;
    
    if (hasBlankspace) {
      setSuffixBlankInputError((prevErrors) => ({
        ...prevErrors,
        [field]: (
          <div style={{ fontSize: "12px" }}>
            <a class="text-danger">
              <strong>Blank spaces are not allowed.</strong>
            </a>
          </div>
        ),
      }));
      setIsFormValid(true);
  }else {
    setSuffixBlankInputError((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
    setIsFormValid(false);
  }
}
  
  return (
    <>
      <form
        id="passwordForm"
        className="auth-inner-signup"
        isFormValid={isFormValid}
        onSubmit={Continue}
      >
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
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "fname");
                }}
                defaultValue={values.fname}
                required
              />
              {blankInputError.fname}
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
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "mname");
                }}
                defaultValue={values.mname}
                required
              />
              {blankInputError.mname}
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
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "lname");
                }}
                defaultValue={values.lname}
                required
              />
              {blankInputError.lname}
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
                onBlur={function (e) {
                  suffixValidateBlankspace(e.target.value, "suffix");
                }}
                defaultValue={values.suffix}
              />
              {suffixBlankInputError.suffix}
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
            onBlur={function (e) {
              validateEmail(e.target.value)
              validateBlankspace(e.target.value, "email");
            }}
            defaultValue={values.email}
            required
          />
          {emailMessage}
          {blankInputError.email}
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
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "mobile");
                }}
                defaultValue={values.mobile}
                maxLength={10}
                required
              />
              {blankInputError.mobile}
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label>
                Telephone Number
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="123-456-789"
                onChange={handleChange("tellphone")}
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "tellphone");
                }}
                defaultValue={values.tellphone}
                maxLength={10}
              />
              {blankInputError.tellphone}
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
                      onBlur={function (e) {
                        validateBlankspace(e.target.value, "gender");
                      }}
                      className="form-check-input"
                      value="Female"
                      name="gender"
                      required
                    />
                    <span>Female</span>
                    {blankInputError.gender}
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check">
                  <input
                    type="radio"
                    onChange={handleChange("gender")}
                    onBlur={function (e) {
                      validateBlankspace(e.target.value, "gender");
                    }}
                    className="form-check-input"
                    name="gender"
                    value="Male"
                    required
                  />
                  <span>Male</span>
                  {blankInputError.gender}
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
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "bday");
                }}
                defaultValue={values.bday}
                required
                min="1960-01-01"
                max="2005-12-31"
              />
              {blankInputError.bday}
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
            onBlur={function (e) {
              validateBlankspace(e.target.value, "profession");
            }}
            defaultValue={values.profession}
            required
          />
          {blankInputError.profession}
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
                onChange={(e) => {
                  handleChange("password")(e);
                }}
                onBlur={function (e) {
                  validatePassword(e.target.value);
                  validateBlankspace(e.target.value, "password");
                }}
                defaultValue={values.password}
                required
              />
              {passwordError}
              {blankInputError.password}
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label>
                Re-enter Password<span class="text-danger">*</span>
              </label>
              <input
                id="reEnteredPassword"
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                onChange={handleChange("confirmPassword")}
                onBlur={function (e) {
                  validatePasswordMatch(e.target.value);
                  validateBlankspace(e.target.value, "confirmPassword");
                }}
                defaultValue={values.confirmPassword}
                required
              />
              {passwordNotMatchError}
              {blankInputError.confirmPassword}
            </div>
          </div>
        </div>

        <div className="d-grid justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ padding: "10px 30px" }}
            disabled={isFormValid}
          >
            Next
          </button>
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
