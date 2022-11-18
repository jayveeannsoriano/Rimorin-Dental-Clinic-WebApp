import React from 'react';
import Kalend, {CalendarView} from 'kalend'// import component
import 'kalend/dist/styles/index.css'; //import styles

function Calendar({events}) {
    return(
        <div className='calendarContainer'>
            <Kalend
                onEventClick={onEventClick}
                onNewEventClick={onNewEventClick}
                events={events? events: []}
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
        </div>
    );
}
var  onEventClick = () => {

};

var onNewEventClick = () => {

};

var onSelectView = () => {

};

var onPageChange = () => {

};




export default Calendar;