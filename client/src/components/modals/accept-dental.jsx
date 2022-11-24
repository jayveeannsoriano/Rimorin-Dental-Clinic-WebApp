import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';
import Modal from 'react-bootstrap/Modal';

function AcceptDental(dentistIDnumber,patientIDnumber, pName, dName, appNum, date, time, consultation) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Get values 
  const StringfyValues = JSON.stringify(dentistIDnumber,patientIDnumber, pName, dName, appNum, date, time, consultation);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  //values
  const PatientIDnumber = JSON.stringify(ConvertStringfyValues.patientIDnumber).replace(/"/g, "");
  const AppNumber = JSON.stringify(ConvertStringfyValues.appNum).replace(/"/g, "");
  const PatientValue = JSON.stringify(ConvertStringfyValues.pName).replace(/"/g, "");
  const DentistValue = JSON.stringify(ConvertStringfyValues.dName).replace(/"/g, "");
  const DateValue = JSON.stringify(ConvertStringfyValues.date).replace(/"/g, "");
  const TimeValue = JSON.stringify(ConvertStringfyValues.time).replace(/"/g, "");
  const ConsultValue = JSON.stringify(ConvertStringfyValues.consultation).replace(/"/g, "");
  const dentistNumber = JSON.stringify(ConvertStringfyValues.dentistIDnumber).replace(/"/g, "");



  const AcceptAppointment = () => {
    handleShow();
    Axios.post("http://localhost:3001/acceptAppointment", {dentistIDnumber:dentistNumber,patientIDnumber: PatientIDnumber, userNameApp: PatientValue, appNumber: AppNumber, dentistValue: DentistValue, dateValue: DateValue, consulInput: ConsultValue, getTime: TimeValue })
  }


  return (
    <>
      <Button className="accept-button" onClick={AcceptAppointment}>
        <i class="bi bi-check-lg"></i>Accept
      </Button>

      <Modal 
      show={show} 
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Appointment Accepted</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={successful} alt="success image" className='success-img' />
          <p className='modal-txt'>You have succesfully accepted Appointment {AppNumber}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default AcceptDental;