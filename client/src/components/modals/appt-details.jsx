import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ApptDetails(appNum,date,time,appStats) {
  const [modalState, setModalState] = useState('close');
  const handleClose = () => setModalState(false);
  const handleModal1= () => {
    setModalState("modal-1")
  }
  //Get values 
  const StringfyValues = JSON.stringify(appNum,date,time,appStats);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  const AppNumber = JSON.stringify(ConvertStringfyValues.appNum).replace(/"/g,"");
  const DateValue = JSON.stringify(ConvertStringfyValues.date).replace(/"/g,"");
  const TimeValue = JSON.stringify(ConvertStringfyValues.time).replace(/"/g,"");
  const StatsValue = JSON.stringify(ConvertStringfyValues.appStats).replace(/"/g,"");
  

  return (
    <>
      <Button className="view-button" variant="primary" onClick={handleModal1}>
      <i class="bi bi-eye-fill"></i>View
      </Button>

      <Modal
      show = {modalState == 'modal-1'}
      size="lg"
      // show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
	>
      <Modal.Header closeButton>
        <Modal.Title>Appointment Details</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="show-grid">
      <div className="appointment-details-modal">
          <div class="row">
              <div class="col modal-label">Patient Name:</div>
              <div class="col modal-values">Ricci Blynthe</div>
            </div>
            <div class="row">
              <div class="col modal-label">Appt #:</div>
              <div class="col modal-values">{AppNumber}</div>
            </div>
            <div class="row">
              <div class="col modal-label">Date & Time:</div>
              <div class="col modal-values">{DateValue} | {TimeValue}</div>
            </div>
            <div class="row">
              <div class="col modal-label">Reason for Consultation:</div>
              <div class="col modal-values">Lorem ipsum dolor sit amet.</div>
            </div>
            <div class="row">
              <div className="col modal-label">Appointment Status:</div>
              <div data-status={StatsValue} className="col modal-values appt_status"></div>
            </div>
          </div>
      </Modal.Body>
      <Modal.Footer>
	  <Button variant="primary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>      
    </>
  );
}

export default ApptDetails;