//import React, { useState } from 'react';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import '../../styles/modals.css';
//import Form from 'react-bootstrap/Form';

//function ViewAccount (pName, consultation, appNum, date, time, appStats) {
//    const [modalState, setModalState] = useState('close');
//    const handleClose = () => setModalState(false);
//    const handleModal1 = () => {
//        setModalState("show")
//    }
//    //Get values 
    
//    return (
//        <>
//            <Button className="view-button" variant="primary" onClick={handleModal1}>
//                <i class="bi bi-eye-fill"></i> View
//            </Button>

//            <Modal
//                size="lg"
//                show={show}
//                onHide={handleClose}
//                backdrop="static"
//                keyboard={false}
//                aria-labelledby="contained-modal-title-vcenter"
//                centered
//            >
//                <Modal.Header closeButton>
//                    <Modal.Title>Account Details</Modal.Title>
//                </Modal.Header>

//                <Modal.Body className="show-grid">
//                    <div className="appointment-details-modal">
//                        <div class="row">
//                            <div class="col modal-label">Account Name: </div>
//                            <div class="col modal-values">Text</div>
//                        </div>
//                        <div class="row">
//                            <div class="col modal-label">Account Name: </div>
//                            <div class="col modal-values">Text</div>
//                        </div>
//                        <div class="row">
//                            <div class="col modal-label">Account Name: </div>
//                            <div class="col modal-values">Text</div>
//                        </div>
//                        <div class="row">
//                            <div class="col modal-label">Account Name: </div>
//                            <div class="col modal-values">Text</div>
//                        </div>
//                    </div>
//                </Modal.Body>
//                <Modal.Footer>
//                    <Button variant="primary" onClick={handleClose}>Close</Button>
//                </Modal.Footer>
//            </Modal>
//        </>
//    );
//}

//export default ViewAccount;