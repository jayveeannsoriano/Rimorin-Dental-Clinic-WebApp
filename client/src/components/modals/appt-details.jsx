// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';

// function ApptDetailsModal(props) {
//   return (
//     <Modal {...props} 
// 	size="md"
// 	aria-labelledby="contained-modal-title-vcenter"
// 	centered
// 	>
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Appointment Details
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="show-grid">
//         <Container>
// 		<ul class="info-details">
// 							<li>
// 								<div class="details-header">
// 									<div class="row">
// 										<div class="col-md-6">
// 											<span id="appointmentbookingID" class="title"></span>
// 											<span id="date_selected" class="text"></span>
// 										</div>
// 										<div class="col-md-6">
// 											<div class="text-right">
// 												<button type="button" class="btn bg-success-light btn-sm" id="appointment_status">Completed</button>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</li>
// 							<li>
// 								<span class="title">Status:</span>
// 								<span class="text">Completed</span>
// 							</li>
// 							<li>
// 								<span class="title">Confirm Date:</span>
// 								<span class="text">29 Jun 2019</span>
// 							</li>
// 						</ul>
//         </Container>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function ApptDetails() {
//   const [modalShow, setModalShow] = useState(false);
  

//   return (
//     <>
//       <Button className="view-button" variant="primary" onClick={() => setModalShow(true)}>
// 	  <i class="ci-show"></i>View
//       </Button>

//       <ApptDetailsModal show={modalShow} onHide={() => setModalShow(false)}/>
//     </>
//   );
// }

// export default ApptDetails;





/////////////////////


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function ApptDetails(appNum,date,time) {
  const [modalState, setModalState] = useState('close');
  const handleClose = () => setModalState(false);
  const handleModal1= () => {
    setModalState("modal-1")
  }
  //appNum
  const StringAppNum = JSON.stringify(appNum);
  const ConvertStringApp = JSON.parse(StringAppNum);
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g,"");

  //date
  const StringDate = JSON.stringify(appNum,time,date);
  const ConvertStringDate = JSON.parse(StringDate);
  const DateValue = JSON.stringify(ConvertStringDate.date).replace(/"/g,"");

  //time
  const StringAppTime = JSON.stringify(appNum,time,date);
  const ConvertStringTime = JSON.parse(StringAppTime);
  const TimeValue = JSON.stringify(ConvertStringTime.time).replace(/"/g,"");
  

  return (
    <>
      <Button className="view-button" variant="primary" onClick={handleModal1}>
	  <i class="ci-show"></i>View
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
											<span id="date_selected" class="text">{DateValue} {TimeValue}</span>
										</div>
										<div class="col-md-6">
											<div class="text-right">
												<button type="button" class="btn bg-success-light btn-sm" id="appointment_status">Completed</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<span class="title">Status:</span>
								<span class="text">Completed</span>
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