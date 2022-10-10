import React from "react";
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
// import Footer from "../components/footer.jsx";
import '../styles/dashboard.css';

function DentistCalendar(){
    return(
        <div>
            <main id="main" className="main">
            <div id='calendar-container'>
                <div id='calendar'></div>
            </div>

            <script src="Calendar/js/jquery-3.3.1.min.js"></script>
            <script src="Calendar/js/popper.min.js"></script>
            <script src="Calendar/js/bootstrap.min.js"></script>
            <script src='Calendar/fullcalendar/packages/core/main.js'></script>
            <script src='Calendar/fullcalendar/packages/interaction/main.js'></script>
            <script src='Calendar/fullcalendar/packages/daygrid/main.js'></script>
            <script src='Calendar/fullcalendar/packages/timegrid/main.js'></script>
            <script src='Calendar/fullcalendar/packages/list/main.js'></script>

            <script src="dentist-client/src/pages/CalendarScript.js"></script>


                <script src="Calendar/js/main.js"></script>

                {/* Breadcrumbs */}
                <div class="calendar-breadcrumb">
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="nav.html">Home</a></li>
                            <li class="breadcrumb-item active">Calendar</li>
                        </ol>
                    </nav>
                </div>

                {/* Checkboxes */}
                <div class="calendar-checkbox">
                    <div class="form-check">
                        <input class="form-check-input1" type="checkbox" id="gridCheck1"/>
                        <label class="form-check-label1" for="gridCheck1">Pending</label>
                        <span class="badge bg-warning"><i></i></span>

                        <input class="form-check-input2" type="checkbox" id="gridCheck2"/>
                        <label class="form-check-label2" for="gridCheck2">Accepted</label>
                        <span class="badge bg-info"><i></i></span>

                        <input class="form-check-input3" type="checkbox" id="gridCheck3"/>
                        <label class="form-check-label3" for="gridCheck3">Finished</label>
                        <span class="badge bg-success"><i></i></span>

                        <input class="form-check-input4" type="checkbox" id="gridCheck4"/>
                        <label class="form-check-label4" for="gridCheck4">Cancelled</label>
                        <span class="badge bg-danger"><i></i></span>
                    </div>
                </div>
            </main>

            <Header />
            <Sidebar />
        </div>
    )
}

export default DentistCalendar;