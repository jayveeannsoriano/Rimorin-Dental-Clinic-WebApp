import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; 
import Axios from 'axios';

function rebook(appNum) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [selectValue, setSelectedValue] = useState();

  //retrieve app number
  const StringAppNum = JSON.stringify(appNum);
  const ConvertStringApp = JSON.parse(StringAppNum);
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g,"");


  const newStatus = () =>{
    console.log("Updating " + AppNumber);
    console.log("Update values: " + selectValue);
    Axios.put("http://localhost:3001/updateStatus",{
     appNum: AppNumber,
     newAppStatus: selectValue 
    });
    handleClose();
  }
  
  

  return (
    <>
      <Button className="update-button" variant="warning" onClick={handleShow}>
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

          <Form>
            <Form.Group 
            className="mb-3" 
            controlId="exampleFormControlSelect1"
            >
              <Form.Label>Appointment Status</Form.Label> 
              <Form.Select value={selectValue} onChange={e=>setSelectedValue(e.target.value)}>
              <option value="" selected disabled>--Select Appointment Status--</option>
              <option>Accepted</option>
              <option>Finished</option>
              <option>Arrived</option>
              <option>No Show</option>
              <option>Cancelled</option>
              </Form.Select>
              
            </Form.Group>


            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
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