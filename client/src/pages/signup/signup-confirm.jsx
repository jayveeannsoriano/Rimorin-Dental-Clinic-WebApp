import React, { useState } from 'react';
// import { List, ListItem, ListItemText } from '@material-ui/core';
// import "../../styles/login-signup.css";
import Axios from 'axios';


const SignUpConfirm = ({ prevStep, nextStep, values }) => {
    console.log(values);
    const { fname, lname, mname, suffix, email, password, gender, mobile, bday, house, brgy, municipality, province, country, medications, allergies, conditions, tellphone, profession, zipcode, blood } = values;
    

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        Axios.post("https://rimorin-dental-clinic.herokuapp.com/RegisterUser", {
            fname: fname,
            mname: mname,
            suffix: suffix,
            lname: lname,
            email: email,
            password: password,
            gender: gender,
            mobile: mobile,
            tellphone: tellphone,
            profession: profession,
            bday: bday,
            house: house,
            brgy: brgy,
            municipality: municipality,
            province: province,
            zipcode: zipcode,
            country: country,
            medications: medications,
            allergies: allergies,
            blood: blood,
            conditions: conditions,
            user_role_id: 1
        })

        e.preventDefault();
        nextStep();
    }


    return (
        <>
            <form className="auth-inner-signup">
                <div className='titleform'>
                    <a href="/">Rimorin Dental Clinic</a>
                </div>
                <br />
                <div class="row">
                    <div class="col">
                        <label className='label'>Full Name</label>
                    </div>
                    <div class="col">
                        <p>{fname} {mname} {lname} {suffix}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Email Address</label>
                    </div>
                    <div class="col">
                        <p>{email}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Gender</label>
                    </div>
                    <div class="col">
                        <p>{gender}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Mobile Number</label>
                    </div>
                    <div class="col">
                        <p>{mobile}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Telephone Number</label>
                    </div>
                    <div class="col">
                        <p>{tellphone}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Birthday</label>
                    </div>
                    <div class="col">
                        <p>{bday}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Profession</label>
                    </div>
                    <div class="col">
                        <p>{profession}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Full Address</label>
                    </div>
                    <div class="col">
                        <p>{house} {brgy} {municipality} {province} {zipcode} {country}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Medications</label>
                    </div>
                    <div class="col">
                        <p>{medications}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Blood Type</label>
                    </div>
                    <div class="col">
                        <p>{blood}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Allergies</label>
                    </div>
                    <div class="col">
                        <p>{allergies}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Conditions</label>
                    </div>
                    <div class="col">
                        {conditions.map((conditions, index) => {
                            return (
                                <div key={index} class="col">
                                    <p>{conditions}</p>
                                </div>
                            );
                        })}

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
                                onClick={Continue}
                                type="submit"
                                className="btn btn-primary"
                                style={{ padding: "10px 30px" }}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUpConfirm;
