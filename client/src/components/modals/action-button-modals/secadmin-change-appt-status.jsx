import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import '../../../styles/modals.css'
import '../../../styles/accounts.css';
import successful from '../../../assets/img/check.png';

import FinishedAppointment from '../success-modals/appt-finished';
import NoShow from '../success-modals/appt-noshow';

function SecAdminrebook(patientIDnumber, appNum, pName, dName, date, time, procedures) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleModalClose = () => setShow(false);
  const [selectValue, setSelectedValue] = useState();

  //selected values modal 
  const [modalState, setModalState] = useState(false);
  const handleModalRefreshOnClose = () => {
    setShow(false);
    window.location.reload();
  }

  //no show modal
  const handleNoShow = () => {
    setModalState('no-show-modal')
  }

  //finished modal
  const handleFinished = () => {
    setModalState('finished-modal')
  }

  //arrived modal
  const handleArrived = () => {
    setModalState('arrived-modal')
  }

  //retrieve app number
  const StringAppNum = JSON.stringify(patientIDnumber, appNum, pName, dName, date, time, procedures);
  const ConvertStringApp = JSON.parse(StringAppNum);
  const PatientIDNumber = JSON.stringify(ConvertStringApp.patientIDnumber).replace(/"/g, "");
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g, "");
  const patientValue = JSON.stringify(ConvertStringApp.pName).replace(/"/g, "");
  const dentistValue = JSON.stringify(ConvertStringApp.dName).replace(/"/g, "");
  const dateValue = JSON.stringify(ConvertStringApp.date).replace(/"/g, "");
  const timeValue = JSON.stringify(ConvertStringApp.time).replace(/"/g, "");
  const proceduresValue = ConvertStringApp.procedures;

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

  console.log("SUBSTRING APPNUMBER",PatientIDNumber)

  const newStatus = () => {
    console.log("Updating " + AppNumber);
    console.log("Update values: " + selectValue);

    Axios.put("https://rimorin-dental-clinic.herokuapp.com/updateStatus", {
      appNum: AppNumber,
      newAppStatus: selectValue
    });

    if (selectValue == "Arrived") {
      handleArrived();
    } else {
      console.log("Receipt not created")
    }

    if (selectValue == "Finished") {
      Axios.post("https://rimorin-dental-clinic.herokuapp.com/createDentalRecordforSec", {
        patientIDNum: PatientIDNumber,
        appNum: AppNumber,
        dentalStatus: "Pending",
    })


      handleFinished();
      console.log("Dental Record with ", appNum, pName)
    } else {
      console.log("Receipt not created")
    }

    if (selectValue == "No Show") {
      handleNoShow();
      Axios.post("https://rimorin-dental-clinic.herokuapp.com/moveToAppointmentHistoryAsNoShow", {
        patientIDnumber: PatientIDNumber,
        appNum: AppNumber,
        pName: patientValue,
        dName: dentistValue,
        date: dateValue,
        time: timeValue,
        procedures: proceduresValue,
      })
      console.log("Moving ", appNum, pName, " to Appointment History")
    } else {
      console.log("Receipt not created")
    }

    handleModalClose();
    
  }

  const finishedAppointments = () => {
    Axios.put("https://rimorin-dental-clinic.herokuapp.com/moveToAppointmentHistoryAsNoShow", {
        patientIDnumber: PatientIDNumber,
        appNum: AppNumber,
      })
      console.log("Moving ", appNum, pName, " to Appointment History")
    
  }

  return (
    <>
      <Button className="change-button" onClick={handleShow}>
        <i class="bi bi-pencil-fill"></i>Change Status
      </Button>

      <Modal
        show={show}
        onHide={handleModalClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Appointment Status</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="appointment-details-modal">
            <h4>Appointment Details</h4>
            <div class="row">
              <div class="col modal-label">Patient Name:</div>
              <div class="col modal-values">{patientValue}</div>
            </div>
            <div class="row">
              <div class="col modal-label">Appt #:</div>
              <div class="col modal-values">{AppNumber}</div>
            </div>
            <div class="row">
              <div class="col modal-label">Date & Time:</div>
              <div class="col modal-values">{dateValue} | {timeValue}</div>
            </div>
            <div class="row">
              <div class="col modal-label">Procedures Chosen:</div>
              <div class="col modal-values">
                {procValue.map((item, index) => (
                  <tr key={index}>
                    <td>{item.procedure}</td>
                  </tr>
                ))}</div>
            </div>
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleFormControlSelect1"
            >
              <Form.Label>Appointment Status</Form.Label>
              <Form.Select value={selectValue} onChange={e => setSelectedValue(e.target.value)}>
                <option value="" selected disabled>--Select Appointment Status--</option>
                <option onClick={handleFinished}> Finished</option>
                <option onClick={handleArrived}>Arrived</option>
                <option onClick={handleNoShow}>No Show</option>
              </Form.Select>
            </Form.Group>
          </Form>

        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newStatus}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Appointment Marked as No Show Modal */}
      <Modal show={modalState == 'no-show-modal'} onHide={handleModalRefreshOnClose}>

        <Modal.Header closeButton>
          <Modal.Title>{AppNumber} status changed to No Show</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={successful} alt="success image" className='success-img' />
          <p className='modal-txt'>You have succesfully changed the appointment status for {AppNumber}!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleModalRefreshOnClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>

      {/* Appointment Finished Modal */}
      <Modal show={modalState == 'finished-modal'} onHide={handleModalRefreshOnClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{AppNumber} status changed to Finished</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={successful} alt="success image" className='success-img' />
          <p className='modal-txt'>You have succesfully changed the appointment status for {AppNumber}!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleModalRefreshOnClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Appointment Arrived Modal */}
      <Modal show={modalState == 'arrived-modal'} onHide={handleModalRefreshOnClose}>

        <Modal.Header closeButton>
          <Modal.Title>{AppNumber} status changed to Arrived</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={successful} alt="success image" className='success-img' />
          <p className='modal-txt'>You have succesfully changed the appointment status for {AppNumber}!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleModalRefreshOnClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>

    </>
  );
}

export default SecAdminrebook;