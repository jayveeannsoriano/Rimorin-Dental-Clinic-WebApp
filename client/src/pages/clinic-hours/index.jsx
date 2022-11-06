import React from "react";
import { Button, Form} from "react-bootstrap";
import { Switch } from 'antd';
import "../../styles/clinic-hours.css";
import "antd/dist/antd.css";

const clinichourspage = () => {
  return (
    <>
      <div class="pagetitle">
        <h1>Clinic Hours</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/dashboard">Home</a>
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
                />
              </div>
                <Form id="time-select">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Select 
                    defaultValue="Select Time">
                        <option>Select Time</option>
                        <option>...</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option>Select Time</option>
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
                        <option>Select Time</option>
                        <option>...</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option>Select Time</option>
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
                        <option>Select Time</option>
                        <option>...</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option>Select Time</option>
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
                    defaultValue="Select Time">
                        <option>Select Time</option>
                        <option>...</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option>Select Time</option>
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
                    defaultValue="Select Time">
                        <option>Select Time</option>
                        <option>...</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option>Select Time</option>
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
                    defaultValue="Select Time">
                        <option>Select Time</option>
                        <option>...</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option>Select Time</option>
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
                    defaultValue="Select Time">
                        <option>Select Time</option>
                        <option>...</option>
                    </Form.Select>
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <Form.Select defaultValue="Time">
                        <option>Select Time</option>
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
export default clinichourspage;