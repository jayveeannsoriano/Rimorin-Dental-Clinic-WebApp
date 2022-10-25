import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CancelAppointment from "../../components/modals/cancel-appointment.jsx";
import RescheduleAppointment from "../../components/modals/reschedule-appointment.jsx";
import '../../styles/dashboard.css';
import '../../styles/modals.css';

export default function AppointmentPage() {  
  let navigate = useNavigate();

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
        <Button onClick={() => {navigate("/dashboard/appointments/request-appointment")}}>
          Request Appointment
        </Button>
      </div>

      <section className="section dashboard">
        <div className="row">
         <div className="col-12">
            <div className="card recent-sales overflow-auto">

              <div className="card-body">
                <div className="nav-bar"></div>
                <h5 className="card-title">ONGOING APPOINTMENTS</h5>

                <table className="table table-borderless datatable">
                  <thead>
                    <tr>
                      <th scope="col">Doctor</th>
                      <th scope="col">Appt #</th>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Appt. Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                
                   <tbody>
                      <tr>
                        <th scope="row"><a href="#">#2457</a></th>
                        <td>Brandon Jacob</td>
                        <td><a href="#" class="text-primary">At praesentium minu</a></td>
                        <td><span class="badge bg-success">Approved</span></td>
                        <td><RescheduleAppointment />  <CancelAppointment /> <span class="badge bg-secondary"><i class="bi bi-eye"></i> View</span></td>
                      </tr>

                    </tbody> 
                </table>
              </div>
              {/* End of Ungoing Appointments */}


              <div className="card-body">
                <div className="nav-bar"></div>
                <h5 className="card-title">FOLLOW-UP APPOINTMENTS</h5>

                <table className="table table-borderless datatable">
                  <thead>
                    <tr>
                      <th scope="col">Doctor</th>
                      <th scope="col">Appt #</th>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Appt. Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  {/* <tbody>
                      <tr>
                        <th scope="row"><a href="#">#2457</a></th>
                        <td>Brandon Jacob</td>
                        <td><a href="#" class="text-primary">At praesentium minu</a></td>
                        <td></td>
                        <td><span class="badge bg-success">Approved</span></td>
                      </tr>

                      <tr>
                        <th scope="row"><a href="#">#2147</a></th>
                        <td>Bridie Kessler</td>
                        <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
                        <td></td>
                        <td><span class="badge bg-warning">Pending</span></td>
                      </tr>

                      <tr>
                        <th scope="row"><a href="#">#2049</a></th>
                        <td>Ashleigh Langosh</td>
                        <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
                        <td></td>
                        <td><span class="badge bg-success">Approved</span></td>
                      </tr>

                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Angus Grady</td>
                        <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
                        <td></td>
                        <td><span class="badge bg-danger">Rejected</span></td>
                      </tr>

                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Raheem Lehner</td>
                        <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
                        <td></td>
                        <td><span class="badge bg-success">Approved</span></td>
                      </tr>

                    </tbody> */}
                </table>
              </div>
              {/* End of Follow-up Appointments */}

              <div className="card-body">
                <div className="nav-bar"></div>
                <h5 className="card-title">APPOINTMENT HISTORY</h5>

                <table className="table table-borderless datatable">
                  <thead>
                    <tr>
                      <th scope="col">Doctor</th>
                      <th scope="col">Appt #</th>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Appt. Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              {/* End of Appointment History */}

            </div>
          </div>
          {/* <!-- Today's Appointment --> */}
        </div>
      </section>
    </div>
  );
}

