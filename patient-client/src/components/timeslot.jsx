import React, { useState } from 'react'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Axios from 'axios';

const Timeslot = () => {
  let intime = "09:00 AM"
  let outtime = "05:00 PM"
  const [result, setResult] = useState([])

  const [getTime, setGetTime] = useState("");

  const testSubmitTime = (e) =>{
    e.preventDefault();

    //adds data
    console.log("Inserting ",getTime, " to the database.");

    Axios.post("http://localhost:5001/insertTime", {getTime: getTime})
  }



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
                <Button 
                className="time" 
                value={time}
                onClick={(e)=>{
                  e.preventDefault();
                  setGetTime(e.target.value)
                  console.log(time);
                  }}>{time}</Button>
                  
            </div>
          )
        }) : null
      }
      <button onClick={testSubmitTime}>test input time</button>
    </div>
  )
}

export default Timeslot