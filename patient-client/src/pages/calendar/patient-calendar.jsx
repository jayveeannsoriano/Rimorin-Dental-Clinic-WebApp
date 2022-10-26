// import React from "react";
// import Header from "../components/dashboard-header.jsx";
// import Sidebar from "../components/sidebar.jsx";
// // import Footer from "../components/footer.jsx";
// import "../styles/calendar.css";
// //import '../styles/dashboard.css';
// //import "/GitHub Repositories/React JS/Test-Repo/dentist-client/public/Calendar/css/style.css"

// import Calendar from "../components/Calendar";
// //import CalendarCustomHeader from "../components/CalendarCustomHeader";
// import CalendarBreadcrumbs from "../components/CalendarBreadcrumbs";
// import CalendarCheckbox from "../components/CalendarCheckbox";
// import CONSTANTS from "../js/contants.js";
// // import Calendar from "../components/CalendarComponent";

// //import "/GitHub Repositories/React JS/Test-Repo/dentist-client/public/assets/css/style.css"

// function PatientCalendar(){
//     let events = [
//         {
//            id: 1,
//            startAt: '2022-10-21T18:00:00.000Z',
//            endAt: '2022-10-21T19:00:00.000Z',
//            summary: 'test1',
//            color: 'red',
//            calendarID: 'cancelled'
//        },
//        {
//            id: 2,
//            startAt: '2022-10-21T13:00:00.000Z',
//            endAt: '2022-10-21T14:00:00.000Z',
//            summary: 'test2',
//            color: 'yellow',
//            calendarID: 'pending'
//        },
//        {
//            id: 3,
//            startAt: '2022-10-21T18:00:00.000Z',
//            endAt: '2022-10-21T19:00:00.000Z',
//            summary: 'testes',
//            color: 'green',
//            calendarID: 'finished'
//        },
//        {
//            id: 4,
//            startAt: '2022-10-21T18:00:00.000Z',
//            endAt: '2022-10-21T19:00:00.000Z',
//            summary: 'testes',
//            color: 'blue',
//            calendarID: 'accepted'
//        }
//     ];
//     return(
//         <div>
//             <Header />
//             <Sidebar />
//             <main id="main" className="main">
//                 <div id='calendar-container'>
//                     <CalendarBreadcrumbs />
//                     <CalendarCheckbox />
//                     <Calendar events={events}/>
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default PatientCalendar;