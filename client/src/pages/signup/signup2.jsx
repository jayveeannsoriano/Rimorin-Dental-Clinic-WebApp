import React from 'react';
import "../../styles/login-signup.css";

const SignUp2 = ({prevStep, nextStep, handleChange, values}) => {

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <>
        <form className='auth-inner'>
        <p id="titleform"><h4>Rimorin Dental Clinic</h4></p>

            <div className="mb-3">
                <label> House No. & Street Name </label>
                <input
                type="text"
                className="form-control"
                placeholder="e.g. 98 Felipe St."
                onChange={handleChange('house')}
                defaultValue={values.house}
                // onChange={(e) => this.setState({ fname: e.target.value})}
                // required
                />
            </div>
            <div className="mb-3">
                <label> Barangay </label>
                <input
                type="text"
                className="form-control"
                placeholder="e.g. Lower Quarry"
                onChange={handleChange('brgy')}
                defaultValue={values.brgy}
                // onChange={(e) => this.setState({ fname: e.target.value})}
                // required
                />
            </div>
            <div className="mb-3">
                <label> Municipality </label>
                <input
                type="text"
                className="form-control"
                placeholder="e.g. Baguio City"
                onChange={handleChange('municipality')}
                defaultValue={values.municipality}
                // onChange={(e) => this.setState({ fname: e.target.value})}
                // required
                />
            </div>
            <div className="mb-3">
                <label> Province </label>
                <input
                type="text"
                className="form-control"
                placeholder="e.g. Benguet"
                onChange={handleChange('province')}
                defaultValue={values.province}
                // onChange={(e) => this.setState({ fname: e.target.value})}
                // required
                />
            </div>
            <div className="mb-3">
                <label> Country </label>
                <input
                type="text"
                className="form-control"
                placeholder="e.g. Philippines"
                onChange={handleChange('country')}
                defaultValue={values.country}
                // onChange={(e) => this.setState({ fname: e.target.value})}
                // required
                />
            </div>

            <div className="container">
                <div className = "row justify-content-md-center">
                <div className='col-md-auto '>
                    <button 
                    onClick = { Previous } 
                    type="submit" 
                    className="btn btn-outline-primary"
                    style={{padding: "10px 30px"}}
                    >
                    Back
                    </button>
                </div>
                <div className='col-md-auto '>
                    <button 
                    onClick = { Continue } 
                    type="submit" 
                    className="btn btn-primary"
                    style={{padding: "10px 30px"}}
                    >
                    Next
                </button>
                </div>
                </div>
            </div>

            <p className="forgot-password text-right">
            Already registered? <a href="/auth/login">Sign In</a>
            </p>
        </form>
      </>
  )
}

export default SignUp2