import React, {Component} from "react";
import 'react-bootstrap';

import FollowUpInput from './follow-up-input';
import FollowUpDetail from "./follow-up-detail";
import FollowUpConfirm from "./follow-up-confirm";


class FollowUpMain extends Component {
    state = {
        step: 1,
        pName: "",
        time: "",
        date: "",
        consultation: "",
        reasonForFollowUp: ""
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

    handleTimeChange (value) {
        this.setState({['time']: value});
    }
    
    handleDateChange(date) {
        this.setState({
            [date]: date
        });
    }

    render(){
        const {step} = this.state;
        const {time,date,consultation,reasonForFollowUp} = this.state;
        const values = {time,date,consultation,reasonForFollowUp};

        switch (step) {
            case 1:
                return (
                    <FollowUpInput 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                )

            case 2:
                return(
                    <FollowUpDetail
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    values = {values}
                    />
                )

            case 3:
                return(
                    <FollowUpConfirm
                    nextStep = {this.nextStep}
                    values = {values}
                    />
                )
            default:
                break;
        }
    }
}

export default FollowUpMain;