import React from "react";
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
// import Footer from "../components/footer.jsx";
import '../styles/dashboard.css';
import Button from 'react-bootstrap/Button';

export default function AppointmentPage() {  

  return (
    <div>

      <main id="main" className="main">

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
            <div className="card recent-sales overflow-auto">

              <div className="card-body">
                <div className="nav-bar"></div>
                <h5 className="card-title">APPOINTMENT REQUESTS</h5>

                <table className="table table-borderless datatable">
                  <thead>
                    <tr>
                      <th scope="col">Appt #</th>
                      <th scope="col">Patient Name</th>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Appt. Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                
                  <tbody>
                      <tr>
                        <th scope="row"><a href="#">#2457</a></th>
                        <td>Brandon Jacob</td>
                        <td><a href="#" class="text-primary">22/04/2022 9:00 AM</a></td>
                        <td><span class="badge bg-success">Approved</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2147</a></th>
                        <td>Bridie Kessler</td>
                        <td><a href="#" class="text-primary">22/04/2022 10:00 AM</a></td>
                        <td><span class="badge bg-warning">Pending</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2049</a></th>
                        <td>Ashleigh Langosh</td>
                        <td><a href="#" class="text-primary">22/04/2022 11:00 AM</a></td>
                        <td><span class="badge bg-success">Approved</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Angus Grady</td>
                        <td><a href="#" class="text-primar">22/04/2022 1:00 PM</a></td>
                        <td><span class="badge bg-danger">Rejected</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Raheem Lehner</td>
                        <td><a href="#" class="text-primary">22/04/2022 2:00 PM</a></td>
                        <td><span class="badge bg-success">Approved</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                    </tbody>
                </table>
              </div>
              {/* End of Ungoing Appointments */}

            </div>
          </div>
          {/* <!-- Today's Appointment --> */}
        </div>
      </section>
    </main>

      <Header />
      <Sidebar />
    </div>
  );
}