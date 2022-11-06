import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Timeslot2 from "../timeslot2";
import '../../styles/booking.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import { useEffect } from 'react';

function RescheduleAppointment(appNum) {
  const [modalState, setModalState] = useState('close');
  
  const handleClose = () => setModalState(false);
  const handleModal1= () => {
    setModalState("modal-1")
   
  }

  //calendar input
  const [newStartDate, setStartDate] = useState(new Date());

  //reasonforconsultation input
  const [newConsulInput, setConsulInput] = useState("");

  //time input
  const [newSetTime, setGetTime] = useState("");

  //retrieve app number
  const StringAppNum = JSON.stringify(appNum);
  const ConvertStringApp = JSON.parse(StringAppNum);
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g,"");


  //retrieve Time data from Timeslot
  const getBookingData = (data)=>{
      console.log('Retrieving Data from Booking Input: ', data)
      setGetTime(data);
  }

  //update date and time
  const newDateTime = () =>{
    console.log("Updating " + AppNumber);
    console.log("Update values: " + newStartDate + " " + newSetTime + " " + newConsulInput);
    Axios.put("http://localhost:3001/updateDateTime",{
     appNum: AppNumber,
     newDate: newStartDate,
     newTime: newSetTime,
     newConsultation: newConsulInput});
    setModalState("modal-2");
  }

  return (
    <>
    <span class="resched-button" onClick={handleModal1}><i class="bi bi-calendar2-event"></i> Reschedule</span>

      <Modal
        show = {modalState == 'modal-1'}
        size='xl'
        // show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Appointment</Modal.Title>
        </Modal.Header>


        <Modal.Body>
            <div className="appointment-form" id="appointment-form">

            <form className="row g-3 needs-validation" noValidate/>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Select Appointment Date <span className="text-danger font-weight-bold">*</span></label>
                      {/* New Calendar from https://reactdatepicker.com/#example-default */}
                    <DatePicker 
                        selected={newStartDate} 
                        onChange={(date) => {
                            setStartDate(date);
                            console.log("This is the calendar data:", date)
                            window.localStorage.setItem('date',date);
                        }}
                        isClearable
                        placeholderText="Choose a date"
                        minDate={new Date()}
                        shouldCloseOnSelect={false}
                        withPortal
                        />

                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Select Time for Appointment <span className="text-danger font-weight-bold">*</span></label>
                    <p> Available Times </p>
                    <Timeslot2 onSubmit={getBookingData}/>
                </div>
            </div>

                <div className="col-12 reason-form">
                    <label htmlFor="validationCustom01" className="form-label">Reason for Reschedule <span className="text-danger font-weight-bold">*</span></label>
                    <textarea className="form-control" id="reason" rows="5" placeholder="Write reason here..." onChange= {(e) => setConsulInput(e.target.value)}></textarea>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={newDateTime}>Reschedule</Button>
        </Modal.Footer>

      </Modal>

      <Modal
        show = {modalState == 'modal-2'}
        size='lg'
        // show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Appointment</Modal.Title>
        </Modal.Header>


        <Modal.Body>
            You have successfully re-scheduled your appointment. Your re-schedule request is now pending. 
        </Modal.Body>


        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RescheduleAppointment;