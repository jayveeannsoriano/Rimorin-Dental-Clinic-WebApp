import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function CancelAppointment() {
  const [modalState, setModalState] = useState(false);

  const handleClose = () => setModalState(false);
  const handleModal1= () => {
    setModalState("modal-1")
  }

  const handleModal2= () => {
    setModalState("modal-2")
  }


  return (
    <>

      <span class="cancel-button" onClick={handleModal1}><i class="bi bi-x-lg"></i> Cancel</span>

      <Modal show={modalState == 'modal-1'} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Please explain your reason for cancelling your appointment.</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleModal2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalState == 'modal-2'}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Appointment Cancelled!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully cancelled your appointment.
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

export default CancelAppointment;