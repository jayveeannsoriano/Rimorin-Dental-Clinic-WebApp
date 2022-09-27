import React, { useState } from 'react'
import moment from 'moment';
import { Button } from 'react-bootstrap';

const Timeslot = () => {
  let intime = "12:00 PM"
  let outtime = "05:00 PM"
  const [result, setResult] = useState([])
  console.log("Array", result)

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
            <div className="timeslot" key={index}>
                <Button className="time">{time}</Button>
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default Timeslot