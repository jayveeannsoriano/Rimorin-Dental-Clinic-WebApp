import React from "react";
import "../../styles/login-signup.css";
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';


const SignUp1 = ({ nextStep, handleChange, handleCheckbox, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  function validatePassword() {
    let newPassword = document.getElementById("newPassword");
    let renewPassword = document.getElementById("renewPassword");
    if (!(newPassword == null || newPassword.value == '' || renewPassword == null || renewPassword.value == '')) {
        if (newPassword.value != renewPassword.value) {
            renewPassword.setCustomValidity("Passwords Does Not Match");
        } else {
            renewPassword.setCustomValidity('');
            document.getElementById('passwordForm').nextStep();
            
        }
    }
  }


  return (
    <>
      <form id='passwordForm' className="auth-inner-signup" onSubmit={Continue}>
        <div className='titleform'>
            <a href="/">Rimorin Dental Clinic</a>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={handleChange('fname')}
                defaultValue={values.fname}
                required
              />
            </div>

          </div>

          <div className="col">
            <div className="mb-3 suffix">
              <label>Middle Name</label>
              <input
                type="text"
                className="form-control suffix"
                placeholder="Middle Name"
                onChange={handleChange('midname')}
                defaultValue={values.midname}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={handleChange('lname')}
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
                onChange={handleChange('suffix')}
                defaultValue={values.suffix}
              />
            </div>
          </div>

        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type='email'
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            required
          />
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="9XX-XXX-XXXX"
                onChange={handleChange('mobile')}
                defaultValue={values.mobile}
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
              <label>Telephone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="123-456-789"
                onChange={handleChange('tellphone')}
                defaultValue={values.tellphone}
              />
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-6">
            <label>Gender</label>
            <div className="row">
              <div className="col-6">
                <div className="form-check">
                  <label>
                    <input
                      type="radio"
                      onChange={handleChange('gender')}
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
                    onChange={handleChange('gender')}
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
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter birthday"
                onChange={handleChange('bday')}
                defaultValue={values.bday}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>Profession</label>
          <input
            type="text"
            className="form-control"
            placeholder="Government Employee"
            onChange={handleChange('profession')}
            defaultValue={values.profession}
            required
          />
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label>Password</label>
              <input
                id="newPassword"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange('password')}
                defaultValue={values.password}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label>Re-enter password</label>
              <input
                id="renewPassword"
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                onChange={handleChange('confirmPassword')}
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
            onClick={() => {validatePassword(); }}
          >
            Next
          </button>
        </div>
        
        
        <div className="signup-link"><p class="text-center">
          Already registered? <a href="/auth/login">Sign In</a>
          </p></div>
      </form>
    </>
  );
};

export default SignUp1;
