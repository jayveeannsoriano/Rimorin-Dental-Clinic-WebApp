import React, { useRef, useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { Switch } from 'antd';
import "../../styles/clinic-hours.css";
import "antd/dist/antd.css";

const ClinicHours = () => {
  const [timeSlot, setTimeSlot] = useState([
    {
      day: "Monday",
      timeStart: ''
    },
    {
      day: "Tuesday",
      timeStart: ''
    },
    {
      day: "Wednesday",
      timeStart: ''
    },
    {
      day: "Thursday",
      timeStart: ''
    },
    {
      day: "Friday",
      timeStart: ''
    },
    {
      day: "Saturday",
      timeStart: ''
    },
    {
      day: "Sunday",
      timeStart: ''
    },
  ]);

  const handleTimeSlotChange = event => {
    var time = event.target.value;
    var id = event.target.id;
    console.log(time);
    console.log(id)

    setTimeSlot(current =>
      current.map(obj => {
        if (obj.day === id) {
          return {...obj, timeStart: time};
        }
        return obj;
      }),
    );
    console.log(timeSlot);
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
          </ol>handleTimeSlotChange
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
                />
              </div>
                <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Monday" onChange={handleTimeSlotChange}>
                        <option key="Monday">Select Time</option>
                        <option key="Monday" value="9:00 AM">9:00 AM</option>
                        <option key="Monday" value="9:30 AM">9:30 AM</option>
                        <option key="Monday" value="10:00 AM">10:00 AM</option>
                        <option key="Monday" value="10:30 AM">10:30 AM</option>
                        <option key="Monday" value="11:00 AM">11:00 AM</option>
                        <option key="Monday" value="11:30 AM">11:30 AM</option>
                        <option key="Monday" value="12:00 AM">12:00 AM</option>
                        <option key="Monday" value="12:30 AM">12:30 AM</option>
                        <option key="Monday" value="1:00 PM">1:00 PM</option>
                        <option key="Monday" value="1:30 PM">1:30 PM</option>
                        <option key="Monday" value="2:00 PM">2:00 PM</option>
                        <option key="Monday" value="2:30 PM">2:30 PM</option>
                        <option key="Monday" value="3:00 PM">3:00 PM</option>
                        <option key="Monday" value="3:30 PM">3:30 PM</option>
                        <option key="Monday" value="4:00 PM">4:00 PM</option>
                        <option key="Monday" value="4:30 PM">4:30 PM</option>
                        <option key="Monday" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option key="Monday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Tuesday" onChange={handleTimeSlotChange}>
                        <option key="Tuesday">Select Time</option>
                        <option key="Tuesday" value="9:00 AM">9:00 AM</option>
                        <option key="Tuesday" value="9:30 AM">9:30 AM</option>
                        <option key="Tuesday" value="10:00 AM">10:00 AM</option>
                        <option key="Tuesday" value="10:30 AM">10:30 AM</option>
                        <option key="Tuesday" value="11:00 AM">11:00 AM</option>
                        <option key="Tuesday" value="11:30 AM">11:30 AM</option>
                        <option key="Tuesday" value="12:00 AM">12:00 AM</option>
                        <option key="Tuesday" value="12:30 AM">12:30 AM</option>
                        <option key="Tuesday" value="1:00 PM">1:00 PM</option>
                        <option key="Tuesday" value="1:30 PM">1:30 PM</option>
                        <option key="Tuesday" value="2:00 PM">2:00 PM</option>
                        <option key="Tuesday" value="2:30 PM">2:30 PM</option>
                        <option key="Tuesday" value="3:00 PM">3:00 PM</option>
                        <option key="Tuesday" value="3:30 PM">3:30 PM</option>
                        <option key="Tuesday" value="4:00 PM">4:00 PM</option>
                        <option key="Tuesday" value="4:30 PM">4:30 PM</option>
                        <option key="Tuesday" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option key="Monday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select
                    defaultValue="Select Time" id="Wednesday" onChange={handleTimeSlotChange}>
                        <option key="Wednesday">Select Time</option>
                        <option key="Wednesday" value="9:00 AM">9:00 AM</option>
                        <option key="Wednesday" value="9:30 AM">9:30 AM</option>
                        <option key="Wednesday" value="10:00 AM">10:00 AM</option>
                        <option key="Wednesday" value="10:30 AM">10:30 AM</option>
                        <option key="Wednesday" value="11:00 AM">11:00 AM</option>
                        <option key="Wednesday" value="11:30 AM">11:30 AM</option>
                        <option key="Wednesday" value="12:00 AM">12:00 AM</option>
                        <option key="Wednesday" value="12:30 AM">12:30 AM</option>
                        <option key="Wednesday" value="1:00 PM">1:00 PM</option>
                        <option key="Wednesday" value="1:30 PM">1:30 PM</option>
                        <option key="Wednesday" value="2:00 PM">2:00 PM</option>
                        <option key="Wednesday" value="2:30 PM">2:30 PM</option>
                        <option key="Wednesday" value="3:00 PM">3:00 PM</option>
                        <option key="Wednesday" value="3:30 PM">3:30 PM</option>
                        <option key="Wednesday" value="4:00 PM">4:00 PM</option>
                        <option key="Wednesday" value="4:30 PM">4:30 PM</option>
                        <option key="Wednesday" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option key="Wednesday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Thursday" onChange={handleTimeSlotChange}>
                        <option key="Thursday">Select Time</option>
                        <option key="Thursday" value="9:00 AM">9:00 AM</option>
                        <option key="Thursday" value="9:30 AM">9:30 AM</option>
                        <option key="Thursday" value="10:00 AM">10:00 AM</option>
                        <option key="Thursday" value="10:30 AM">10:30 AM</option>
                        <option key="Thursday" value="11:00 AM">11:00 AM</option>
                        <option key="Thursday" value="11:30 AM">11:30 AM</option>
                        <option key="Thursday" value="12:00 AM">12:00 AM</option>
                        <option key="Thursday" value="12:30 AM">12:30 AM</option>
                        <option key="Thursday" value="1:00 PM">1:00 PM</option>
                        <option key="Thursday" value="1:30 PM">1:30 PM</option>
                        <option key="Thursday" value="2:00 PM">2:00 PM</option>
                        <option key="Thursday" value="2:30 PM">2:30 PM</option>
                        <option key="Thursday" value="3:00 PM">3:00 PM</option>
                        <option key="Thursday" value="3:30 PM">3:30 PM</option>
                        <option key="Thursday" value="4:00 PM">4:00 PM</option>
                        <option key="Thursday" value="4:30 PM">4:30 PM</option>
                        <option key="Thursday" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option key="Thursday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Friday" onChange={handleTimeSlotChange}>
                        <option key="Friday">Select Time</option>
                        <option key="Friday" value="9:00 AM">9:00 AM</option>
                        <option key="Friday" value="9:30 AM">9:30 AM</option>
                        <option key="Friday" value="10:00 AM">10:00 AM</option>
                        <option key="Friday" value="10:30 AM">10:30 AM</option>
                        <option key="Friday" value="11:00 AM">11:00 AM</option>
                        <option key="Friday" value="11:30 AM">11:30 AM</option>
                        <option key="Friday" value="12:00 AM">12:00 AM</option>
                        <option key="Friday" value="12:30 AM">12:30 AM</option>
                        <option key="Friday" value="1:00 PM">1:00 PM</option>
                        <option key="Friday" value="1:30 PM">1:30 PM</option>
                        <option key="Friday" value="2:00 PM">2:00 PM</option>
                        <option key="Friday" value="2:30 PM">2:30 PM</option>
                        <option key="Friday" value="3:00 PM">3:00 PM</option>
                        <option key="Friday" value="3:30 PM">3:30 PM</option>
                        <option key="Friday" value="4:00 PM">4:00 PM</option>
                        <option key="Friday" value="4:30 PM">4:30 PM</option>
                        <option key="Friday" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option key="Friday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Saturday" onChange={handleTimeSlotChange}>
                        <option key="Saturday">Select Time</option>
                        <option key="Saturday" value="9:00 AM">9:00 AM</option>
                        <option key="Saturday" value="9:30 AM">9:30 AM</option>
                        <option key="Saturday" value="10:00 AM">10:00 AM</option>
                        <option key="Saturday" value="10:30 AM">10:30 AM</option>
                        <option key="Saturday" value="11:00 AM">11:00 AM</option>
                        <option key="Saturday" value="11:30 AM">11:30 AM</option>
                        <option key="Saturday" value="12:00 AM">12:00 AM</option>
                        <option key="Saturday" value="12:30 AM">12:30 AM</option>
                        <option key="Saturday" value="1:00 PM">1:00 PM</option>
                        <option key="Saturday" value="1:30 PM">1:30 PM</option>
                        <option key="Saturday" value="2:00 PM">2:00 PM</option>
                        <option key="Saturday" value="2:30 PM">2:30 PM</option>
                        <option key="Saturday" value="3:00 PM">3:00 PM</option>
                        <option key="Saturday" value="3:30 PM">3:30 PM</option>
                        <option key="Saturday" value="4:00 PM">4:00 PM</option>
                        <option key="Saturday" value="4:30 PM">4:30 PM</option>
                        <option key="Saturday" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option key="Saturday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                />
              </div>

              <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time" id="Sunday" onChange={handleTimeSlotChange}>
                        <option key="Sunday">Select Time</option>
                        <option key="Sunday" value="9:00 AM">9:00 AM</option>
                        <option key="Sunday" value="9:30 AM">9:30 AM</option>
                        <option key="Sunday" value="10:00 AM">10:00 AM</option>
                        <option key="Sunday" value="10:30 AM">10:30 AM</option>
                        <option key="Sunday" value="11:00 AM">11:00 AM</option>
                        <option key="Sunday" value="11:30 AM">11:30 AM</option>
                        <option key="Sunday" value="12:00 AM">12:00 AM</option>
                        <option key="Sunday" value="12:30 AM">12:30 AM</option>
                        <option key="Sunday" value="1:00 PM">1:00 PM</option>
                        <option key="Sunday" value="1:30 PM">1:30 PM</option>
                        <option key="Sunday" value="2:00 PM">2:00 PM</option>
                        <option key="Sunday" value="2:30 PM">2:30 PM</option>
                        <option key="Sunday" value="3:00 PM">3:00 PM</option>
                        <option key="Sunday" value="3:30 PM">3:30 PM</option>
                        <option key="Sunday" value="4:00 PM">4:00 PM</option>
                        <option key="Sunday" value="4:30 PM">4:30 PM</option>
                        <option key="Sunday" value="5:00 PM">5:00 PM</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option key="Sunday" value="CLICKED">Select Time</option>
                        <option>...</option>
                    </Form.Select>
                </Form>

            </div>

            <div class="text-right">
              <button type="submit" class="btn btn-outline-secondary">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">
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