import React, { useRef, useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { Switch } from 'antd';
import "../../styles/clinic-hours.css";
import "antd/dist/antd.css";

const ClinicHours = () => {
  const [timeSlot, setTimeSlot] = useState([
    {
      Day: 'Monday',
      TimeSlot: ''
    },
    {
      Day: 'Tuesday',
      TimeSlot: ''
    },
    {
      Day: 'Wednesday',
      TimeSlot: ''
    },
    {
      Day: 'Thursday',
      TimeSlot: ''
    },
    {
      Day: 'Friday',
      TimeSlot: ''
    },
    {
      Day: 'Saturday',
      TimeSlot: ''
    },
    {
      Day: 'Sunday',
      TimeSlot: ''
    },
  ]);

  const handleTimeSlotChange = event => {
    var input = event.target.value;
    const newState = timeSlot.map(obj => {
      // 👇️ if id equals 2, update country property
      
      return {...obj, TimeSlot: input};
      
    });

    setTimeSlot(newState);
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
                    defaultValue="Select Time" onChange={handleTimeSlotChange}>
                        <option key="Monday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                    <Form.Select defaultValue="Time">
                        <option key="Tuesday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                    <Form.Select defaultValue="Time">
                        <option key="Wednesday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                    defaultValue="Select Time" onChange={handleTimeSlotChange}>
                        <option key="Thursday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                    defaultValue="Select Time" onChange={handleTimeSlotChange}>
                        <option key="Friday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                    defaultValue="Select Time" onChange={handleTimeSlotChange}>
                        <option key="Saturday" value="CLICKED">Select Time</option>
                        <option>...</option>
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
                    defaultValue="Select Time" onChange={handleTimeSlotChange}>
                        <option key="Sunday" value="CLICKED">Select Time</option>
                        <option>...</option>
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