import React, { useRef, useEffect, useState } from "react";
import moment from 'moment';
import { Button, Form} from "react-bootstrap";
import { Switch } from "antd";
import "../../styles/clinic-hours.css";
import "antd/dist/antd.css";
import axios from "axios";

import success from '../../assets/img/check.png';
import error from '../../assets/img/error.png';
import Modal from "react-bootstrap/Modal";
import { navigate } from "@reach/router";

const ClinicHours = () => {
  const [timeSlot, setTimeSlot] = useState([
    {
      day: 'Mon',
      timeStart: '9:00 AM',
      timeEnd: '5:00 PM',
      enabled: false,
    },
    {
      day: 'Tue',
      timeStart: '9:00 AM',
      timeEnd: '5:00 PM',
      enabled: false,
    },
    {
      day: 'Wed',
      timeStart: '9:00 AM',
      timeEnd: '5:00 PM',
      enabled: false,
    },
    {
      day: 'Thu',
      timeStart: '9:00 AM',
      timeEnd: '5:00 PM',
      enabled: false,
    },
    {
      day: 'Fri',
      timeStart: '9:00 AM',
      timeEnd: '5:00 PM',
      enabled: false,
    },
    {
      day: 'Sat',
      timeStart: '9:00 AM',
      timeEnd: '5:00 PM',
      enabled: false,
    },
    {
      day: 'Sun',
      timeStart: '9:00 AM',
      timeEnd: '5:00 PM',
      enabled: false,
    },
  ]);
  const [interval, setInterval] = useState(45);
  const [modalState, setModalState] = useState(false);
  const [result, setResult] = useState([]);
  const handleModalClose = () => {
    setModalState(false);
    navigate(0);
  };
  const handleShow = () => {
    setModalState('show-modal')
  }

  const handleTimeSlotStartChange = event => {
    var time = event.target.value;
    var id = event.target.id;


    setTimeSlot(current =>
      current.map(obj => {
        if (obj.day === id) {
          return {...obj, timeStart: time};
        }
        return obj;
      }),
    );
  }

  const handledaySwitch = input => e =>{
  
    var selectRange = document.querySelectorAll('#'+input)
    if(e){
      selectRange[0].disabled = false;
      selectRange[1].disabled = false;
    }else{
      selectRange[0].disabled = true;
      selectRange[1].disabled = true;
    }
    setTimeSlot(current =>
      current.map(obj => {
        if (obj.day === input) {
          return {...obj, enabled: !obj.enabled};
        }
        return obj;
      }),
    );
  }

  const handleTimeSlotEndChange = event => {
    var time = event.target.value;
    var id = event.target.id;


    setTimeSlot(current =>
      current.map(obj => {
        if (obj.day === id) {
          return {...obj, timeEnd: time};
        }
        return obj;
      }),
    );
  }

  const applyToAll = event => {
    var toApply = document.querySelectorAll('#Mon')
    var timeStart = toApply[0].value
    var timeEnd = toApply[1].value
    var selects = document.querySelectorAll('select:not([id="Interval"])')
    
    for (let i = 0; i < selects.length; i++) {
      if(i% 2 == 0){
        selects[i].value = timeEnd;
      }else{
        selects[i].value = timeStart;
      }
    }

    setTimeSlot(current =>
      current.map(obj => {
       
        return {...obj, timeEnd: timeEnd, timeStart:timeStart };
      
      }),
    );

  }

  const updateClinicHours = async() => {
    console.log('Clicked');
    try{
      axios.put("https://rimorin-dental-clinic.herokuapp.com/updateClinicHours", {clinicHours:timeSlot,interval:interval})
      handleShow();
    }catch (error){
      console.log(error)
      setModalState('error-modal');
    }
  }

  const getAvailableTimes = async() => {
    try{
      const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getAvailableTimes')

      var intervalField = document.querySelector('#Interval');
      intervalField.value = response.data[0].interval;
      setInterval(response.data[0].interval);

      var data = response.data[0].config
      var range;
      data.map(item => (
        range = document.querySelectorAll('#'+item.day),
        range[0].value = item.timeStart,
        range[1].value = item.timeEnd,
        setTimeSlot(current =>
          current.map(obj => {
            return {...obj, timeStart: item.timeStart, timeEnd: item.timeEnd,enabled:item.enabled};
          }),
        )
      ))

      
    }catch (error){
      console.log(error)
    }
  }

  const intervals = (startString, endString) =>  {
    var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var current = moment(start);
    var tempArr=[];
    while (current <= end) {  
      
      tempArr.push(current.format('hh:mm A'));
      current.add(interval, 'minutes'); //minute interval
    
    }
    setResult(tempArr);
  }

  useEffect(() => {
    getAvailableTimes();
  }, []);

  // useEffect(() => {
  // }, [timeSlot]);

  useEffect(() => {
    intervals("9:00 AM","5:00 PM");
    console.log(result);
  }, [interval]);

  return (
    <>
      <div class="pagetitle">
        <h1>Clinic Hours</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Home</a>
            </li>
            <li class="breadcrumb-item active">
              <a href="/admin/clinic-hours">Clinic Hours</a>
            </li>
          </ol>
        </nav>
      </div>

      <div class="col-xl">
        <div className="card patient-info">
        <div className="card-body pt-3">
            <h5 className="card-title">Clinic Hours</h5>
            <div className="divider"></div>

            <div className="col-2">
            <Form.Label>Time Slot Interval</Form.Label>
              <Form.Select id="Interval" onChange={function(e){setInterval(e.target.value);}}>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
              </Form.Select>
            </div>

            <div className="toggle-container">
              <div className="col-2 weekday">Monday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Mon")}
                  checked={timeSlot[0].enabled}
                />
              </div>
                <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    id="Mon" onChange={handleTimeSlotStartChange} disabled={!timeSlot[0].enabled}>
                     {result.map(value => (
                        <option value={value}>{value}</option>
                      ))}
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select
                    id="Mon" onChange={handleTimeSlotEndChange} disabled={!timeSlot[0].enabled}>
                         {result.map(value => (
                        <option value={value}>{value}</option>
                      ))}
                    </Form.Select>
                </Form>

              <Button id="apply-all" onClick={applyToAll}>Apply to All</Button>
            </div>

            <div className="toggle-container">
              <div className="col-2 weekday">Tuesday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Tue")}
                  checked={timeSlot[1].enabled}
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Tue" onChange={handleTimeSlotStartChange} disabled={!timeSlot[1].enabled}>
                        <option key="Tue">Select Time</option>
                        <option key="Tue" value="9:00 AM">9:00 AM</option>
                        <option key="Tue" value="9:30 AM">9:30 AM</option>
                        <option key="Tue" value="10:00 AM">10:00 AM</option>
                        <option key="Tue" value="10:30 AM">10:30 AM</option>
                        <option key="Tue" value="11:00 AM">11:00 AM</option>
                        <option key="Tue" value="11:30 AM">11:30 AM</option>
                        <option key="Tue" value="12:00 AM">12:00 AM</option>
                        <option key="Tue" value="12:30 AM">12:30 AM</option>
                        <option key="Tue" value="1:00 PM">1:00 PM</option>
                        <option key="Tue" value="1:30 PM">1:30 PM</option>
                        <option key="Tue" value="2:00 PM">2:00 PM</option>
                        <option key="Tue" value="2:30 PM">2:30 PM</option>
                        <option key="Tue" value="3:00 PM">3:00 PM</option>
                        <option key="Tue" value="3:30 PM">3:30 PM</option>
                        <option key="Tue" value="4:00 PM">4:00 PM</option>
                        <option key="Tue" value="4:30 PM">4:30 PM</option>
                        <option key="Tue" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Select Time" id="Tue" onChange={handleTimeSlotEndChange} disabled={!timeSlot[1].enabled}>
                        <option key="Tue">Select Time</option>
                        <option key="Tue" value="9:00 AM">9:00 AM</option>
                        <option key="Tue" value="9:30 AM">9:30 AM</option>
                        <option key="Tue" value="10:00 AM">10:00 AM</option>
                        <option key="Tue" value="10:30 AM">10:30 AM</option>
                        <option key="Tue" value="11:00 AM">11:00 AM</option>
                        <option key="Tue" value="11:30 AM">11:30 AM</option>
                        <option key="Tue" value="12:00 AM">12:00 AM</option>
                        <option key="Tue" value="12:30 AM">12:30 AM</option>
                        <option key="Tue" value="1:00 PM">1:00 PM</option>
                        <option key="Tue" value="1:30 PM">1:30 PM</option>
                        <option key="Tue" value="2:00 PM">2:00 PM</option>
                        <option key="Tue" value="2:30 PM">2:30 PM</option>
                        <option key="Tue" value="3:00 PM">3:00 PM</option>
                        <option key="Tue" value="3:30 PM">3:30 PM</option>
                        <option key="Tue" value="4:00 PM">4:00 PM</option>
                        <option key="Tue" value="4:30 PM">4:30 PM</option>
                        <option key="Tue" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
            </div>

            <div className="toggle-container">
              <div className="col-2 weekday">Wednesday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Wed")}
                  checked={timeSlot[2].enabled}
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select
                    defaultValue="Select Time" id="Wed" onChange={handleTimeSlotStartChange} disabled={!timeSlot[2].enabled}>
                        <option key="Wed">Select Time</option>
                        <option key="Wed" value="9:00 AM">9:00 AM</option>
                        <option key="Wed" value="9:30 AM">9:30 AM</option>
                        <option key="Wed" value="10:00 AM">10:00 AM</option>
                        <option key="Wed" value="10:30 AM">10:30 AM</option>
                        <option key="Wed" value="11:00 AM">11:00 AM</option>
                        <option key="Wed" value="11:30 AM">11:30 AM</option>
                        <option key="Wed" value="12:00 AM">12:00 AM</option>
                        <option key="Wed" value="12:30 AM">12:30 AM</option>
                        <option key="Wed" value="1:00 PM">1:00 PM</option>
                        <option key="Wed" value="1:30 PM">1:30 PM</option>
                        <option key="Wed" value="2:00 PM">2:00 PM</option>
                        <option key="Wed" value="2:30 PM">2:30 PM</option>
                        <option key="Wed" value="3:00 PM">3:00 PM</option>
                        <option key="Wed" value="3:30 PM">3:30 PM</option>
                        <option key="Wed" value="4:00 PM">4:00 PM</option>
                        <option key="Wed" value="4:30 PM">4:30 PM</option>
                        <option key="Wed" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Select Time" id="Wed" onChange={handleTimeSlotEndChange} disabled={!timeSlot[2].enabled}>
                        <option key="Wed">Select Time</option>
                        <option key="Wed" value="9:00 AM">9:00 AM</option>
                        <option key="Wed" value="9:30 AM">9:30 AM</option>
                        <option key="Wed" value="10:00 AM">10:00 AM</option>
                        <option key="Wed" value="10:30 AM">10:30 AM</option>
                        <option key="Wed" value="11:00 AM">11:00 AM</option>
                        <option key="Wed" value="11:30 AM">11:30 AM</option>
                        <option key="Wed" value="12:00 AM">12:00 AM</option>
                        <option key="Wed" value="12:30 AM">12:30 AM</option>
                        <option key="Wed" value="1:00 PM">1:00 PM</option>
                        <option key="Wed" value="1:30 PM">1:30 PM</option>
                        <option key="Wed" value="2:00 PM">2:00 PM</option>
                        <option key="Wed" value="2:30 PM">2:30 PM</option>
                        <option key="Wed" value="3:00 PM">3:00 PM</option>
                        <option key="Wed" value="3:30 PM">3:30 PM</option>
                        <option key="Wed" value="4:00 PM">4:00 PM</option>
                        <option key="Wed" value="4:30 PM">4:30 PM</option>
                        <option key="Wed" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
            </div>

            <div className="toggle-container">
              <div className="col-2 weekday">Thursday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Thu")}
                  checked={timeSlot[3].enabled}
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Thu" onChange={handleTimeSlotStartChange} disabled={!timeSlot[3].enabled}>
                        <option key="Thu">Select Time</option>
                        <option key="Thu" value="9:00 AM">9:00 AM</option>
                        <option key="Thu" value="9:30 AM">9:30 AM</option>
                        <option key="Thu" value="10:00 AM">10:00 AM</option>
                        <option key="Thu" value="10:30 AM">10:30 AM</option>
                        <option key="Thu" value="11:00 AM">11:00 AM</option>
                        <option key="Thu" value="11:30 AM">11:30 AM</option>
                        <option key="Thu" value="12:00 AM">12:00 AM</option>
                        <option key="Thu" value="12:30 AM">12:30 AM</option>
                        <option key="Thu" value="1:00 PM">1:00 PM</option>
                        <option key="Thu" value="1:30 PM">1:30 PM</option>
                        <option key="Thu" value="2:00 PM">2:00 PM</option>
                        <option key="Thu" value="2:30 PM">2:30 PM</option>
                        <option key="Thu" value="3:00 PM">3:00 PM</option>
                        <option key="Thu" value="3:30 PM">3:30 PM</option>
                        <option key="Thu" value="4:00 PM">4:00 PM</option>
                        <option key="Thu" value="4:30 PM">4:30 PM</option>
                        <option key="Thu" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select  defaultValue="Select Time" id="Thu" onChange={handleTimeSlotEndChange} disabled={!timeSlot[3].enabled}>
                        <option key="Thu">Select Time</option>
                        <option key="Thu" value="9:00 AM">9:00 AM</option>
                        <option key="Thu" value="9:30 AM">9:30 AM</option>
                        <option key="Thu" value="10:00 AM">10:00 AM</option>
                        <option key="Thu" value="10:30 AM">10:30 AM</option>
                        <option key="Thu" value="11:00 AM">11:00 AM</option>
                        <option key="Thu" value="11:30 AM">11:30 AM</option>
                        <option key="Thu" value="12:00 AM">12:00 AM</option>
                        <option key="Thu" value="12:30 AM">12:30 AM</option>
                        <option key="Thu" value="1:00 PM">1:00 PM</option>
                        <option key="Thu" value="1:30 PM">1:30 PM</option>
                        <option key="Thu" value="2:00 PM">2:00 PM</option>
                        <option key="Thu" value="2:30 PM">2:30 PM</option>
                        <option key="Thu" value="3:00 PM">3:00 PM</option>
                        <option key="Thu" value="3:30 PM">3:30 PM</option>
                        <option key="Thu" value="4:00 PM">4:00 PM</option>
                        <option key="Thu" value="4:30 PM">4:30 PM</option>
                        <option key="Thu" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>

            </div>

            <div className="toggle-container">
              <div className="col-2 weekday">Friday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Fri")}
                  checked={timeSlot[4].enabled}
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Fri" onChange={handleTimeSlotStartChange} disabled={!timeSlot[4].enabled}>
                        <option key="Fri">Select Time</option>
                        <option key="Fri" value="9:00 AM">9:00 AM</option>
                        <option key="Fri" value="9:30 AM">9:30 AM</option>
                        <option key="Fri" value="10:00 AM">10:00 AM</option>
                        <option key="Fri" value="10:30 AM">10:30 AM</option>
                        <option key="Fri" value="11:00 AM">11:00 AM</option>
                        <option key="Fri" value="11:30 AM">11:30 AM</option>
                        <option key="Fri" value="12:00 AM">12:00 AM</option>
                        <option key="Fri" value="12:30 AM">12:30 AM</option>
                        <option key="Fri" value="1:00 PM">1:00 PM</option>
                        <option key="Fri" value="1:30 PM">1:30 PM</option>
                        <option key="Fri" value="2:00 PM">2:00 PM</option>
                        <option key="Fri" value="2:30 PM">2:30 PM</option>
                        <option key="Fri" value="3:00 PM">3:00 PM</option>
                        <option key="Fri" value="3:30 PM">3:30 PM</option>
                        <option key="Fri" value="4:00 PM">4:00 PM</option>
                        <option key="Fri" value="4:30 PM">4:30 PM</option>
                        <option key="Fri" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Select Time" id="Fri" onChange={handleTimeSlotEndChange} disabled={!timeSlot[4].enabled}>
                        <option key="Fri">Select Time</option>
                        <option key="Fri" value="9:00 AM">9:00 AM</option>
                        <option key="Fri" value="9:30 AM">9:30 AM</option>
                        <option key="Fri" value="10:00 AM">10:00 AM</option>
                        <option key="Fri" value="10:30 AM">10:30 AM</option>
                        <option key="Fri" value="11:00 AM">11:00 AM</option>
                        <option key="Fri" value="11:30 AM">11:30 AM</option>
                        <option key="Fri" value="12:00 AM">12:00 AM</option>
                        <option key="Fri" value="12:30 AM">12:30 AM</option>
                        <option key="Fri" value="1:00 PM">1:00 PM</option>
                        <option key="Fri" value="1:30 PM">1:30 PM</option>
                        <option key="Fri" value="2:00 PM">2:00 PM</option>
                        <option key="Fri" value="2:30 PM">2:30 PM</option>
                        <option key="Fri" value="3:00 PM">3:00 PM</option>
                        <option key="Fri" value="3:30 PM">3:30 PM</option>
                        <option key="Fri" value="4:00 PM">4:00 PM</option>
                        <option key="Fri" value="4:30 PM">4:30 PM</option>
                        <option key="Fri" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>

            </div>

            <div className="toggle-container">
              <div className="col-2 weekday">Saturday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Sat")}
                  checked={timeSlot[5].enabled}
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Sat" onChange={handleTimeSlotStartChange} disabled={!timeSlot[5].enabled}>
                        <option key="Sat">Select Time</option>
                        <option key="Sat" value="9:00 AM">9:00 AM</option>
                        <option key="Sat" value="9:30 AM">9:30 AM</option>
                        <option key="Sat" value="10:00 AM">10:00 AM</option>
                        <option key="Sat" value="10:30 AM">10:30 AM</option>
                        <option key="Sat" value="11:00 AM">11:00 AM</option>
                        <option key="Sat" value="11:30 AM">11:30 AM</option>
                        <option key="Sat" value="12:00 AM">12:00 AM</option>
                        <option key="Sat" value="12:30 AM">12:30 AM</option>
                        <option key="Sat" value="1:00 PM">1:00 PM</option>
                        <option key="Sat" value="1:30 PM">1:30 PM</option>
                        <option key="Sat" value="2:00 PM">2:00 PM</option>
                        <option key="Sat" value="2:30 PM">2:30 PM</option>
                        <option key="Sat" value="3:00 PM">3:00 PM</option>
                        <option key="Sat" value="3:30 PM">3:30 PM</option>
                        <option key="Sat" value="4:00 PM">4:00 PM</option>
                        <option key="Sat" value="4:30 PM">4:30 PM</option>
                        <option key="Sat" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Select Time" id="Sat" onChange={handleTimeSlotEndChange} disabled={!timeSlot[5].enabled}>
                        <option key="Sat">Select Time</option>
                        <option key="Sat" value="9:00 AM">9:00 AM</option>
                        <option key="Sat" value="9:30 AM">9:30 AM</option>
                        <option key="Sat" value="10:00 AM">10:00 AM</option>
                        <option key="Sat" value="10:30 AM">10:30 AM</option>
                        <option key="Sat" value="11:00 AM">11:00 AM</option>
                        <option key="Sat" value="11:30 AM">11:30 AM</option>
                        <option key="Sat" value="12:00 AM">12:00 AM</option>
                        <option key="Sat" value="12:30 AM">12:30 AM</option>
                        <option key="Sat" value="1:00 PM">1:00 PM</option>
                        <option key="Sat" value="1:30 PM">1:30 PM</option>
                        <option key="Sat" value="2:00 PM">2:00 PM</option>
                        <option key="Sat" value="2:30 PM">2:30 PM</option>
                        <option key="Sat" value="3:00 PM">3:00 PM</option>
                        <option key="Sat" value="3:30 PM">3:30 PM</option>
                        <option key="Sat" value="4:00 PM">4:00 PM</option>
                        <option key="Sat" value="4:30 PM">4:30 PM</option>
                        <option key="Sat" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>

            </div>

            <div className="toggle-container">
              <div className="col-2 weekday">Sunday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Sun")}
                  checked={timeSlot[6].enabled}
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Sun" onChange={handleTimeSlotStartChange} disabled={!timeSlot[6].enabled}>
                        <option key="Sun">Select Time</option>
                        <option key="Sun" value="9:00 AM">9:00 AM</option>
                        <option key="Sun" value="9:30 AM">9:30 AM</option>
                        <option key="Sun" value="10:00 AM">10:00 AM</option>
                        <option key="Sun" value="10:30 AM">10:30 AM</option>
                        <option key="Sun" value="11:00 AM">11:00 AM</option>
                        <option key="Sun" value="11:30 AM">11:30 AM</option>
                        <option key="Sun" value="12:00 AM">12:00 AM</option>
                        <option key="Sun" value="12:30 AM">12:30 AM</option>
                        <option key="Sun" value="1:00 PM">1:00 PM</option>
                        <option key="Sun" value="1:30 PM">1:30 PM</option>
                        <option key="Sun" value="2:00 PM">2:00 PM</option>
                        <option key="Sun" value="2:30 PM">2:30 PM</option>
                        <option key="Sun" value="3:00 PM">3:00 PM</option>
                        <option key="Sun" value="3:30 PM">3:30 PM</option>
                        <option key="Sun" value="4:00 PM">4:00 PM</option>
                        <option key="Sun" value="4:30 PM">4:30 PM</option>
                        <option key="Sun" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Select Time" id="Sun" onChange={handleTimeSlotEndChange} disabled={!timeSlot[6].enabled}>
                        <option key="Sun">Select Time</option>
                        <option key="Sun" value="9:00 AM">9:00 AM</option>
                        <option key="Sun" value="9:30 AM">9:30 AM</option>
                        <option key="Sun" value="10:00 AM">10:00 AM</option>
                        <option key="Sun" value="10:30 AM">10:30 AM</option>
                        <option key="Sun" value="11:00 AM">11:00 AM</option>
                        <option key="Sun" value="11:30 AM">11:30 AM</option>
                        <option key="Sun" value="12:00 AM">12:00 AM</option>
                        <option key="Sun" value="12:30 AM">12:30 AM</option>
                        <option key="Sun" value="1:00 PM">1:00 PM</option>
                        <option key="Sun" value="1:30 PM">1:30 PM</option>
                        <option key="Sun" value="2:00 PM">2:00 PM</option>
                        <option key="Sun" value="2:30 PM">2:30 PM</option>
                        <option key="Sun" value="3:00 PM">3:00 PM</option>
                        <option key="Sun" value="3:30 PM">3:30 PM</option>
                        <option key="Sun" value="4:00 PM">4:00 PM</option>
                        <option key="Sun" value="4:30 PM">4:30 PM</option>
                        <option key="Sun" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>

            </div>

            <div class="text-right">
              <button type="submit" class="btn btn-outline-secondary">
                Cancel
              </button>
              <button type="submit" onClick={updateClinicHours} class="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modalState == "show-modal"}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Clinic Hours Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <img src={success} alt="success image" className='success-img' />
          <p className='modal-txt-cn'>You have successfully updated your clinic hours!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleModalClose}
            >
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal
        show={modalState == "show-error"}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Clinic Hours Error</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <img src={error} alt="error image" className='error-img' />
          <p className='modal-txt-cn'>You have an error.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleModalClose}
            >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ClinicHours;