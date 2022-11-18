import React, { useRef, useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { Switch } from "antd";
import "../../styles/clinic-hours.css";
import "antd/dist/antd.css";
import axios from "axios";

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

  const handleTimeSlotStartChange = event => {
    var time = event.target.value;
    var id = event.target.id;

    const selectedIndex = event.target.options.selectedIndex;
    console.log(selectedIndex)

    const isDisabled = event.target.options.selectedIndex.isDisabled;
    console.log(isDisabled)

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
    // var time = event.target.value;
    // var id = event.target.id;
    console.log(input);
    console.log('CLICKED')
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

  const updateClinicHours = async() => {
    console.log('Clicked');
    try{
      axios.put("http://localhost:3001/updateClinicHours", {clinicHours:timeSlot})
    }catch (error){
      console.log(error)
    }
  }
  


  return (
    <>
      <div class="pagetitle">
        <h1>Clinic Hours</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin/dashboard">Home</a>
            </li>
            <li class="breadcrumb-item">
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

            <div className="toggle-container">
              <div className="col-2 weekday">Monday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Mon")}
                />
              </div>
                <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Mon" onChange={handleTimeSlotStartChange}>
                        <option key="Mon">Select Time</option>
                        <option key="Mon" value="9:00 AM">9:00 AM</option>
                        <option key="Mon" value="9:30 AM">9:30 AM</option>
                        <option key="Mon" value="10:00 AM">10:00 AM</option>
                        <option key="Mon" value="10:30 AM">10:30 AM</option>
                        <option key="Mon" value="11:00 AM">11:00 AM</option>
                        <option key="Mon" value="11:30 AM">11:30 AM</option>
                        <option key="Mon" value="12:00 AM">12:00 AM</option>
                        <option key="Mon" value="12:30 AM">12:30 AM</option>
                        <option key="Mon" value="1:00 PM">1:00 PM</option>
                        <option key="Mon" value="1:30 PM">1:30 PM</option>
                        <option key="Mon" value="2:00 PM">2:00 PM</option>
                        <option key="Mon" value="2:30 PM">2:30 PM</option>
                        <option key="Mon" value="3:00 PM">3:00 PM</option>
                        <option key="Mon" value="3:30 PM">3:30 PM</option>
                        <option key="Mon" value="4:00 PM">4:00 PM</option>
                        <option key="Mon" value="4:30 PM">4:30 PM</option>
                        <option key="Mon" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select
                    defaultValue="Select Time" id="Mon" onChange={handleTimeSlotEndChange}>
                        <option key="Mon">Select Time</option>
                        <option key="Mon" value="9:00 AM">9:00 AM</option>
                        <option key="Mon" value="9:30 AM">9:30 AM</option>
                        <option key="Mon" value="10:00 AM">10:00 AM</option>
                        <option key="Mon" value="10:30 AM">10:30 AM</option>
                        <option key="Mon" value="11:00 AM">11:00 AM</option>
                        <option key="Mon" value="11:30 AM">11:30 AM</option>
                        <option key="Mon" value="12:00 AM">12:00 AM</option>
                        <option key="Mon" value="12:30 AM">12:30 AM</option>
                        <option key="Mon" value="1:00 PM">1:00 PM</option>
                        <option key="Mon" value="1:30 PM">1:30 PM</option>
                        <option key="Mon" value="2:00 PM">2:00 PM</option>
                        <option key="Mon" value="2:30 PM">2:30 PM</option>
                        <option key="Mon" value="3:00 PM">3:00 PM</option>
                        <option key="Mon" value="3:30 PM">3:30 PM</option>
                        <option key="Mon" value="4:00 PM">4:00 PM</option>
                        <option key="Mon" value="4:30 PM">4:30 PM</option>
                        <option key="Mon" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>

              <Button id="apply-all">Apply to All</Button>
            </div>

            <div className="toggle-container">
              <div className="col-2 weekday">Tuesday</div>

              <div className="col-2">
                <Switch
                  id="time-switch"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  onClick={handledaySwitch("Tue")}
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Tue" onChange={handleTimeSlotStartChange}>
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
                    <Form.Select defaultValue="Select Time" id="Tue" onChange={handleTimeSlotEndChange}>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select
                    defaultValue="Select Time" id="Wed" onChange={handleTimeSlotStartChange}>
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
                    <Form.Select defaultValue="Select Time" id="Wed" onChange={handleTimeSlotEndChange}>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Thu" onChange={handleTimeSlotStartChange}>
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
                    <Form.Select  defaultValue="Select Time" id="Thu" onChange={handleTimeSlotEndChange}>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Fri" onChange={handleTimeSlotStartChange}>
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
                    <Form.Select defaultValue="Select Time" id="Fri" onChange={handleTimeSlotEndChange}>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Sat" onChange={handleTimeSlotStartChange}>
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
                    <Form.Select defaultValue="Select Time" id="Sat" onChange={handleTimeSlotEndChange}>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Sun" onChange={handleTimeSlotStartChange}>
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
                    <Form.Select defaultValue="Select Time" id="Sun" onChange={handleTimeSlotEndChange}>
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
    </>
  );
};
export default ClinicHours;