import React, { Component, useState } from 'react';
import LoginPage from '../../pages/login';
import SignUp1 from '../signup/signup1';
import SignUp2 from '../signup/signup2';
import SignUp3 from '../signup/signup3';
import SignUpConfirm from '../signup/signup-confirm';
import "../../styles/login-signup.css";


//serves as the navigation for multi-page
class SignUpMain extends Component {
    
    state = {
        step: 1,
        fname:"",
        midname:"",
        lname:"",
        suffix:"",
        email:"",
        password:"",
        gender:"",
        bday:"",
        mobile:"",
        tellphone:"",
        profession:"",
        bloodtype:"",
        house:"",
        brgy:"",
        municipality:"",
        province:"",
        country:"",
        zipcode:"",
        medications:"",
        allergies:"",
        conditions: [],
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState ({ step: step - 1});
    }
    
    nextStep = () => {
        const {step} = this.state;
        this.setState ({ step: step + 1});
    }

    //handles the navigations to retain data past the prevStep
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        console.log(input);
        
    }
    
    //handlebox for checkbox
    tempArr = [];
    handleChangeCheckbox = input => e =>{
        
        const checked = e.target.checked;
        let { conditions } = this.state;
        if(checked){
            conditions.push(e.target.value);
        }else{
            const index = conditions.indexOf(e.target.value);
            if (index > -1) { // only splice array when item is found
                conditions.splice(index, 1); // 2nd parameter means remove one item only
            }
        }

        console.log(conditions);
    }

    render() {
        
        const {step} = this.state;
        const{fname, lname, midname, suffix, email, password, gender, mobile, bday, tellphone, profession, bloodtype, house, brgy, municipality, province, country, zipcode, medications, allergies,conditions} = this.state;
        const values = {fname, lname, midname, suffix, email, password, gender, mobile, bday, tellphone, profession, bloodtype, house, brgy, municipality, province, country, zipcode, medications, allergies, conditions};
        switch (step) {
            case 1:
                return(
                    <SignUp1
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                )

            case 2:
                return(
                    <SignUp2
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                    />
                )
            
            case 3:
                return(
                    <SignUp3 
                    prevStep = {this.prevStep}
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    handleChangeCheckbox = {this.handleChangeCheckbox}
                    values = {values}
                    />
                )
            
                //successful
            case 4:
                return(
                    <SignUpConfirm
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    values={ values }
                    />
                )
        
            case 5:
                return(
                    < LoginPage />
                )
        
            default:
                break;
        }
    }
}

export default SignUpMain
