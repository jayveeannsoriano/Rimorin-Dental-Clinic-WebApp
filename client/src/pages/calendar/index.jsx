import React,{ useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list"
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";


// css
import "../../styles/calendar.css"
import { string } from 'prop-types';

function Calendar() {
  const userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const [calData, setCalData] = useState([]);

    const getUserAppointments = async() => {
      try{
          var response;
          if(userInfo['user_role_id']==1){
            var dataApp1 = await axios.get('http://localhost:3001/getUserAppts', { params: { pName: userInfo['fname'] + " " + userInfo['lname'] } });
            response = dataApp1.data;
          }else if(userInfo['user_role_id']==2||userInfo['user_role_id']==4){
            var dataApp1 = await axios.get('http://localhost:3001/getUserApptsOthers');
            var dataApp2 = await axios.get('http://localhost:3001/getUserApptsReqOthers');
            var dataApp3 = await axios.get('http://localhost:3001/getUserApptsHistOthers');

            console.log(dataApp1.data);
            console.log(dataApp3.data);
            var combined = [...dataApp1.data,...dataApp2.data];
            console.log(combined);
            response = [...combined,...dataApp3.data];
            console.log(response);
          }else if(userInfo['user_role_id']==3){
            var dataApp1  = await axios.get('http://localhost:3001/getUserApptsDent', { params: { dentistIDnumber: userInfo['dentistIDnumber'] } });
            var dataApp2  = await axios.get('http://localhost:3001/getUserApptsHistDent', { params: { dentistIDnumber: userInfo['dentistIDnumber'] } });
            response = [...dataApp1.data,...dataApp2.data];
          }
          var arr = [];

          response.forEach(item=>{
            var date = new Date(item.date+" "+item.time);
            var newTime= new Date(date.getTime() + 60*60000);
            var pastDate = new Date(item.date+" "+item.time);
            var futureDate = pastDate.setHours(pastDate.getHours()+1);
            if(userInfo['user_role_id']==1){
              arr.push({
                start: pastDate,
                end: futureDate,
                title: item.time+" - "+
                (newTime.getHours()<12?
                (newTime.getHours()<10?'0'+newTime.getHours():newTime.getHours())
                :(newTime.getHours()-12<10?'0'+((newTime.getHours()-12)):(newTime.getHours()-12)))
                +":"+
                (newTime.getMinutes()<10?'0'+newTime.getMinutes():newTime.getMinutes())+
                (newTime.getHours()<12?" AM":" PM"),
                //if (currentHours < 10)  currentHours = '0'+currentHours;
                description: item.time+" - "+
                (newTime.getHours()<12?
                (newTime.getHours()<10?'0'+newTime.getHours():newTime.getHours())
                :(newTime.getHours()-12<10?'0'+((newTime.getHours()-12)):(newTime.getHours()-12)))
                +":"+
                (newTime.getMinutes()<10?'0'+newTime.getMinutes():newTime.getMinutes())+
                (newTime.getHours()<12?" AM":" PM")
                +" \n "+item.dent+" - "+item.cons,
                color: item.color
              })
            }else{
              arr.push({
                start: pastDate,
                end: futureDate,
                title: item.patient,
                color: item.color
              })
            }


          })
          setCalData(arr);
      }catch (error){
          console.log(error)
      }
    }

    useEffect(() => {
      getUserAppointments();
    });

    function checkBoxCheck(){
      var checkBox1 = document.getElementById("gridCheck1");
      var checkBox2 = document.getElementById("gridCheck2");
      var checkBox3 = document.getElementById("gridCheck3");
      var checkBox4 = document.getElementById("gridCheck4");
      var status = [];
      //{appStatus: {"$in":["Finished","Accepted"]}}
      //Pending
      //No Show
      //Finished
      //Accepted
      if(checkBox1.checked==true){
        status.push("Pending");
      }
      if(checkBox2.checked==true){
        status.push("Accepted");
      }
      if(checkBox3.checked==true){
        status.push("Finished");
      }
      if(checkBox4.checked==true){
        status.push("No Show");
      }
    }

    return (
      <>
        <div>
            {/* Breadcrumbs */}
            <div className="calendar-breadcrumb">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                        <li className="breadcrumb-item active">Calendar</li>
                    </ol>
                </nav>
            </div>
        </div>

        {/* Checkboxes */}
         <div className="calendar-checkbox">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" htmlFor="gridCheck1">Pending</label>
                    <span className="circle1"><i className = "fa fa-circle fa-2xs" aria-hidden="true" onClick={()=>{checkBoxCheck()}}></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                    <label className="form-check-label" htmlFor="gridCheck2">Accepted</label>
                    <span className="circle2"><i className = "fa fa-circle fa-2xs" aria-hidden="true" onClick={()=>{checkBoxCheck()}}></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck3"/>
                    <label className="form-check-label" htmlFor="gridCheck3">Finished</label>
                    <span className="circle3"><i className = "fa fa-circle fa-2xs" aria-hidden="true" onClick={()=>{checkBoxCheck()}}></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck4"/>
                    <label className="form-check-label" htmlFor="gridCheck4">Cancelled</label>
                    <span className="circle4"><i className = "fa fa-circle fa-2xs" aria-hidden="true" onClick={()=>{checkBoxCheck()}}></i></span>
              </div>
          </div>

        <div className='card-body'>
          <FullCalendar
            contentHeight={750}
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
            events={calData}
            initialView="dayGridMonth"
            selectable = "true"
            nowIndicator
            droppable = 'true'
            editable = 'true'
            eventDurationEditable
            dateClick={(e) => console.log(e.dateStr)}
            eventClick={(e) => console.log(e.event.id)}
            expandRows = 'true'
            headerToolbar={{
              right: "dayGridMonth timeGridWeek timeGridDay",
              center: "title",
              left: "today prev next"
            }}
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            }}
          />
        </div>
      </>
    )
}

export default Calendar