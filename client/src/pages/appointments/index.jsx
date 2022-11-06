import React from "react";
import { Button } from "react-bootstrap";
import CancelAppointment from "../../components/modals/cancel-appointment.jsx";
import RescheduleAppointment from "../../components/modals/reschedule-appointment.jsx";
import '../../styles/dashboard.css';
import '../../styles/modals.css';

export default function AppointmentPage() {  

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
        
      <div className="col-6 .col-md-4">
        <Button href="/dashboard/appointments/request-appointment">
          Request Appointment
        </Button>
      </div>

      <section className="section dashboard">
        <div className="row">
         <div className="col-12">
            <div className="card overflow-auto">

              <div className="card-body">
                <div className="nav-bar"></div>
                <h5 className="card-title">ONGOING APPOINTMENTS</h5>
                {/* insert datatable here */}
              </div>

              <div className="card-body">
                <div className="nav-bar"></div>
                <h5 className="card-title">FOLLOW-UP APPOINTMENTS</h5>
                  {/* insert datatable here */}
              </div>

              <div className="card-body">
                <div className="nav-bar"></div>
                <h5 className="card-title">APPOINTMENT HISTORY</h5>
                  {/* insert datatable here */}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

