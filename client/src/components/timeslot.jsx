import  React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Timeslot = ({GetTimeCheck,takenAppointments,chosenDate}) => {
  // let inTime = "09:00 AM"
  // let outTime = "05:00 PM"
  const [result, setResult] = useState([]);

  const [inTime, setInTime] = useState("")
  const [outTime, setOutTime] = useState("")

  const [availableTime, setAvailableTime] = useState([]);
  const [getTime, setGetTime] = useState("");

  const [blurHandler, setblurHandler] = useState("");
  const [isActive, setIsActive] = useState(false);


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
  const getAvailableTimes = async(date) => {
    try{
      console.log(date);
      const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getAvailableTimes',{
        params:{
            date: date
        }
      })

      var data = response.data
      console.log(data[0].config);
      setAvailableTime(data[0].config)

    }catch (error){
      console.log(error)
    }
  }

  intervals(inTime, outTime);
  const el = document.querySelectorAll ('.timeslot button');
  useEffect(() => {
    getAvailableTimes();
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
    console.log("TAKEN APPTS:",takenAppointments);
  },[]);

  useEffect(() => {
    setResult([]);

    availableTime.forEach(schedule => {
      if(schedule.day==chosenDate.slice(0,3)){
        if(schedule.enabled){
          setInTime(schedule.timeStart);
          setOutTime(schedule.timeEnd);
        }else{
          setInTime("");
          setOutTime("");
        }
      }
    });
  

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
                style={takenAppointments.indexOf(time)>-1 ? {background:"lightgray"} : (isActive? (getTime==time?{background: "#5d5fef", color: "#fff"}:{background:"white"}):{background:"white"})}
                disabled={takenAppointments.indexOf(time)>-1 ? true : false}
                onClick={(e)=>{
                  e.preventDefault();
                  setGetTime(e.target.value)
                  setIsActive(!isActive);
                  //props.onSubmit(time)
                  GetTimeCheck(time);
                  console.log(time);
                  if(getTime!=time){
                    setIsActive(true);
                  }
                  console.log(time);
                  console.log(document.getElementById(time).style.background);
                }}
                >{time}
                </Button>
                  
            </div>
          )
        }) : <h2>No Available Time Slots </h2>
      }
    </div>
  )
}

export default Timeslot