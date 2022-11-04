import React from 'react'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list"
import interactionPlugin from "@fullcalendar/interaction";
import { Draggable } from "@fullcalendar/interaction";

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
      <CalendarCheckbox/>
        <div className='card-body'>
          <FullCalendar
            contentHeight={750}
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
            events={events}
            initialView="dayGridMonth"
            selectable = "true"
            nowIndicator
            droppable = 'true'
            editable = 'true'
            dateClick={(e) => console.log(e.dateStr)}
            eventClick={(e) => console.log(e.event.id)}
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