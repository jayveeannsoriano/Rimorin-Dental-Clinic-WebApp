import React from "react";
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
import '../styles/dashboard.css';
// import Button from 'react-bootstrap/Button';

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
        
      <div className="col-6 .col-md-4">
      <a href="/booking" className="btn btn-primary" role="button">Request Appointment</a>
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
              {/* End of Appointment History */}

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

