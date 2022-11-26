import React from "react";
import DentistDTable from '../../../components/dental-acceptcancel';
import '../../../styles/dashboard.css';
import '../../../styles/modals.css';
import { Form } from "react-bootstrap";

export default function SecretaryAppointmentPage() {  

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/secretary">Home</a>
          </li>
          <li className="breadcrumb-item active">Appointments</li>
        </ol>
      </nav>
        
      <section className="section dashboard">
        <div className="row">
         <div className="col-12">
            <div className="card overflow-auto">
              <div className="card-body appointment-request-table">
                {/*//pa-map nalang mga dentists accounts*/}
                <div className="col-lg-4">
                  <label>Dentist</label>
                    <Form.Select>
                      <option value="" selected disabled>Select a Dentist</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
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

