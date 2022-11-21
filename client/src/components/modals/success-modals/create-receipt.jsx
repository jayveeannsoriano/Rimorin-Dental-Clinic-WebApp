import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../../styles/accounts.css';
import successful from '../../../assets/img/check.png';

export default function ModalTitle() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Get values

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction/Receipt Created!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* <img src={successful} alt="success image" className='success-img'/> */}
                    <p className='modal-txt'>Description!</p>
                </Modal.Body>

                <Modal.Footer>
                <Button onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}