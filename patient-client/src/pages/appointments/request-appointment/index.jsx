// SCRATCH!!!

import React, {Component} from "react";
import 'react-bootstrap';
import Timeslot from "../../../components/timeslot.jsx";
import BookingInput from './booking-input';
import BookingDetail from "./booking-detail.jsx";
import BookingConfirm from "./booking-confirm.jsx";
import AppointmentPage from "../../appointments";

class BookingMain extends Component {
    state = {
        step: 1,
        startDate: "",
        consulInput: "",
        timeData:"",
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

    render(){
        const {step} = this.state;
        const {startDate,consulInput,timeData} = this.state;
        const values = {startDate,consulInput,timeData};

        switch (step) {
            case 1:
                return (
                    <BookingInput 
                    nextStep = {this.nextStep}
                    // handleChange = {this.handleChange}
                    // values = {values}
                    />
                )

            case 2:
                return(
                    <BookingDetail
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    />
                )

            case 3:
                return(
                    <BookingConfirm
                    nextStep = {this.nextStep}
                    />
                )
            default:
                break;
        }
    }
}

export default BookingMain;