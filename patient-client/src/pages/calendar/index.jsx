import React from 'react'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

// project imports
import events from './events';


export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin ]}
        events={events}
        initialView="dayGridMonth"
        headerToolbar={{
          right: "prev,next",
          center: "title",
          left: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
      />
    )
  }
}