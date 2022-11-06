import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

function CancelDental(appNum) {

    //retrieve app number
  const StringAppNum = JSON.stringify(appNum);
  const ConvertStringApp = JSON.parse(StringAppNum);
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g,"");

    const CancelAppointment = () => {
    console.log("Deleting " + AppNumber);
    Axios.put("http://localhost:3001/deleteAppointment",{
      appNum: AppNumber,
     });
      }

  return (
    <>
      <Button className="cancel-button" variant="warning" onClick={CancelAppointment}>
      <i class="bi bi-pencil-fill"></i>Cancel
      </Button>
    </>
  );
}

export default CancelDental;