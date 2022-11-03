import React, { useState } from 'react'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Axios from 'axios';

const Timeslot2 = ({props}) => {
  let intime = "09:00 AM"
  let outtime = "05:00 PM"
  const [result, setResult] = useState([])

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
  return (
    <div className='slots'>
      {
        result && result.length > 0 ? result.map((time, index) => {
          return (
            <div className="Timeslot2" key={index}>
                <Button 
                className="time" 
                value={time}
                onClick={(e)=>{
                  e.preventDefault();
                  setGetTime(e.target.value)
                  props.onSubmit(time)
                  console.log(time);
                  }}>{time}</Button>
                  
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default Timeslot2