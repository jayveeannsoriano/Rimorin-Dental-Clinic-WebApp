import React, { useState } from 'react';
// import { List, ListItem, ListItemText } from '@material-ui/core';
// import "../../styles/login-signup.css";
import Axios from 'axios';

const SignUpConfirm = ({ prevStep, nextStep, values }) => {
    console.log(values);
    const { fname, lname, suffix, email, password, gender, mobile, bday, house, brgy, municipality, province, country, medications, allergies, conditions } = values;


    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {

        Axios.post("http://localhost:3001/RegisterUser", {
            fname:fname,
            suffix:suffix,
            lname:lname,
            email:email,
            password:password,
            gender:gender,
            mobile:mobile,
            bday:bday,
            house:house,
            brgy:brgy,
            municipality:municipality,
            province:province,
            country:country,
            medications:medications,
            allergies:allergies,
            conditions:conditions
        })
        e.preventDefault();
        nextStep();
    }


    return (
        <div className="auth-wrapper">
            <div className="image-banner">
                <img src={"./img/hero-img.png"} />
            </div>
            <form className="auth-inner">
                <p id="titleform">
                    <h4>Rimorin Dental Clinic</h4>
                    <h6>Verify and proceed if the following details are correct.</h6>
                </p>
                <br />
                <div class="row">
                    <div class="col">
                        <label className='label'>Full Name</label>
                    </div>
                    <div class="col">
                        <p>{fname} {lname} {suffix}</p>
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
                        <label className='label'>Birthday</label>
                    </div>
                    <div class="col">
                        <p>{bday}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label className='label'>Full Address</label>
                    </div>
                    <div class="col">
                        <p>{house} {brgy} {municipality} {province} {country}</p>
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
                       {conditions.map((conditions,index) => {
                        return(
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
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUpConfirm;
