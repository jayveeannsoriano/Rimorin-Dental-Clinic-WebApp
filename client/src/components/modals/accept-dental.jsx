import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';
import Modal from 'react-bootstrap/Modal';

function AcceptDental(dentistIDnumber,patientIDnumber, pName, dName, appNum, date,formattedDate, time, consultation) {
  console.log("ACCEPT DENTAL:",dentistIDnumber,patientIDnumber, pName, dName, appNum, date,formattedDate, time, consultation)
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    window.location.reload();
  };
  const handleShow = () => setShow(true);
  // if(dentistIDnumber =! undefined || null){ 
  //   console.log("This is Dentist")
  // }else{
  //   dentistIDnumber = "DT#000SC"
  // }
  //Get values 
  const StringfyValues = JSON.stringify(dentistIDnumber,patientIDnumber, pName, dName, appNum, date,formattedDate, time, consultation);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  //values
  const PatientIDnumber = JSON.stringify(ConvertStringfyValues.patientIDnumber).replace(/"/g, "");
  const AppNumber = JSON.stringify(ConvertStringfyValues.appNum).replace(/"/g, "");
  const PatientValue = JSON.stringify(ConvertStringfyValues.pName).replace(/"/g, "");
  const DentistValue = JSON.stringify(ConvertStringfyValues.dName).replace(/"/g, "");
  const DateValue = JSON.stringify(ConvertStringfyValues.date).replace(/"/g, "");
  const FormattedDateValue = JSON.stringify(ConvertStringfyValues.formattedDate).replace(/"/g, "");
  const TimeValue = JSON.stringify(ConvertStringfyValues.time).replace(/"/g, "");
  const ConsultValue = JSON.stringify(ConvertStringfyValues.consultation).replace(/"/g, "");
  if (JSON.stringify(ConvertStringfyValues.dentistIDnumber) == undefined){
    console.log("THIS IS SEC")
     var dentistNumber = "SC#000XX"
  }else{
     var dentistNumber = JSON.stringify(ConvertStringfyValues.dentistIDnumber).replace(/"/g, "");
  }
  
  const AcceptAppointment = () => {
    handleShow();
    Axios.post("http://localhost:80/acceptAppointment", {dentistIDnumber:dentistNumber,patientIDnumber: PatientIDnumber, userNameApp: PatientValue, appNumber: AppNumber, dentistValue: DentistValue,formattedDate:FormattedDateValue, dateValue: DateValue, consulInput: ConsultValue, getTime: TimeValue })
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
          <p className='modal-txt'>You have successfully accepted Appointment {AppNumber}</p>
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