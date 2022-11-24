import React from 'react'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list"
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

// css
import "../../styles/calendar.css"

var userInfo = JSON.parse(window.localStorage.getItem('current-session'));

const getUserAppointments = async() => {
  try{
      const response = await axios.get('http://localhost:3001/getUserAppts', { params: { pName: userInfo['fname'] + " " + userInfo['lname'] } });
      // setEvents(response.data);
      return response.data;
  }catch (error){
      console.log(error)
  }
}


export default class Calendar extends React.Component {

  render() {

    return (
      <>
        <div>
            {/* Breadcrumbs */}
            <div className="calendar-breadcrumb">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                        <li className="breadcrumb-item active">Calendar</li>
                    </ol>
                </nav>
            </div>
        </div>

        {/* Checkboxes */}
         <div className="calendar-checkbox">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" htmlFor="gridCheck1">Pending</label>
                    <span className="circle1"><i className = "fa fa-circle fa-2xs" aria-hidden="true"></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                    <label className="form-check-label" htmlFor="gridCheck2">Accepted</label>
                    <span className="circle2"><i className = "fa fa-circle fa-2xs" aria-hidden="true"></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck3"/>
                    <label className="form-check-label" htmlFor="gridCheck3">Finished</label>
                    <span className="circle3"><i className = "fa fa-circle fa-2xs" aria-hidden="true"></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck4"/>
                    <label className="form-check-label" htmlFor="gridCheck4">Cancelled</label>
                    <span className="circle4"><i className = "fa fa-circle fa-2xs" aria-hidden="true"></i></span>
              </div>
          </div>

        <div className='card-body'>
          <FullCalendar
            contentHeight={750}
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
            events={getUserAppointments}
            initialView="dayGridMonth"
            selectable = "true"
            nowIndicator
            droppable = 'true'
            editable = 'true'
            eventDurationEditable
            dateClick={(e) => console.log(e.dateStr)}
            eventClick={(e) => console.log(e.event.id)}
            expandRows = 'true'
            headerToolbar={{
              right: "dayGridMonth timeGridWeek timeGridDay",
              center: "title",
              left: "today prev next"
            }}
          />
        </div>
      </>
    )
  }
}