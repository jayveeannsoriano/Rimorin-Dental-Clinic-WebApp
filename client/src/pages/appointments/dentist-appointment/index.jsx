import React from "react";
import DentistDTable from '../../../components/dental-acceptcancel';
import '../../../styles/dashboard.css';
import '../../../styles/modals.css';

export default function DentistAppointmentPage() {  

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/dentist">Home</a>
          </li>
          <li className="breadcrumb-item active">Appointments</li>
        </ol>
      </nav>
        
      <section className="section dashboard">
        <div className="row">
         <div className="col-12">
            <div className="card overflow-auto">
              <div className="card-body appointment-request-table">
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

