// SCRATCH!!!

import React, {Component} from "react";
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
import 'react-bootstrap';
import Timeslot from "../components/timeslot.jsx";
import BookingInput from './booking-input';
import BookingDetail from "./booking-detail.jsx";
import BookingConfirm from "./booking-confirm.jsx";
import AppointmentPage from "./appointments.jsx";

class BookingMain extends Component {
    state = {
        step: 1,
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState ({ step: step - 1});
    }
    
    nextStep = () => {
        const {step} = this.state;
        this.setState ({ step: step + 1});
    }

    render(){
        const {step} = this.state;

        switch (step) {
            case 1:
                return (
                    <BookingInput 
                    nextStep = {this.nextStep}
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