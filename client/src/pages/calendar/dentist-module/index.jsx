import React from 'react'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list"
import interactionPlugin from "@fullcalendar/interaction";
import { Draggable } from "@fullcalendar/interaction";
import axios from "axios";

// css
import "../../../styles/calendar.css"

// project imports
import CalendarCheckbox from './CalendarCheckbox';
import CalendarBreadcrumbs from './CalendarBreadcrumbs';

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
      <CalendarBreadcrumbs/>
      <CalendarCheckbox/>
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