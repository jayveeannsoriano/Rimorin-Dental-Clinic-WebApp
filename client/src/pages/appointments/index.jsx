import React from "react";
import { Button } from "react-bootstrap";
import '../../styles/dashboard.css';
import '../../styles/modals.css';
import DashboardTable from "../../components/dashboardTable";
import UpcomingDashboardTable from "../../components/dashboardUpcomingTable";

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
        <Button href="/patient/appointments/request-appointment">
          Request Appointment
        </Button>
      </div>

      <section className="section dashboard">
        <div className="row">
         <div className="col-12">
            <div className="card overflow-auto">

              <div className="card-body">
                <h5 className="card-title">ONGOING APPOINTMENTS</h5>
                <DashboardTable/>
              </div>

              <div className="card-body">
                <h5 className="card-title">FOLLOW-UP APPOINTMENTS</h5>
                  <UpcomingDashboardTable/>
              </div>

              <div className="card-body">
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

