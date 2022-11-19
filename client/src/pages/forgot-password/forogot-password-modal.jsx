import React, { useState,  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';
import Axios from 'axios';


export default function PasswordConfirmModal() {

        const [email, setEmail] = useState("");
        const ForgotPassword = () => {
            var emailEl = document.getElementById('email')
            setEmail(emailEl.value);
        }

        useEffect(() => {
            Axios.post("http://localhost:3001/forgot-password", { email: email })
        });
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const handlePasswordReset = () => {
            handleShow();
            ForgotPassword();
        }

        return (
            <>
                {/* <button type="button" class="btn btn-primary spc" onClick={handleShow}> <i class="bi bi-eye"></i> View Archived Accounts</button> */}
                <Button variant="primary" className='fgt-btn' onClick={handlePasswordReset}>Continue</Button>
                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Password Reset Link Sent</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src={successful} alt="success image" className='success-img' />
                        <p className='modal-txt'>Check your e-mail for the reset link!</p>
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
