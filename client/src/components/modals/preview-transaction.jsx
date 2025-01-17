import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ViewReceiptFile(appNum, date, time, appStats) {
    const [modalState, setModalState] = useState('close');
    const handleClose = () => setModalState(false);
    const handleModal1 = () => {
        setModalState("modal-1")
    }
    //Get values 

    return (
        <>

            <button
                type="submit"
                className="btn btn-primary submit-btn rx-btn"
                onClick={handleModal1}
            >
                Preview
            </button>

            <Modal
                show={modalState == 'modal-1'}
                size="lg"
                // show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Transaction Details</Modal.Title>
                </Modal.Header>

                <Modal.Body className="show-grid">
                    {/* insert code to preview generated PDF for receipt*/}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
