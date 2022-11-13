import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; 
import Axios from 'axios';
import '../../styles/modals.css'

function rebook(patientIDnumber,appNum,pName,dName,date,time,consultation) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [selectValue, setSelectedValue] = useState();

  //retrieve app number
  const StringAppNum = JSON.stringify(patientIDnumber,appNum,pName,dName,date,time,consultation);
  const ConvertStringApp = JSON.parse(StringAppNum);
  const PatientIDNumber = JSON.stringify(ConvertStringApp.patientIDnumber).replace(/"/g,"");
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g,"");
  const patientValue = JSON.stringify(ConvertStringApp.pName).replace(/"/g,"");
  const dentistValue = JSON.stringify(ConvertStringApp.dName).replace(/"/g,"");
  const dateValue = JSON.stringify(ConvertStringApp.date).replace(/"/g,"");
  const timeValue = JSON.stringify(ConvertStringApp.time).replace(/"/g,"");
  const consultationValue = JSON.stringify(ConvertStringApp.consultation).replace(/"/g,"");

  const newStatus = () =>{
    console.log("Updating " + AppNumber);
    console.log("Update values: " + selectValue);

    Axios.put("http://localhost:3001/updateStatus",{
      appNum: AppNumber,
      newAppStatus: selectValue 
     });
  

    if(selectValue == "Finished"){
      Axios.post("http://localhost:3001/createReceipt",{
        patientIDnumber: PatientIDNumber,
        appNum: AppNumber,
        pName: patientValue,
        dName: dentistValue,
        date: dateValue,
        time: timeValue,
        consultation: consultationValue
      })
      console.log("Receipt Created with ", appNum,pName)
    }else{
      console.log("Receipt not created")
    }

    handleClose();

  }

  return (
    <>
      <Button className="update-button" onClick={handleShow}>
      <i class="bi bi-pencil-fill"></i>Update
      </Button>

      <Modal 
      show={show} 
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Appointment Status</Modal.Title>
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
              <div class="col modal-label">Reason for Consultation:</div>
              <div class="col modal-values">{consultationValue}</div>
            </div>
          </div>
          <Form>
            <Form.Group 
            className="mb-3" 
            controlId="exampleFormControlSelect1"
            >
              <Form.Label>Appointment Status</Form.Label> 
              <Form.Select value={selectValue} onChange={e=>setSelectedValue(e.target.value)}>
              <option value="" selected disabled>--Select Appointment Status--</option>
              <option>Finished</option>
              <option>Arrived</option>
              <option>No Show</option>
              <option>Cancelled</option>
              </Form.Select>
            </Form.Group>
          </Form>

        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newStatus}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default rebook;