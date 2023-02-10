import React, {Component, useState} from "react";
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
        doctor: "",
        treatmentProcedure: [{
            option: "General",
            chosen: [],
          },
          {
            option: "Cosmetic",
            chosen: [],
          },
          {
            option: "Orthodontics",
            chosen: [],
          },
          {
            option: "Endodontic",
            chosen: [],
          },
          {
            option: "Prosthetic",
            chosen: [],
          },
          {
            option: "Surgical",
            chosen: [],
          },],
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

    /////////-------------------------


    // handleChangeCheckbox = (input) => (event) => {
    //     var [totalApptTime, settotalApptTime] = useState(0);
    //     var value = JSON.parse(event.target.value);
    //     var isChecked = event.target.checked;
    //     var tempVar = totalApptTime;
    //     const [isSelected, setIsSelected] = useState();

    //     let {  treatmentProcedure } = this.state;
    //     console.log(treatmentProcedure, "ashkdbgahjsbd")

    //     if (isChecked) {
    //       tempVar = totalApptTime + parseInt(event.target.id);
    //       settotalApptTime(tempVar);
    //       !isSelected && setIsSelected(event.target.name);
    //     } else {
    //       tempVar = totalApptTime - parseInt(event.target.id);
    //       setIsSelected(null);
    //       settotalApptTime(tempVar);
    //     }
    //     var tempArr = { procedure: value[0].procedure, time: value[0].time };
    //     treatmentProcedure((current) =>
    //       current.map((obj) => {
    //         if (obj.option === input) {
    //           if (isChecked) {
    //             return { ...obj, chosen: [...obj.chosen, tempArr] };
    //           } else {
    //             var newArr = obj.chosen;
    //             var index = newArr.indexOf(event.target.value);
    //             newArr.splice(index, 1); // 2nd parameter means remove one item only
    //             return { ...obj, chosen: newArr };
    //           }
    //         }
    //         return obj;
    //       })
    //     );
    //   };


    render(){
        const {step} = this.state;
        const {doctor,time,date,treatmentProcedure} = this.state;
        const values = {doctor,time,date,treatmentProcedure};

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
                    handleCheckbox = {this.handleCheckbox}
                    values = {values}
                    />
                )
            default:
                break;
        }
    }
}

export default BookingMain;