import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';


function AcceptDental(pName,dName,appNum,date,time,consultation) {

  //Get values 
  const StringfyValues = JSON.stringify(pName,dName,appNum,date,time,consultation);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  //values
  const AppNumber = JSON.stringify(ConvertStringfyValues.appNum).replace(/"/g,"");
  const PatientValue = JSON.stringify(ConvertStringfyValues.pName).replace(/"/g,"");
  const DentistValue = JSON.stringify(ConvertStringfyValues.dName).replace(/"/g,"");
  const DateValue = JSON.stringify(ConvertStringfyValues.date).replace(/"/g,"");
  const TimeValue = JSON.stringify(ConvertStringfyValues.time).replace(/"/g,"");
  const ConsultValue = JSON.stringify(ConvertStringfyValues.consultation).replace(/"/g,"");



  const AcceptAppointment = () => {

    Axios.post("http://localhost:3001/acceptAppointment", {userNameApp: PatientValue, appNumber: AppNumber ,dentistValue: DentistValue, dateValue: DateValue, consulInput: ConsultValue, getTime:TimeValue})
  }


  return (
    <>
      <Button className="accept-button" variant="warning" onClick={AcceptAppointment}>
      <i class="bi bi-pencil-fill"></i>Accept
      </Button>
    </>
  );
}

export default AcceptDental;