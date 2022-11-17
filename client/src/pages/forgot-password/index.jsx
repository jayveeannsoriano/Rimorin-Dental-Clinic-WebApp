import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ForgotPassword = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="pass" onClick={handleShow}>Forgot Password?</div>

      <Modal show={show} onHide={handleClose} backdrop="static">

        <Modal.Header closeButton>
          <Modal.Title>Trouble logging in?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className='modal-txt'>Enter your email and we'll send you a link to get back into your account.</p>
          <Form>
          <Form.Group className="mb-3" controlId="forgot-pswd">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">
            Next
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}
export default ForgotPassword;
