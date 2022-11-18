import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ArchiveAccount() {
    const [modalState, setModalState] = useState(false);


    const handleClose = () => setModalState(false);
    const handleModal1 = () => {
        setModalState("modal-1")
    }

    const handleModal2 = () => {
        setModalState("modal-2")
    }


    return (
        <>
            <Button className="accept-button" onClick={handleModal1}>
                <i class="bi bi-check-lg"></i>Archive
            </Button>

            <Modal
                show={modalState == 'modal-1'}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Archive User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>You are about to archive an account. Would you like to proceed?.</Form.Label>
                            
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

            <Modal
                show={modalState == 'modal-2'}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Successfully archived user!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src={successful} alt="success image" className='success-img'/>
                    You have successfully archived INSERT_NAME.
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

export default ArchiveAccount;