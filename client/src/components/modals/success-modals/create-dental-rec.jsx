import React, { useState, useEffect } from 'react';
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
            <Modal>

                <Modal.Header closeButton>
                    {/* <Modal.Title>Title</Modal.Title> */}
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img'/>
                    <p className='modal-txt'>Dental record successfully created!</p>
                </Modal.Body>

                <Modal.Footer>
                <Button>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
} 