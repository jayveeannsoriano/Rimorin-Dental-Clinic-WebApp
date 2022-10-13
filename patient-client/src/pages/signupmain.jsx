import React, { Component } from 'react';
import LoginPage from './login-page';
import SignUp1 from './signup1';
import SignUp2 from './signup2';
import SignUp3 from './signup3';
import "../styles/sign-up.css";


//serves as the navigation for multi-page
class SignUpMain extends Component {

    state = {
        step: 1,
        fname:"",
        minitial:"",
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
        }
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
    }
    
    //checkbox for sign up 3
    handleCheckbox = e => {
        console.log(e.target.value);
        let state = this.state
        state.conditions[e.target.value] = e.target.checked;
        this.setState(state);
    }


    render() {
        const {step} = this.state;
        const{fname, lname, suffix, email, password, gender, mobile, bday, house, brgy, municipality, province, country, allergies, conditions} = this.state;
        const values = {fname, lname, suffix, email, password, gender, mobile, bday, house, brgy, municipality, province, country, allergies, conditions};
        
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
                    values = {this.values}
                    />
                )
            
            case 3:
                return(
                    <SignUp3 
                    prevStep = {this.prevStep}
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {this.values}
                    />
                )
            
                //successful
            case 4:
                return(
                    < LoginPage />
                )
        
            default:
                break;
        }
    }
}

export default SignUpMain
