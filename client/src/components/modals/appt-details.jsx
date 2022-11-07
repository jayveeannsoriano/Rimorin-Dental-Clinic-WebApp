import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function ApptDetails(appNum,date,time,appStats) {
  const [modalState, setModalState] = useState('close');
  const handleClose = () => setModalState(false);
  const handleModal1= () => {
    setModalState("modal-1")
  }
  //Get values 
  const StringfyValues = JSON.stringify(pName,dName,appNum,date,time,consultation);
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
      size="md"
      // show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
	  aria-labelledby="contained-modal-title-vcenter"
	  centered
	>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Appointment Details
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="show-grid">
        <Container>
		<ul class="info-details">
							<li>
								<div class="details-header">
									<div class="row">
										<div class="col-md-6">
											<span id="appointmentbookingID" class="title">{AppNumber}</span>
											{/* <span id="date_selected" class="text">{DateValue} {TimeValue}</span> */}
										</div>
										<div class="col-md-6">
											<div class="text-right">
												<button type="button" class="btn bg-success-light btn-sm" id="appointment_status">{DateValue} | {TimeValue}</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<span class="title">Status:</span>
								<span class="text">{StatsValue}</span>
							</li>
							<li>
								<span class="title">Confirm Date:</span>
								<span class="text">29 Jun 2019</span>
							</li>
						</ul>
        </Container>
      </Modal.Body>
      <Modal.Footer>
	  <Button variant="primary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>      
    </>
  );
}

export default ApptDetails;