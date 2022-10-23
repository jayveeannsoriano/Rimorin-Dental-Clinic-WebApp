import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// third party
import AOS from "aos";
import 'aos/dist/aos.css';

// styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// project imports
import Dashboard from './pages/dashboard';
import LandingPage from './pages/landing-page';
import LoginPage from "./pages/login-page";
import SignUpMain from "./pages/signupmain";
import AppointmentPage from './pages/appointments';
import UserProfile from './pages/userprofile';
import BookingMain from "./pages/booking-main";
import PatientInfo from "./pages/patient-info";
import DentalRecord from './pages/dental-record';
import Prescription from './pages/prescription';
import Payments from './pages/payments';

// Layout
import Sidebar from "./layout/DashboardLayout/sidebar";
import Header from "./layout/DashboardLayout/dashboard-header";


function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  
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
          <Sidebar isSidebar={isSidebar} />
          <main>
            < Header />
              <Routes>
                    <Route path="/" exact element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpMain />} />
                    <Route path="/dashboard" element={< Dashboard />}/>
                    <Route path="/appointments" element={< AppointmentPage />}/>
                    <Route path="/userprofile" element={< UserProfile />}/>
                    <Route path="/booking" element={< BookingMain />}/>
                    <Route path="/patientinfo" element={< PatientInfo />}/>
                    <Route path="/dentalrecords" element={< DentalRecord />}/>
                    <Route path="/prescription" element={< Prescription />}/>
                    <Route path="/paymentrecords" element={< Payments />}/>
              </Routes>
           </main>
        </div>
    </Router>
    );
  }

export default App;
