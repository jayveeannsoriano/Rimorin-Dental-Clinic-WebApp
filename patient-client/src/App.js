import React, { useEffect } from "react";
import AOS from "aos";
import './App.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './pages/dashboard';
import LandingPage from './pages/landing-page';
import LoginPage from "./pages/login-page";
import SignUpMain from "./pages/signupmain";
import AppointmentPage from './pages/appointments';
import Booking from './pages/booking';
import UserProfile from './pages/userprofile';
// import {DataTable} from "simple-datatables";

function App() {
    // Data Table for Appointments
    // const myTable = document.querySelector(".table");
    // const dataTable = new DataTable(".table");

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

  // Pages
    return (
      <Router>
        <div className="App">
           <Routes>
                <Route path="/" exact element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpMain />} />
                <Route path="/dashboard" element={< Dashboard />}/>
                <Route path="/appointments" element={< AppointmentPage />}/>
                <Route path="/booking" element={< Booking />}/>
                <Route path="/userprofile" element={< UserProfile />}/>
           </Routes>
        </div>
    </Router>
    );
  }

export default App;
