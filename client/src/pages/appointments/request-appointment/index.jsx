import React, {Component} from "react";
import 'react-bootstrap';

import BookingInput from './booking-input';
import BookingDetail from "./booking-detail";
import BookingConfirm from "./booking-confirm";


class BookingMain extends Component {
    state = {
        step: 1,
        pName: "",
        time: "",
        date: "",
        consultation: "",
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
        const {time,date,consultation} = this.state;
        const values = {time,date,consultation};

        switch (step) {
            case 1:
                return (
                    <BookingInput 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                )

            case 2:
                return(
                    <BookingDetail
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    values = {values}
                    />
                )

            case 3:
                return(
                    <BookingConfirm
                    nextStep = {this.nextStep}
                    values = {values}
                    />
                )
            default:
                break;
        }
    }
}

export default BookingMain;