import React from "react";
import { Button } from "react-bootstrap";
import CancelAppointment from "../../../components/modals/cancel-appointment.jsx";
import RescheduleAppointment from "../../../components/modals/reschedule-appointment.jsx";
import DentistDTable from '../../../components/dental-acceptcancel';
import '../../../styles/dashboard.css';
import '../../../styles/modals.css';

export default function DentistAppointmentPage() {  

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active">Appointments</li>
        </ol>
      </nav>
        
      <section className="section dashboard">
        <div className="row">
         <div className="col-12">
            <div className="card overflow-auto">
                
              <div className="card-body">
                <div className="nav-bar"></div>
                <h5 className="card-title">APPOINTMENT REQUEST</h5>
                <DentistDTable/>
              </div>
              {/* End of Appointment Request */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

