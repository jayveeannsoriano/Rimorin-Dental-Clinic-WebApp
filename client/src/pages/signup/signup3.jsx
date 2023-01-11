import React from 'react'
import Form from 'react-bootstrap/Form';
import Footer from '../../layout/LandingPageLayout/footer';

const SignUp3 = ({ prevStep, nextStep, handleChange, values, handleChangeCheckbox }) => {

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
            <form className='auth-inner-signup' onSubmit={Continue}>
                <div className='titleform'>
                  <a href="/">Rimorin Dental Clinic</a>
                </div>
                <div className="mb-3">
                    <label> Name any medications or maintenance you're taking.<span class="text-danger">*</span> (Type N/A if None)</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Antidepressants, Oral Contraceptives, etc"
                        onChange={handleChange('medications')}
                        defaultValue={values.medications}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label> Specify any allergies you have.<span class="text-danger">*</span> (Type N/A if None)</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Hives, Pollen, etc"
                        onChange={handleChange('allergies')}
                        defaultValue={values.allergies}
                        required
                    />
                </div>

                <div className="col-4">
                    <div className="mb-3">
                        <label>Blood Type<span class="text-danger">*</span></label>
                        <Form.Select defaultValue={values.blood} onChange={handleChange('blood')}>
                            <option value="" selected disabled>Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="mb-3">
                    <label> Check the appropriate box of the conditions that applies to you if you have or ever had any of the following conditions.<span class="text-danger">*</span></label>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} value='Heart Disease' />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Heart Disease </label>
                                </div>

                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="High Blood Pressure" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> High Blood Pressure</label>
                                </div>

                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Rheumatic" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Rheumatic </label>
                                </div>

                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Blood Disorders" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Blood Disorders </label>
                                </div>
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Diabetes" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Diabetes </label>
                                </div>
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Seizures" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Seizures </label>
                                </div>
                            </div>

                            <div class="col-sm">
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Tuberculosis" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Tuberculosis </label>
                                </div>

                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Tumors" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Tumors/Growths </label>
                                </div>
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Asthma" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Asthma </label>
                                </div>
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Hepatitis" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Hepatitis </label>
                                </div>
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="STD" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> STD </label>
                                </div>
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="Stroke" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                                    <label class="form-check-label px-1" for="flexCheckDefault"> Stroke </label>
                                </div>
                                <div className='form-check'>
                                    <input class="form-check-input" type="checkbox" value="None" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')}/>
                                    <label class="form-check-label px-1" for="flexCheckDefault"> None </label>
                                </div>

                            </div>
                        </div>
                    </div>
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
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            <div className="signup-link"><p class="text-center">
                Already registered? <a href="/auth/login">Sign In</a>
            </p></div>
            </form>
        </>

    )
}

export default SignUp3