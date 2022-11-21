import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

function ResetPswd() {
    var url = require('url');
    var url_parts = url.parse(window.location.href, true);
    var query = url_parts.query;
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const ResetPassword = () => {
        var passwordElement = document.getElementById('newPassword')
        var confirmPasswordElement = document.getElementById('confirmPassword')
        setNewPassword(passwordElement.value);
        setConfirmPassword(confirmPasswordElement.value);
    }
    
    useEffect(() => {
        if (newPassword === confirmPassword) {
            Axios.post("http://localhost:3001/reset-password", { email: query.email, newPassword: newPassword, confirmPassword: confirmPassword })
        } else {
            alert("Passwords must match.")
        }
    });

    return (
            <Form>
                <div className="reset-container">
                    <h4 className='reset-title'>Reset your password</h4>
                    <Form.Group className="mb-3" controlId="resetpswd.newPassword">
                        <div className="col-10">
                            <Form.Label>New password</Form.Label>
                            <Form.Control id="newPassword" type="password" placeholder="Enter new password" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="resetpswd.confirmPassword">
                        <div className="col-10">
                            <Form.Label>Re-enter new password</Form.Label>
                            <Form.Control id="confirmPassword" type="password" placeholder="Re-enter new password" />
                        </div>
                    </Form.Group>
                    <Button variant="btn btn-light" className='fgt-btn'>
                        <a href='/auth/login'>
                            Back to login
                        </a>
                    </Button>
                    <Button variant="primary" className='fgt-btn' onClick={ResetPassword}>
                        Continue
                    </Button>
                </div>
            </Form>
    );
}

export default ResetPswd;