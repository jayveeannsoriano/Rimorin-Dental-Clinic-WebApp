import React from "react";
import "../../styles/login-signup.css";
import Form from 'react-bootstrap/Form';

const SignUp1 = ({ nextStep, handleChange, handleCheckbox, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <form className="auth-inner" onSubmit={Continue}>
        <p id="titleform">
          <h4>Rimorin Dental Clinic</h4>
        </p>

        <div className="row">
          <div className="col-8">
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

          <div className="col-4">
            <div className="mb-3 suffix">
              <label>Middle Initial</label>
              <input
                type="text"
                className="form-control suffix"
                placeholder="(e.g. C.)"
                onChange={handleChange('minitial')}
                defaultValue={values.suffix}
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

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange('password')}
            defaultValue={values.password}
            required
          />
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

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label>Mobile Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="09XXXXXXXXX"
                onChange={handleChange('mobile')}
                defaultValue={values.mobile}
                maxLength={11}
                required
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label>Telephone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="0XX-XXX-YYYY"
                onChange={handleChange('tellphone')}
                defaultValue={values.tellphone}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
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
          </div>

          <div className="col-4">
            <div className="mb-3">
              <label>Blood Type</label>
              <Form.Select defaultValue={values.bloodtype} onChange={handleChange('bloodtype')}>
                <option value="" selected disabled>Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </Form.Select>
            </div>
          </div>
        </div>

        <div className="d-grid justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ padding: "10px 30px" }}
          >
            Next
          </button>
        </div>

        <p className="forgot-password text-right">
          Already registered? <a href="/auth/login">Sign In</a>
        </p>
      </form>
    </>
  );
};

export default SignUp1;
