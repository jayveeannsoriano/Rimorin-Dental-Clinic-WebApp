import React from "react";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";
import Footer from "../components/footer.jsx";
import '../styles/booking.css';

function Booking(){
    return(
        <div>
            <main id="main" className="main">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/appointments">Appointments</a>
                        </li>
                        <li className="breadcrumb-item active">Request Appointment</li>
                    </ol>
                </nav>

            <section className="section dashboard">
                <div className="row">
                
                    {/* Request Appointment */}
                    <div className="card-body">
                    <h5 className="card-title">REQUEST APPOINTMENT</h5>

                    {/* <!-- Stepers Wrapper --> */}
                    <ul className="stepper stepper-horizontal">

                    {/* <!-- First Step --> */}
                    <li className="completed">
                        <a href="#!">
                        <span className="circle">1</span>
                        <span className="label">First step</span>
                        </a>
                    </li>

                    {/* <!-- Second Step --> */}
                    <li className="active">
                        <a href="#!">
                        <span className="circle">2</span>
                        <span className="label">Second step</span>
                        </a>
                    </li>

                    {/* <!-- Third Step --> */}
                    <li className="warning">
                        <a href="#!">
                        <span className="circle"><i className="fas fa-exclamation"></i></span>
                        <span className="label">Third step</span>
                        </a>
                    </li>

                    </ul>
                    {/* <!-- /.Stepers Wrapper --> */}

                    </div> {/* End of card-body */}

                </div>
            </section>
            </main>

            <Header/>
            <Sidebar />
            <Footer />
        </div>
    )
}

export default Booking;