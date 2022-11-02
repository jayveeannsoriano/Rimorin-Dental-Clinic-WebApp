import { Draggable } from "@fullcalendar/interaction";

const events = [
    { title: "10:00 AM Dr. Pamela Concepcion", 
    start: getDate("YEAR-MONTH-17"), 
    color: '#EF4444'
    },
    { title: "3:00 PM Dr. Pamela Concepcion", 
    start: getDate("2022-11-27"), 
    color: '#60A5FA'
    },

    { Id: 'draggable1',
      title: '9:00 PM Dr. Pamela Concepcion',
    start: getDate('2022-11-25'),
    color: '#49be25' 
    },

    { title: '4:00 PM Dr. Pamela Concepcion',
    start: getDate('2022-11-21'),
    color: '#EAD649'
    },

    // {
    //   title: "Long Event",
    //   start: getDate("YEAR-MONTH-07"),
    //   end: getDate("YEAR-MONTH-10")
    // },
    // {
    //   groupId: "999",
    //   title: "Repeating Event",
    //   start: getDate("YEAR-MONTH-09T16:00:00+00:00")
    // },
    // {
    //   groupId: "999",
    //   title: "Repeating Event",
    //   start: getDate("YEAR-MONTH-16T16:00:00+00:00")
    // },
    // {
    //   title: "Conference",
    //   start: "YEAR-MONTH-17",
    //   end: getDate("YEAR-MONTH-19")
    // },
    // {
    //   title: "Meeting",
    //   start: getDate("YEAR-MONTH-18T18:00:00.000Z"),
    //   end: getDate("YEAR-MONTH-18T12:30:00+00:00")
    // },
    // { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
    // { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
    // { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
    // { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
    // { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") }
  ];
    
  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  
  export default events;
  