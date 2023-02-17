import "../../styles/login-signup.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import validator from "validator";

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

  function validatePassword(input) {
    const newPassword = input;
    const containsUppercase = /[A-Z]/.test(newPassword);
    const containsNumber = /\d/.test(newPassword);
    const containsBlankSpaces =/\s/.test(newPassword);
    const isPasswordValid =
      newPassword.length >= 6 &&
      containsUppercase &&
      containsNumber &&
      !containsBlankSpaces;

    if (!isPasswordValid) {
      setPasswordError(
        <div style={{ fontSize: "12px" }} className="text-danger">
          <strong>
            Password must be at least 6 characters long and contain at least one
            capital letter (A-Z) and one number (0-9). <br />
            Do not put any spaces in your password.
          </strong>
        </div>
      );
      setIsFormValid(true);
    } else {
      setPasswordError(
        <div style={{ fontSize: "12px" }} className="text-success">
          <strong>Password is valid!</strong>
        </div>
      );
      setIsFormValid(false);
    }
    return isPasswordValid;
  }

  //Password match Validator
  const [passwordNotMatchError, setPasswordNotMatchError] = useState("");

  function validatePasswordMatch() {
    const newPassword = document.getElementById("newPassword").value;
    const reEnteredPassword =
      document.getElementById("reEnteredPassword").value;
    const isPasswordMatch = newPassword === reEnteredPassword;

    if (!isPasswordMatch) {
      setPasswordNotMatchError(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>Passwords do not match!</strong>
          </a>
        </div>
      );
      setIsFormValid(true);
    } else {
      setPasswordNotMatchError(
        <div style={{ fontSize: "12px" }}>
          <a class="text-success">
            <strong>Passwords match!</strong>
          </a>
        </div>
      );
      setIsFormValid(false);
    }
    return isPasswordMatch;
  }

  //Email Validator
  const [emailMessage, setEmailMessage] = useState(true);
  function validateEmail(input) {
    if (validator.isEmail(input)) {
      if (validator.isEmail(input)) {
        const response = Axios.get("http://localhost:3001/checkEmail", {
          params: {
            email: input,
          },
        }).then((response) => {
          console.log(response.data.status);
          if (response.data.status == "ok") {
            setEmailMessage(
              <div style={{ fontSize: "12px" }}>
                <a class="text-success">
                  <strong>Email is valid!</strong>
                </a>
              </div>
            );
            setIsFormValid(false);
          } else {
            setEmailMessage(
              <div style={{ fontSize: "12px" }}>
                <a class="text-danger">
                  <strong>
                    This email is already in use. Please use another one.
                  </strong>
                </a>
              </div>
            );
            setIsFormValid(true);
          }
        });
      }
    }
  }

  //Special Characters input validation
  const [specialCharacterError, setSpecialCharacterError] = useState(true);
  function validateSpecialCharacters(input, field) {
    const hasSpecialCharacters = /[^A-Za-z0-9\sÑñ]/.test(input);

    if (hasSpecialCharacters) {
      setSpecialCharacterError((prevErrors) => ({
        ...prevErrors,
        [field]: (
          <div style={{ fontSize: "12px" }}>
            <a class="text-danger">
              <strong>Please do not use special characters.</strong>
            </a>
          </div>
        ),
      }));
      setIsFormValid(true);
    } else {
      setSpecialCharacterError((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
      setIsFormValid(false);
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
  function suffixValidateBlankspace(input, field) {
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
    } else {
      setSuffixBlankInputError((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
      setIsFormValid(false);
    }
  }

  useEffect(() => {
    var item = document.getElementsByClassName("form-check-input");
    for (var i = 0; i < item.length; i++) {
      if (item.item(i).value == values.gender) {
        item.item(i).checked = true;
      }
    }
  }, []);

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
                First Name<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={handleChange("fname")}
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "fname");
                  validateSpecialCharacters(e.target.value, "fname");
                }}
                defaultValue={values.fname}
                required
              />
              {blankInputError.fname}
              {specialCharacterError.fname}
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
                  validateSpecialCharacters(e.target.value, "mname");
                }}
                defaultValue={values.mname}
                required
              />
              {blankInputError.mname}
              {specialCharacterError.mname}
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
                  validateSpecialCharacters(e.target.value, "lname");
                }}
                defaultValue={values.lname}
                required
              />
              {blankInputError.lname}
              {specialCharacterError.lname}
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
                  setSpecialCharacterError(e.target.value, "suffix");
                }}
                defaultValue={values.suffix}
              />
              {suffixBlankInputError.suffix}
              {specialCharacterError.suffix}
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
              validateEmail(e.target.value);
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
              <label>
                Mobile Number<span class="text-danger">*</span>
              </label>
              <div className="input-group mb-3">
                <div className="input-group=prepend">
                  <span class="input-group-text">+63</span>
                </div>
              <input
                type="text"
                className="form-control"
                placeholder="9XX-XXX-XXXX"
                onChange={handleChange("mobile")}
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "mobile");
                  validateSpecialCharacters(e.target.value, "mobile");
                }}
                defaultValue={values.mobile}
                maxLength={10}
                required
              />
            </div>
            {blankInputError.mobile}
            {specialCharacterError.mobile}
          </div>

          <div className="col-6">
              <label>
                Telephone Number<span class="text-danger">*</span>
              </label>
              <div className="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">+02</span>
                </div>
              <input
                type="tel"
                className="form-control"
                placeholder="1234-5678"
                onChange={handleChange("tellphone")}
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "tellphone");
                  validateSpecialCharacters(e.target.value, "tellphone");
                }}
                defaultValue={values.tellphone}
                maxLength={8}
                required
              />
            </div>
            {blankInputError.tellphone}
            {specialCharacterError.tellphone}
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
              validateSpecialCharacters(e.target.value, "profession");
            }}
            defaultValue={values.profession}
            required
          />
          {blankInputError.profession}
          {specialCharacterError.profession}
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
                onBlur={function (e) {
                  validatePassword(e.target.value);
                }}
                defaultValue={values.password}
                required
              />
              {passwordError}
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
                }}
                defaultValue={values.confirmPassword}
                required
              />
              {passwordNotMatchError}
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
