import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';


export default function ResetPswdSuccessful() {
    return (
        <>

            <Form>
                <div className="forgot-container">
                    <h4 className='forgot-title'>Password changed successfully! Please relogin with your new password.</h4>
                    <p className='modal-txt'>Go back to login page</p>

                    <Button variant="btn btn-light" className='fgt-btn'>
                        <a href='/auth/login'>
                            Back to login
                        </a>
                    </Button>
                </div>
            </Form>

        </>
    );
}
