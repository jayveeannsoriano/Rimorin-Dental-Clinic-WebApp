import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ErrorImg from '../assets/img/error-404.png'

const errorpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <img src={ErrorImg} class="img-fluid py-5" alt="Page Not Found"/>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </section>
    </div>
  )
}
export default errorpage;