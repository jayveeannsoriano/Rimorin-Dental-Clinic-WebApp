import React from 'react'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list"

// // import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

// css
import "../../styles/calendar.css"

// project imports
import events from './events';
import CalendarCheckbox from './CalendarCheckbox';
import CalendarBreadcrumbs from './CalendarBreadcrumbs';


export default class Calendar extends React.Component {
  render() {
    return (
      <>
      <CalendarBreadcrumbs/>
        <div className='card-body'>
        <CalendarCheckbox/>
          <FullCalendar
            contentHeight={750}
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
            events={events}
            initialView="dayGridMonth"
            headerToolbar={{
              right: "prev,next",
              center: "title",
              left: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
          />
        </div>
      </>
    )
  }
}