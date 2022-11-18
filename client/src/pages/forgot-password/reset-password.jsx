import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

export default function ResetPswd() {

    const [newPassword, setNewPassword] = useState("");
    
    return (
        <>

            <Form>
                <div className="forgot-container">
                    <h4 className='forgot-title'>Reset your password</h4>
                    {/* <p className='modal-txt'>texthere</p> */}
                    <Form.Group className="mb-3" controlId="forgotpswd">
                        <div className="col-10">
                            <Form.Label>New password</Form.Label>
                            <Form.Control type="password" placeholder="Enter new password" />
                        </div>

                        <div className="col-10">
                            <Form.Label>Re-enter new password</Form.Label>
                            <Form.Control type="password" placeholder="Re-enter new password" />
                        </div>
                    </Form.Group>
                    <Button variant="btn btn-light" className='fgt-btn'>
                        <a href='/auth/login'>
                            Back to login
                        </a>
                    </Button>
                    <Button variant="primary" className='fgt-btn' onClick={"#enter reset password sccess here>"} >
                        Reset Password
                    </Button>
                </div>
            </Form>

        </>
    );
}
