import Form from 'react-bootstrap/Form';
import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import PasswordConfirmModal from './forogot-password-modal';
function ForgotPswd() {
  const [email, setEmail] = useState("");
  const ForgotPassword = () => {
    var emailEl = document.getElementById('email')
    setEmail(emailEl.value);
  }

useEffect(() => {
  Axios.post("http://localhost:3001/forgot-password", {email: email})
});

  return (
    <Form>
      <div className="forgot-container">
        <h4 className='forgot-title'>Have trouble logging in?</h4>
        <p className='modal-txt'>Enter your email and we'll send you a link to get back into your account.</p>
        <Form.Group className="mb-3" controlId="forgotpswd.email">
          <div className="col-10">
          <Form.Label>Email address</Form.Label>
          <Form.Control id="email" type="email" placeholder="name@example.com" />
          </div>
        </Form.Group>
        <Button variant="btn btn-light" className='fgt-btn'>
          <a href='/auth/login'>
          Back to login
          </a>
        </Button>
        {/* <Button variant="primary" className='fgt-btn' onClick={ForgotPassword}>
          Continue
        </Button> */}
        <PasswordConfirmModal/>

      </div>
    </Form>
  );
}

export default ForgotPswd;