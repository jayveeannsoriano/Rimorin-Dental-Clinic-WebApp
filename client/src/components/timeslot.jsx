import  React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Axios from 'axios';

const Timeslot = ({props,takenAppointments}) => {
  let intime = "09:00 AM"
  let outtime = "05:00 PM"
  const [result, setResult] = useState([])

  const [taken, setTaken] = useState([]);
  

  const [getTime, setGetTime] = useState("");

  function intervals(startString, endString) {
    var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var current = moment(start);

    while (current <= end) {
      if (result.includes(current.format('hh:mm A'))) {
        return null
      }
      else {
        result.push(current.format('hh:mm A'));
        current.add(30, 'minutes'); //minute interval
      }
    }

    return result;
  }

  intervals(intime, outtime);
  const el = document.querySelectorAll ('.timeslot button');
  useEffect(() => {
   
    // el.forEach(function (value, i) {
    //   let button = document.getElementById(value.value);

    //   if(takenAppointments.indexOf(button.value)>-1){
    //     console.log(takenAppointments)
    //     console.log(button.value)
    //     button.style.cssText = 'background: lightgray;pointer-events: none';
    //   }else{
    //     button.style.cssText = 'background: white;pointer-events: auto;';
    //   }
    // });

    // setTaken(takenAppointments);
    console.log(takenAppointments);
  });


  return (
    <div className='slots'>
      {result && result.length > 0 ? result.map((time, index) => {
        
          return (
            <div className="timeslot" key={index}>
                <Button 
                className="time btn" 
                id={time}
                value={time}
                style={takenAppointments.indexOf(time)>-1 ? {background:"lightgray"} : {background:"white"}}
                disabled={takenAppointments.indexOf(time)>-1 ? true : false}
                onClick={(e)=>{
                  e.preventDefault();
                  setGetTime(e.target.value)
                  // props.onSubmit(time)
                  console.log(time);
                }}>{time}
                </Button>
                  
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default Timeslot