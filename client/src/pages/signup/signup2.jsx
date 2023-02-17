import "../../styles/login-signup.css";
import React, { useState } from "react";

const SignUp2 = ({ prevStep, nextStep, handleChange, values }) => {
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

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

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

  //Special Characters input validation
  const [specialCharacterError, setSpecialCharacterError] = useState(true);
  function validateSpecialCharacters(input, field){
    const hasSpecialCharacters = /[^A-Za-z0-9\s.#]/.test(input);

    if(hasSpecialCharacters){
      setSpecialCharacterError((prevErrors) => ({
        ...prevErrors,
        [field] : (
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

  return (
    <>
      <form className="auth-inner-signup" isFormValid={isFormValid} onSubmit={Continue}>
        <div className="titleform">
          <a href="/">Rimorin Dental Clinic</a>
        </div>
        <div className="mb-3">
          <label>
            {" "}
            House No. & Street Name<span class="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. 98 Felipe St."
            onChange={handleChange("house")}
            onBlur={function (e) {
                validateBlankspace(e.target.value, "house");
                validateSpecialCharacters(e.target.value, "house");
              }}
            defaultValue={values.house}
            required
          />
          {blankInputError.house}
          {specialCharacterError.house}
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label>
                Barangay<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Lower Quarry"
                onChange={handleChange("brgy")}
                onBlur={function (e) {
                    validateBlankspace(e.target.value, "brgy");
                    validateSpecialCharacters(e.target.value, "brgy");
                  }}
                defaultValue={values.brgy}
                required
              />
              {blankInputError.brgy}
              {specialCharacterError.brgy}
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label>
                {" "}
                Municipality<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Baguio City"
                onChange={handleChange("municipality")}
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "municipality");
                  validateSpecialCharacters(e.target.value, "municipality");
                }}
                defaultValue={values.municipality}
                required
              />
              {blankInputError.municipality}
              {specialCharacterError.municipality}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label>
                {" "}
                Province<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Benguet"
                onChange={handleChange("province")}
                onBlur={function (e) {
                    validateBlankspace(e.target.value, "province");
                    validateSpecialCharacters(e.target.value, "province");
                  }}
                defaultValue={values.province}
                required
              />
              {blankInputError.province}
              {specialCharacterError.province}
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label>
                {" "}
                ZIP Code<span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. 2600"
                onChange={handleChange("zipcode")}
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "zipcode");
                  validateSpecialCharacters(e.target.value, "zipcode");
                }}
                defaultValue={values.zipcode}
                required
              />
              {blankInputError.zipcode}
              {specialCharacterError.zipcode}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>
            Country<span class="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Philippines"
            onChange={handleChange("country")}
            onBlur={function (e) {
                validateBlankspace(e.target.value, "country");
                validateSpecialCharacters(e.target.value, "country");
              }}
            defaultValue={values.country}
            required
          />
          {blankInputError.country}
          {specialCharacterError.country}
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto ">
              <button
                onClick={Previous}
                type="submit"
                className="btn btn-outline-primary"
                style={{ padding: "10px 30px" }}
              >
                Back
              </button>
            </div>
            <div className="col-md-auto ">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: "10px 30px" }}
                disabled={isFormValid}
              >
                Next
              </button>
            </div>
          </div>
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

export default SignUp2;
