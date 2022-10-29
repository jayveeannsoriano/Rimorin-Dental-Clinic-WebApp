import React from 'react'

const SignUp3 = ({prevStep, nextStep, handleChange, values,handleChangeCheckbox, handleCheckbox}) => {

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
            <label> Name any medications or maintenance you're taking. </label>
            <input
            type="text"
            className="form-control"
            placeholder="e.g. Antidepressants, Oral Contraceptives, Antihypertensives, etc"
            onChange={handleChange('medications')}
            defaultValue={values.medications}
            // required
            />
        </div>
        <div className="mb-3">
            <label> Specify any allergies you have. </label>
            <input
            type="text"
            className="form-control"
            placeholder="e.g. Hives, Pollen, etc"
            onChange={handleChange('allergies')}
            defaultValue={values.allergies}
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
                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" onChange={handleCheckbox} value='Heart Disease' />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Heart Disease </label>
                </div>

                <div className='form-check'>
                    <input class="form-check-input" name="YESSIRSKI" type="checkbox" value="High Blood Pressure" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> High Blood Pressure</label> 
                </div>

                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Rheumatic" id="flexCheckDefault" onChange={handleChangeCheckbox('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Rheumatic </label>
                </div>
                
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Blood Disorders" id="flexCheckDefault" onChange={handleChange('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Blood Disorders </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Diabetes" id="flexCheckDefault" onChange={handleChange('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Diabetes </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Seizures" id="flexCheckDefault" onChange={handleChange('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Seizures </label>
                </div>
                </div>
                
                <div class="col-sm">
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Tuberculosis" id="flexCheckDefault" onChange={handleChange('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Tuberculosis </label>
                </div>
                
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Tumors" id="flexCheckDefault" onChange={handleChange('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Tumors/Growths </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Asthma" id="flexCheckDefault" onChange={handleChange('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Asthma </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Hepatitis" id="flexCheckDefault" onChange={handleChange('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> Hepatitis </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="STD" id="flexCheckDefault" onChange={handleChange('conditions')} />
                    <label class="form-check-label px-1" for="flexCheckDefault"> STD </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="checkbox" value="Stroke" id="flexCheckDefault" onChange={handleChange('conditions')} />
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