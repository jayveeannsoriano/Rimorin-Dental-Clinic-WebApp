import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';
import Form from 'react-bootstrap/Form';

export default function AppointmentCancelled() {

    const [modalState, setModalState] = useState(false);
    const [reasonInput, setReasonInput] = useState("");
    const [validated, setValidated] = useState(false);


    const handleClose = () => setModalState(false);
    const handleModal1 = () => {
        setModalState("modal-1")
    }

    const handleModal2 = () => {
        setModalState("modal-2")
    }

    return (
        <>
            <button type="button" class="btn btn-primary spc" onClick={handleModal1}> <i class="bi bi-eye"></i> View Archived Accounts</button>


            <Modal show={modalState == 'modal-1'} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group
                            className="mb-3"
                            controlId="cancelValidation"
                        >
                            <Form.Label>Are you sure you want to cancel?</Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleModal2}>
                        Proceed
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modalState == 'modal-2'} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Appointment Cancelled</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img' />
                    <p className='modal-txt'>You have succesfully updated your changes!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}
