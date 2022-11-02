import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Timeslot2 from "../timeslot2";
import '../../styles/booking.css'

function RescheduleAppointment() {
  const [modalState, setModalState] = useState('close');

  const handleClose = () => setModalState(false);
  const handleModal1= () => {
    setModalState("modal-1")
  }

  const handleModal2= () => {
    setModalState("modal-2")
  }

  //user info
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  var getUserName = JSON.stringify(userInfo['fname'] + " " + userInfo['lname'])
  const userNameApp = JSON.parse(getUserName)

  //appointment details
  var arr = [];
  while(arr.length < 8){
  var r = Math.floor(Math.random() * 1000) + 1;
  if(arr.indexOf(r) === -1) arr.push(r);
  }

  //calendar input
  const [startDate, setStartDate] = useState(new Date());

  //reasonforconsultation input
  const [consulInput, setConsulInput] = useState("");

  //time input
  const [getTime, setGetTime] = useState("");

  //retrieve Time data from Timeslot
  const getBookingData = (data)=>{
      console.log('Retrieving Data from Booking Input: ', data)
      setGetTime(data);
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
                    <input type="date" className="form-control" id="appointment-date" required/>
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
                    <label htmlFor="validationCustom01" className="form-label">Reason for Consultation <span className="text-danger font-weight-bold">*</span></label>
                    <textarea className="form-control" id="reason" rows="5" placeholder="Write reason here..."></textarea>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleModal2}>Reschedule</Button>
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
            You have successfully re-scheduled your appoointment. Your re-schedule request is now pending. 
        </Modal.Body>


        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RescheduleAppointment;