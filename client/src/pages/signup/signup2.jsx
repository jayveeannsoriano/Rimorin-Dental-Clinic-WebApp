import "../../styles/login-signup.css";
import React, { useEffect, useState } from "react";

const SignUp2 = ({ prevStep, nextStep, handleChange, values }) => {

    const [validated, setValidated] = useState(true);
    const [inputMessage, setInputMessage] = useState(true);

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    
  function validateBlankspace(input){
    const checkString = input.trim();

    if(!checkString){
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
      setInputMessage( <div style={{ fontSize: "12px" }}>
      <a class="text-success">
        <strong> </strong>
      </a>
    </div>);
    }
  }

    return (
        <>
            <form className='auth-inner-signup' onSubmit={Continue}>
            <div className='titleform'>
                  <a href="/">Rimorin Dental Clinic</a>
              </div>
                <div className="mb-3">
                    <label> House No. & Street Name<span class="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. 98 Felipe St."
                        onChange={handleChange('house')}
                        onBlur={function(event){validateBlankspace(event.target.value)}}
                        defaultValue={values.house}
                    />
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label>Barangay<span class="text-danger">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. Lower Quarry"
                                onChange={handleChange('brgy')}
                                onBlur={function(event){validateBlankspace(event.target.value)}}
                                defaultValue={values.brgy}
                                required
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label> Municipality<span class="text-danger">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. Baguio City"
                                onChange={handleChange('municipality')}
                                onBlur={function(event){validateBlankspace(event.target.value)}}
                                defaultValue={values.municipality}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                    <div className="mb-3">
                    <label> Province<span class="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Benguet"
                        onChange={handleChange('province')}
                        onBlur={function(event){validateBlankspace(event.target.value)}}
                        defaultValue={values.province}
                        required
                    />
                </div>
                    </div>
                    <div className="col">
                    <div className="mb-3">
                    <label> ZIP Code<span class="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. 2600"
                        onChange={handleChange('zipcode')}
                        onBlur={function(event){validateBlankspace(event.target.value)}}
                        defaultValue={values.zipcode}
                        required
                    />
                </div>
                    </div>
                </div>
                
                <div className="mb-3">
                    <label>Country<span class="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Philippines"
                        onChange={handleChange('country')}
                        onBlur={function(event){validateBlankspace(event.target.value)}}
                        defaultValue={values.country}
                        required
                    />
                </div>

                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className='col-md-auto '>
                            <button
                                onClick={Previous}
                                type="submit"
                                className="btn btn-outline-primary"
                                style={{ padding: "10px 30px" }}
                            >
                                Back
                            </button>
                        </div>
                        <div className='col-md-auto '>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ padding: "10px 30px" }}
                                disabled={validated}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    {inputMessage}
                </div>

            <div className="signup-link"><p class="text-center">
                Already registered? <a href="/auth/login">Sign In</a>
            </p></div>
            </form>
        </>
    )
}

export default SignUp2