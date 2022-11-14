import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';

function CancelDental(appNum) {
    const [modalState, setModalState] = useState(false);
    const [reasonInput, setReasonInput] = useState("");


    const handleClose = () => setModalState(false);
    const handleModal1 = () => {
        setModalState("modal-1")
    }

    const handleModal2 = () => {
        CancelAppointment();
        setModalState("modal-2")
    }
    //retrieve app number
    const StringAppNum = JSON.stringify(appNum);
    const ConvertStringApp = JSON.parse(StringAppNum);
    const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g, "");

    const CancelAppointment = () => {
        console.log("Deleting " + AppNumber);
        Axios.put("http://localhost:3001/deleteAppointment", {
            appNum: AppNumber,
        });
    }

    return (
        <>
            <Button className="cancel-button" onClick={handleModal2}>
                <i class="bi bi-x-lg"></i>Cancel
            </Button>

            <Modal 
            show={modalState == 'modal-1'} 
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Appointment</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="cancelValidation"
                        >
                        <Form.Label>Are you sure you want to cancel Appointment {AppNumber}?</Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleModal2}>
                        Yes. Continue
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modalState == 'modal-2'} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Appointment Cancelled</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img' />
                    <p className='modal-txt'>You have succesfully cancelled Appointment {AppNumber}</p>
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

export default CancelDental;