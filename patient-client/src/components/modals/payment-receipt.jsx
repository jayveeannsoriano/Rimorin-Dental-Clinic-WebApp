//view payment receipt

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Receipt() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Test
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Payment Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={"./assets/img/"}/>
            Image placeholder
            </Modal.Body>
      </Modal>
    </>
  );
}

export default Receipt;