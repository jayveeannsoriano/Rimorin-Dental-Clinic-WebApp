import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/modals.css';

function ApptPatientDetails(pName,dName,appNum,date,time,appStats,procedures) {
  const [modalState, setModalState] = useState('close');
  const handleClose = () => setModalState(false);
  const handleModal1= () => {
    setModalState("modal-1")
  }
  //Get values 
  const StringfyValues = JSON.stringify(pName,dName,appNum,date,time,appStats,procedures);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  const DentistNameValue = JSON.stringify(ConvertStringfyValues.dName).replace(/"/g,"");
  const PatientNameValue = JSON.stringify(ConvertStringfyValues.pName).replace(/"/g,"");
  const AppNumber = JSON.stringify(ConvertStringfyValues.appNum).replace(/"/g,"");
  const DateValue = JSON.stringify(ConvertStringfyValues.date).replace(/"/g,"");
  const TimeValue = JSON.stringify(ConvertStringfyValues.time).replace(/"/g,"");
  const StatsValue = JSON.stringify(ConvertStringfyValues.appStats).replace(/"/g,"");
  const proceduresValue = ConvertStringfyValues.procedures;
  console.log("procedures", proceduresValue)

  const [procValue, setProcedure] = useState([]);
  useEffect(() => {
    proceduresValue.map((item) =>
      item.chosen != null
        ? item.chosen.map(
            (proc) => (
              setProcedure((current) => [...current, proc])
            )
          )
        : null
    );
  }, [1]);

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
              <div class="col modal-label">Dentist Name:</div>
              <div class="col modal-values">{DentistNameValue}</div>
            </div>
          <div class="row">
              <div class="col modal-label">Patient Name:</div>
              <div class="col modal-values">{PatientNameValue}</div>
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
              <div class="col modal-label">Choosen Procedure:</div>
              <div class="col modal-values"> 
              {procValue.map((item, index) => (
                      <tr key={index}>
                        <td>{item.procedure}</td>
                      </tr>
                    ))}
              </div>
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

export default ApptPatientDetails;