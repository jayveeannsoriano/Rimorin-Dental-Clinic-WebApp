import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import {BrowserRouter as Router} from "react-router-dom";

// third party
import AOS from "aos";
import 'aos/dist/aos.css';

// styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// routing
import Routes from './routes';

// project imports
// import Dashboard from './pages/dashboard/index';
// import LandingPage from './pages/landing-page';
// import LoginPage from "./pages/login-page";
// import SignUpMain from "./pages/signupmain";
// import AppointmentPage from './pages/appointments';
// import UserProfile from './pages/userprofile';
// import BookingMain from "./pages/booking-main";
// import PatientInfo from "./pages/patient-info";
// import DentalRecord from './pages/dental-record';
// import Prescription from './pages/prescription';
// import Payments from './pages/payments';

function App() {

  // Animation on Scroll (AOS)
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

    return (
      <>
        <Routes/>
        <Outlet/>
      </>
    );
  }

export default App;
