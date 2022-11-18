import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../../styles/accounts.css';
import successful from '../../../assets/img/check.png';

export default function AppointmentFinished(appNum) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Get values
    const StringfyValues = JSON.stringify(appNum);
    const ConvertStringfyValues = JSON.parse(StringfyValues);
    const AppNumber = JSON.stringify(ConvertStringfyValues.appNum).replace(/"/g, "");

    return (
        <>
            <button type="button" class="btn btn-primary spc" onClick={handleShow}> <i class="bi bi-eye"></i> View Archived Accounts</button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    {/* <Modal.Title>Appointment Status</Modal.Title> */}
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img'/>
                    <p className='modal-txt'>Appointment {AppNumber} Marked as Finished!</p>
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
