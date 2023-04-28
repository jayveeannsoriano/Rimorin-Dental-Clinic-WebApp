import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';
import Modal from 'react-bootstrap/Modal';

function AcceptDental(dentistIDnumber,patientIDnumber, pName, dName, appNum, date,formattedDate, time,procedures,procedureTime) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    window.location.reload();
  };
  const handleShow = () => setShow(true);
  
  //Get values 
  const StringfyValues = JSON.stringify(dentistIDnumber,patientIDnumber, pName, dName, appNum, date,formattedDate,time,procedures,procedureTime);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  //values
  const PatientIDnumber = JSON.stringify(ConvertStringfyValues.patientIDnumber).replace(/"/g, "");
  const AppNumber = JSON.stringify(ConvertStringfyValues.appNum).replace(/"/g, "");
  const PatientValue = JSON.stringify(ConvertStringfyValues.pName).replace(/"/g, "");
  const DentistValue = JSON.stringify(ConvertStringfyValues.dName).replace(/"/g, "");
  const DateValue = JSON.stringify(ConvertStringfyValues.date).replace(/"/g, "");
  const FormattedDateValue = JSON.stringify(ConvertStringfyValues.formattedDate).replace(/"/g, "");
  const TimeValue = JSON.stringify(ConvertStringfyValues.time).replace(/"/g, "");
  const proceduresValue = ConvertStringfyValues.procedures;
  const procedureTimeValue = JSON.stringify(ConvertStringfyValues.procedureTime).replace(/"/g, "");

  if (JSON.stringify(ConvertStringfyValues.dentistIDnumber) == undefined){
    console.log("THIS IS SEC")
     var dentistNumber = "SC#000XX"
  }else{
     var dentistNumber = JSON.stringify(ConvertStringfyValues.dentistIDnumber).replace(/"/g, "");
  }
  
  const AcceptAppointment = async () => {
    handleShow();
    const response = await Axios.get('http://localhost:3001/getUserInfo',{
      params: {
        PatientIDnumber:PatientIDnumber.substring(3)
      }
    });

    Axios.post(
      "http://localhost:3001/acceptAppointment",
      {
        dentistIDnumber: dentistNumber,
        patientIDnumber: PatientIDnumber,
        userNameApp: PatientValue,
        appNumber: AppNumber,
        dentistValue: DentistValue,
        formattedDate: FormattedDateValue,
        dateValue: DateValue,
        procedures:proceduresValue,
        getTime: TimeValue,
        procedureTime: procedureTimeValue,
      }
    );

    const procedureNames = [];

    proceduresValue.forEach((item) => {
      if (item.chosen.length > 0) {
        item.chosen.forEach((chosenProcedure) => {
          procedureNames.push(chosenProcedure.procedure);
        });
      }
    });

    Axios.post("http://localhost:3001/sendSMS", {
      phone: "0" + response["data"][0]["mobile"],
      message:
        "Hi " +
        PatientValue +
        "! This is from Rimorin Dental Clinic notifying you that your requested appointment on " +
        DateValue +
        " at " +
        TimeValue +
        " with Dr. " +
        DentistValue +
        " for the following procedure/s:\n" +
        procedureNames.join("\n") +
        " \nhas been accepted. Patients are expected to arrive 15 minutes earlier. Please let us know in advance if you cannot make it. Thank you!",
    });

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