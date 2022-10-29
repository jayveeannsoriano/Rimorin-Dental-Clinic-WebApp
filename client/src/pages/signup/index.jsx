import React, { Component, useState } from 'react';
import LoginPage from '../../pages/login';
import SignUp1 from '../signup/signup1';
import SignUp2 from '../signup/signup2';
import SignUp3 from '../signup/signup3';
import SignUpConfirm from '../signup/signup-confirm';
import "../../styles/sign-up.css";


//serves as the navigation for multi-page
class SignUpMain extends Component {
    
    state = {
        step: 1,
        fname:"",
        // minitial:"",
        lname:"",
        suffix:"",
        email:"",
        password:"",
        gender:"",
        bday:"",
        mobile:"",
        house:"",
        brgy:"",
        municipality:"",
        province:"",
        country:"",
        medications:"",
        allergies:"",
        conditions: {
            heartDisease: false,
            highBlood: false,
            rheumatic: false,
            bloodDisorders: false,
            diabetes: false,
            seizures: false,
            tuberculosis: false,
            tumors: false,
            asthma: false,
            hepatitis: false,
            std: false,
            stroke: false,
        },
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
      
    handleChangeCheckbox = input => e =>{
        const checked = e.target.checked;
        this.setState({[input]: [e.target.value]});
        console.log(input, checked);
        //check if box is checked or not
   


        
    }

    render() {
        
        const {step} = this.state;
        const{fname, lname, suffix, email, password, gender, mobile, bday, house, brgy, municipality, province, country,medications, allergies,conditions} = this.state;
        const values = {fname, lname, suffix, email, password, gender, mobile, bday, house, brgy, municipality, province, country, medications, allergies, conditions};
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