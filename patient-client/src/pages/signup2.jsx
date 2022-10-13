import React from 'react'

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
    <div className='auth-wrapper'>
        <div className='image-banner'>
            <img src={'./img/hero-img.png'}/>
        </div>
        <form className='auth-inner'>
        <p id="titleform"><h4>Rimorin Dental Clinic</h4></p>

            <div className="mb-3">
                <label> House No. & Street Name </label>
                <input
                type="text"
                className="form-control"
                placeholder="e.g. 98 Felipe St."
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
            Already registered? <a href="/login">Sign In</a>
            </p>
        </form>
    </div>
    
  )
}

export default SignUp2