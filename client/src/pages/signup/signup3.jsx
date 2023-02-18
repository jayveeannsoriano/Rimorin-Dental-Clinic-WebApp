import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";

const SignUp3 = ({ prevStep, nextStep, handleChange, values }) => {
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

  const [checkBoxError, setCheckboxError] = useState(true);
  const [isSelected, setIsSelected] = useState([]);
  const handleChangeCheckbox = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    // If "None" checkbox is checked, remove all other selections and set selected value as "NONE"
    if (value === "NONE" && checked) {
      var item = document.getElementsByClassName("form-check-input");
      for (var i = 0; i < item.length; i++) {
        if (item.item(i).value != "NONE") {
          item.item(i).checked = false;
        }
      }
      setIsSelected(["NONE"]);
    } else {
      // If other checkboxes are checked, add them to the array
      if (checked) {
        isSelected.push(value);
      } else {
        // If unchecked, remove the value from the array
        setIsSelected(isSelected.filter((item) => item !== value));
      }
    }

    handleChange("conditions", isSelected)(e);

    var item = document.getElementsByClassName("form-check-input");
    var num = 0;
    for (var i = 0; i < item.length; i++) {
      if(item.item(i).checked == true){
        num++;
      }
      if (num<=0) {
        setCheckboxError(
          <div style={{ fontSize: "12px" }} className="text-danger">
            <strong>Please select at least one option.</strong>
          </div>
        );
        setIsFormValid(true);
      } else {
        setCheckboxError("");
        setIsFormValid(false);
      }
    }
  };

  const handleCheckbox = (e) => {
    handleChangeCheckbox(e);
  };

  //Checks all checkbox according to Values
  useEffect(() => {
    values.conditions.forEach((cond) => {
      console.log(cond);
      var item = document.getElementsByClassName("form-check-input");
      for (var i = 0; i < item.length; i++) {
        if (item.item(i).value == cond) {
          item.item(i).checked = true;
        }
      }
    });
  }, []);

  return (
    <>
      <form
        className="auth-inner-signup"
        isFormValid={isFormValid}
        onSubmit={Continue}
      >
        <div className="titleform">
          <a href="/">Rimorin Dental Clinic</a>
        </div>
        <div className="mb-3">
          <label>
            Name any medications or maintenance you're taking.
            <span class="text-danger">*</span> (Type N/A if None)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Antidepressants, Oral Contraceptives, etc"
            onChange={handleChange("medications")}
            onBlur={function (e) {
              validateBlankspace(e.target.value, "medications");
            }}
            defaultValue={values.medications}
            required
          />
          {blankInputError.medications}
        </div>

        <div className="mb-3">
          <label>
            Specify any allergies you have.<span class="text-danger">*</span>
            (Type N/A if None)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Hives, Pollen, etc"
            onChange={handleChange("allergies")}
            onBlur={function (e) {
              validateBlankspace(e.target.value, "allergies");
            }}
            defaultValue={values.allergies}
            required
          />
          {blankInputError.allergies}
        </div>

        <div className="col-4">
          <div className="mb-3">
            <label>
              Blood Type<span class="text-danger">*</span>
            </label>
            <Form.Select
              defaultValue={values.blood}
              onChange={handleChange("blood")}
              required
              className="form-select"
            >
              <option value="" selected disabled>
                Select
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </Form.Select>
          </div>
        </div>

        <div className="mb-3">
          <label>
            Check the appropriate box of the conditions that applies to you if
            you have or ever had any of the following conditions.
            <span class="text-danger">*</span>
          </label>
          <br />
          {checkBoxError}
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    value="HEART DISEASE"
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Heart Disease
                  </label>
                </div>

                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="HIGH BLOOD PRESSURE"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    High Blood Pressure
                  </label>
                </div>

                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="RHEUMATIC"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Rheumatic
                  </label>
                </div>

                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="BLOOD DISORDERS"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Blood Disorders
                  </label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="DIABETES"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Diabetes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="SEIZURES"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Seizures
                  </label>
                </div>
              </div>

              <div class="col-sm">
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="TUBERCULOSIS"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Tuberculosis
                  </label>
                </div>

                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="TUMORS/GROWTHS"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Tumors/Growths
                  </label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="ASTHMA"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Asthma
                  </label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="HEPATITIS"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Hepatitis
                  </label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="STD"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    STD
                  </label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="STROKE"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                    disabled={isSelected.includes("NONE")}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    Stroke
                  </label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="NONE"
                    id="flexCheckDefault"
                    onChange={handleCheckbox}
                  />
                  <label class="form-check-label px-1" for="flexCheckDefault">
                    None
                  </label>
                </div>
              </div>
            </div>
          </div>
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
                //onClick={handleCheckbox}
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

export default SignUp3;
