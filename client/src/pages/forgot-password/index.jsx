import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import PasswordConfirmModal from './forogot-password-modal';


function ForgotPswd() {

  const [modalState, setModalState] = useState(false);
  const handleModalClose = () => setModalState(false);

  const handleConfirmation = () => {
    setModalState('confirm')
  }

  const [email, setEmail] = useState("");
  const ForgotPassword = () => {
    var emailEl = document.getElementById('email')
    setEmail(emailEl.value);
  }

  useEffect(() => {
    Axios.post("http://localhost:3001/forgot-password", { email: email })
  });

  // const regex = new RegExp (/"^{([^>( ) [\]\+ {;:\s@\"]+(\. [^>( ) [\]\., ; :\s@\"]+)×) | (\".+\") )@(([^>()} [\]\., ; ;\s@\"]+\.)+[^< ( ) [\]\., ; :\s@\"]{2,}}$"/i);
  const regex = new RegExp('^{([^>( ) [\]\+ {;:\s@\"]+(\. [^>( ) [\]\., ; :\s@\"]+)×)' | '(\".+\") )@(([^>()} [\]\., ; ;\s@\"]+\.)+[^< ( ) [\]\., ; :\s@\"]{2,}}$');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (regex.test(email) === false) {
      setError('Enter a valid email.');
    } else {
      setError('');
      return true;
    }
  }

  const submit = () => {
    if ( email != '') {
      ForgotPassword();
      handleConfirmation();
    } else{
      setError('Please enter your email.');
    }
  }

  return (
    <Form>
      <div className="forgot-container">
        <h4 className='forgot-title'>Have trouble logging in?</h4>
        <p className='forgot-descp'>Enter your email and we'll send you a link to get back into your account.</p>
        <Form.Group className="mb-3" controlId="forgotpswd.email">
          <div className="col-10">
            <Form.Label>Email address</Form.Label>
            <Form.Control id="email" type="email" placeholder="name@example.com" onChange={checkEmail} required />
            <p className='text-danger p-2 m-2'>{error}</p>
          </div>
        </Form.Group>
        <Button variant="btn btn-light" className='fgt-btn'>
          <a href='/auth/login'>
            Back to login
          </a>
        </Button>
        <Button variant="primary" className='fgt-btn' onClick={submit}>
          Continue
        </Button>
        {/* <PasswordConfirmModal/> */}

      </div>


      {/* Confirmation */}
      <Modal show={modalState == 'confirm'} onHide={handleModalClose}>

        <Modal.Header closeButton>
          <Modal.Title>Password Reset Link Sent</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className='modal-txt'>Check your e-mail for the reset link!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </Form>


  );
}

export default ForgotPswd;