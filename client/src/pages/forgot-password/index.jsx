import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';
function ForgotPswd() {
  return (
    <Form>
      <div className="forgot-container">
        <h4 className='forgot-title'>Have trouble logging in?</h4>
        <p className='modal-txt'>Enter your email and we'll send you a link to get back into your account.</p>
        <Form.Group className="mb-3" controlId="forgotpswd.email">
          <div className="col-10">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          </div>
        </Form.Group>
        <Button variant="btn btn-light" className='fgt-btn'>
          <a href='/auth/login'>
          Back to login
          </a>
        </Button>
        <Button variant="primary" className='fgt-btn'>
          Continue
        </Button>
      </div>
    </Form>
  );
}

export default ForgotPswd;