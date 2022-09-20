import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/dashboard';
import {BrowserRouter as Routes, Route} from "react-router-dom";
import {DataTable} from "simple-datatables"
import AppointmentPage from './pages/appointment-page';


function App() {

  // Data Table for Appointments
  const myTable = document.querySelector(".table");
  const dataTable = new DataTable(myTable); 
  
  // Pages
  return (
    <div className="App">
            <Routes>
                {/* <Route exact path="/" element={<LandingPage />} /> */}
                <Route path="/" exact element= {< Dashboard />} />
                <Route path="/" element={< AppointmentPage />} />

            </Routes>
    </div>
  );
}

export default App;
