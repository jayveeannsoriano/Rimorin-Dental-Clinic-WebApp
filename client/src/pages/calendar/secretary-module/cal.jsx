import React from 'react'
import CalendarBreadcrumbs from "./CalendarBreadcrumbs";
import CalendarCheckbox from "./CalendarCheckbox";
import "../../../styles/calendar.css"
import Kalend, { CalendarView } from 'kalend'// import component
import 'kalend/dist/styles/index.css'; //import styles

const Calendar = ({ }) => {
  let events = [
    {
      id: 1,
      startAt: '2022-10-21T18:00:00.000Z',
      endAt: '2022-10-21T19:00:00.000Z',
      summary: 'test1',
      color: 'red',
      calendarID: 'cancelled'
    },
    {
      id: 2,
      startAt: '2022-10-21T13:00:00.000Z',
      endAt: '2022-10-21T14:00:00.000Z',
      summary: 'test2',
      color: 'yellow',
      calendarID: 'pending'
    },
    {
      id: 3,
      startAt: '2022-10-21T18:00:00.000Z',
      endAt: '2022-10-21T19:00:00.000Z',
      summary: 'testes',
      color: 'green',
      calendarID: 'finished'
    },
    {
      id: 4,
      startAt: '2022-10-21T18:00:00.000Z',
      endAt: '2022-10-21T19:00:00.000Z',
      summary: 'testes',
      color: 'blue',
      calendarID: 'accepted'
    }
  ];
  return (
    <>
      <div id='calendar-container'>
        <Kalend
          onEventClick={onEventClick}
          onNewEventClick={onNewEventClick}
          events={events ? events : []}
          initialDate={new Date().toISOString()}
          //hourHeight={60}
          initialView={CalendarView.WEEK}
          disabledViews={[CalendarView.THREE_DAYS, CalendarView.AGENDA]}

          onSelectView={onSelectView}
          onPageChange={onPageChange}

          timeFormat={'24'}
          weekDayStart={'Monday'}
          calendarIDsHidden={['finished']}
          language={'en'}
        />
        <CalendarBreadcrumbs />
        <CalendarCheckbox />
        <Calendar events={events} />
      </div>
    </>
  );
}
var onEventClick = () => {

};

var onNewEventClick = () => {

};

var onSelectView = () => {

};

var onPageChange = () => {

};

export default Calendar;