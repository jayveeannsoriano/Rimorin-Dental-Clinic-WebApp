import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './pages/dashboard';
import AppointmentPage from './pages/appointments';
import Booking from './pages/booking';
// import {useEffect} from 'react';
// import {DataTable} from "simple-datatables";

function App() {
    // Data Table for Appointments
    // const myTable = document.querySelector(".table");
    // const dataTable = new DataTable(".table");

  // Pages
    return (
      <Router>
        <div className="App">
           <Routes>
                <Route path="/" exact element={< Dashboard />}/>
                <Route path="/appointments" element={< AppointmentPage />}/>
                <Route path="/booking" element={< Booking />}/>
           </Routes>
        </div>
    </Router>
    );
  }

export default App;
