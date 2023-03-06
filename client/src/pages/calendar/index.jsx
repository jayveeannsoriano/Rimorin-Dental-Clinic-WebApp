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
          console.log("testing");
          var checkBox1 = document.getElementById("gridCheck1");
          var checkBox2 = document.getElementById("gridCheck2");
          var checkBox3 = document.getElementById("gridCheck3");
          var checkBox4 = document.getElementById("gridCheck4");
          var checkBox5 = document.getElementById("gridCheck5");

          var response;
          if(userInfo['user_role_id']==1){
            var dataApp1 = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserAppts', { params: { 
              pName: userInfo['fname'] + " " + userInfo['lname'],
              pend:(checkBox1.checked==true?"Pending":""),
              acc:(checkBox2.checked==true?"Accepted":""),
              res:(checkBox2.checked==true?"Rescheduled":""),
              fin:(checkBox3.checked==true?"Finished":""),
              can:(checkBox4.checked==true?"No Show":""),
              fol:(checkBox5.checked==true?"Follow-Up":"")
            } });
            var dataApp2 = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserApptsReq', { params: { 
              pName: userInfo['fname'] + " " + userInfo['lname'],
              pend:(checkBox1.checked==true?"Pending":""),
              acc:(checkBox2.checked==true?"Accepted":""),
              res:(checkBox2.checked==true?"Rescheduled":""),
              fin:(checkBox3.checked==true?"Finished":""),
              can:(checkBox4.checked==true?"No Show":""),
              fol:(checkBox5.checked==true?"Follow-Up":"")
            } });
            response = [...dataApp1.data,...dataApp2.data];

          }else if(userInfo['user_role_id']==2||userInfo['user_role_id']==4){
            var dataApp1 = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserApptsOthers',{params:{
              pend:(checkBox1.checked==true?"Pending":""),
              acc:(checkBox2.checked==true?"Accepted":""),
              res:(checkBox2.checked==true?"Rescheduled":""),
              fin:(checkBox3.checked==true?"Finished":""),
              can:(checkBox4.checked==true?"No Show":""),
              fol:(checkBox5.checked==true?"Follow-Up":"")
            }});
            var dataApp2 = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserApptsReqOthers',{params:{
              pend:(checkBox1.checked==true?"Pending":""),
              acc:(checkBox2.checked==true?"Accepted":""),
              res:(checkBox2.checked==true?"Rescheduled":""),
              fin:(checkBox3.checked==true?"Finished":""),
              can:(checkBox4.checked==true?"No Show":""),
              fol:(checkBox5.checked==true?"Follow-Up":"")
            }});
            var dataApp3 = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserApptsHistOthers',{params:{
              pend:(checkBox1.checked==true?"Pending":""),
              acc:(checkBox2.checked==true?"Accepted":""),
              res:(checkBox2.checked==true?"Rescheduled":""),
              fin:(checkBox3.checked==true?"Finished":""),
              can:(checkBox4.checked==true?"No Show":""),
              fol:(checkBox5.checked==true?"Follow-Up":"")
            }});
            var combined = [...dataApp1.data,...dataApp2.data];
            response = [...combined,...dataApp3.data];


          }else if(userInfo['user_role_id']==3){
            var dataApp1  = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserApptsDent', { params: { 
              dentistIDnumber: userInfo['dentistIDnumber'],
              pend:(checkBox1.checked==true?"Pending":""),
              acc:(checkBox2.checked==true?"Accepted":""),
              res:(checkBox2.checked==true?"Rescheduled":""),
              fin:(checkBox3.checked==true?"Finished":""),
              can:(checkBox4.checked==true?"No Show":""),
              fol:(checkBox5.checked==true?"Follow-Up":"")
            } });
            var dataApp2  = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserApptsHistDent', { params: { 
              dentistIDnumber: userInfo['dentistIDnumber'],
              pend:(checkBox1.checked==true?"Pending":""),
              acc:(checkBox2.checked==true?"Accepted":""),
              res:(checkBox2.checked==true?"Rescheduled":""),
              fin:(checkBox3.checked==true?"Finished":""),
              can:(checkBox4.checked==true?"No Show":""),
              fol:(checkBox5.checked==true?"Follow-Up":"")
            } });
            response = [...dataApp1.data,...dataApp2.data];
          }
          var arr = [];

          response.forEach(item=>{
            var date = new Date(item.date+" "+item.time);
            var newTime= new Date(date.getTime() + 60*60000);
            var pastDate = new Date(item.date+" "+item.time);
            var futureDate = new Date(item.date+" "+item.time);
            futureDate.setHours(pastDate.getHours()+1);

            if (userInfo["user_role_id"] == 1) {
              const color = item.color;
              item.cons.forEach((item) => {
                if (item.chosen.length > 0) {
                  const procedureNames = item.chosen.map(
                    (chosenItem) => chosenItem.procedure
                  );
                  arr.push({
                    start: pastDate,
                    end: futureDate,
                    title: procedureNames,
                    color: color,
                  });
                }
              });
            } else {
              arr.push({
                start: pastDate,
                end: futureDate,
                title: item.patient,
                color: item.color,
              });
            }


          })
          setCalData(arr);
      }catch (error){
          console.log(error)
      }
    }
    useEffect(() => {
      
    });

    document.addEventListener('readystatechange', event => { 
      // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
      if (event.target.readyState === "complete") {
        getUserAppointments();
      }
    });

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
                    <input className="form-check-input" type="checkbox" id="gridCheck1" onClick={()=>{getUserAppointments();}}/>
                    <label className="form-check-label" htmlFor="gridCheck1">Pending</label>
                    <span className="circle1"><i className = "fa fa-circle fa-2xs" aria-hidden="true" ></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck2" onClick={()=>{getUserAppointments();}}/>
                    <label className="form-check-label" htmlFor="gridCheck2">Accepted</label>
                    <span className="circle2"><i className = "fa fa-circle fa-2xs" aria-hidden="true" ></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck3" onClick={()=>{getUserAppointments();}}/>
                    <label className="form-check-label" htmlFor="gridCheck3">Finished</label>
                    <span className="circle3"><i className = "fa fa-circle fa-2xs" aria-hidden="true" ></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck4" onClick={()=>{getUserAppointments();}}/>
                    <label className="form-check-label" htmlFor="gridCheck4">Cancelled</label>
                    <span className="circle4"><i className = "fa fa-circle fa-2xs" aria-hidden="true" ></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck5" onClick={()=>{getUserAppointments();}}/>
                    <label className="form-check-label" htmlFor="gridCheck5">Follow-Up</label>
                    <span className="circle5"><i className = "fa fa-circle fa-2xs" aria-hidden="true" ></i></span>
              </div>
          </div>

        <div className='card-body' >
          <FullCalendar
            contentHeight={750}
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
            events={calData}
            initialView="dayGridMonth"
            nowIndicator
            editable = {false}
            dateClick={(e) => console.log(e.dateStr)}
            eventClick={(e) => console.log(e.event.id)}
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