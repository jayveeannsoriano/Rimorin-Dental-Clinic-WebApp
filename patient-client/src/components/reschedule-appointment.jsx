import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Timeslot from "../components/timeslot.jsx";

function RescheduleAppointment() {
  const [modalState, setModalState] = useState('close');

  const handleClose = () => setModalState(false);
  const handleModal1= () => {
    setModalState("modal-1")
  }

  const handleModal2= () => {
    setModalState("modal-2")
  }

  return (
    <>
    <span class="badge bg-primary" onClick={handleModal1}><i class="bi bi-calendar2-event"></i> Reschedule</span>

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
                    <Timeslot/>
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