import React from 'react'

const SignUp3 = ({prevStep, nextStep, handleChange, values}) => {


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
    <form className='auth-inner'>
        <h3>Sign Up</h3>

        <div className="mb-3">
            <label> Name any medications or maintenance you're taking. </label>
            <input
            type="text"
            className="form-control"
            placeholder="e.g. 98 Felipe St."
            // onChange={(e) => this.setState({ fname: e.target.value})}
            // required
            />
        </div>
        <div className="mb-3">
            <label> Specify any allergies you have. </label>
            <input
            type="text"
            className="form-control"
            placeholder="e.g. Lower Quarry"
            // onChange={(e) => this.setState({ fname: e.target.value})}
            // required
            />
        </div>
        <div className="mb-3">
            <label> Check the appropriate box of the conditions that applies to you if you have or ever had any of the following conditions. </label>
            <br/>
            <div class="container">
            <div class="row">
                <div class="col-sm">
                <div className='form-check '>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Heart Disease </label>
                </div>

                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> High Blood Pressure</label> 
                </div>

                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Rheumatic </label>
                </div>
                
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Blood Disorders </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Diabetes </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Seizures </label>
                </div>
                </div>
                
                {/* <div class="col-sm">col-sm</div> */}
                <div class="col-sm">
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Tuberculosis </label>
                </div>
                
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Tumors/Growths </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Asthma </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Hepatitis </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> STD </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Stroke </label>
                </div>

                </div>
            </div>
            </div>
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

export default SignUp3