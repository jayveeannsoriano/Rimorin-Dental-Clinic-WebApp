import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Switch } from "antd";
import "../../styles/clinic-schedule.css";
import "antd/dist/antd.css";
import axios from "axios";
import success from "../../assets/img/check.png";
import error from "../../assets/img/error.png";
import Modal from "react-bootstrap/Modal";
import { navigate } from "@reach/router";
import TimeScheduleSlotSelect from "./timeScheduleSlot";

const ClinicSchedule = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const defaultStateOfTimeSlots = days.map((day) => ({
    day,
    timeStart: "9:00 AM",
    timeEnd: "5:00 PM",
    enabled: false,
  }));

  const [timeSlot, setTimeSlot] = useState(defaultStateOfTimeSlots);
  
  const [modalState, setModalState] = useState(false);
  const handleModalClose = () => {
    setModalState(false);
    navigate(0);
  };
  const handleShow = () => {
    setModalState("show-modal");
  };

  const handleTimeSlotStartChange = (event) => {
    var time = event.target.value;
    var id = event.target.id;

    setTimeSlot((current) =>
      current.map((obj) => {
        if (obj.day === id) {
          return { ...obj, timeStart: time };
        }
        return obj;
      })
    );
  };

  const handledaySwitch = (input) => (e) => {
    var selectRange = document.querySelectorAll("#" + input);
    if (e) {
      selectRange[0].disabled = false;
      selectRange[1].disabled = false;
    } else {
      selectRange[0].disabled = true;
      selectRange[1].disabled = true;
    }
    setTimeSlot((current) =>
      current.map((obj) => {
        if (obj.day === input) {
          return { ...obj, enabled: !obj.enabled };
        }
        return obj;
      })
    );
  };

  const handleTimeSlotEndChange = (event) => {
    var time = event.target.value;
    var id = event.target.id;

    setTimeSlot((current) =>
      current.map((obj) => {
        if (obj.day === id) {
          return { ...obj, timeEnd: time };
        }
        return obj;
      })
    );
  };

  const applyToAll = (event) => {
    var toApply = document.querySelectorAll("#Mon");
    var timeStart = toApply[0].value;
    var timeEnd = toApply[1].value;
    var selects = document.querySelectorAll('select:not([id="Interval"])');

    for (let i = 0; i < selects.length; i++) {
      if (i % 2 == 0) {
        selects[i].value = timeStart;
      } else {
        selects[i].value = timeEnd;
      }
    }

    setTimeSlot((current) =>
      current.map((obj) => {
        return { ...obj, timeEnd: timeEnd, timeStart: timeStart };
      })
    );
  };

  const updateClinicHours = async () => {
    try {
      axios.put("http://localhost:3001/updateClinicHours", {
        clinicHours: timeSlot,
      });
      handleShow();
    } catch (error) {
      console.log(error);
      setModalState("error-modal");
    }
  };

  const getAvailableTimes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/getAvailableTimes"
      );

      var data = response.data[0].config;
      var range;
      data.map(
        (item) => (
          (range = document.querySelectorAll("#" + item.day)),
          (range[0].value = item.timeStart),
          (range[1].value = item.timeEnd),
          setTimeSlot((current) =>
            current.map((obj) => {
              return {
                ...obj,
                timeStart: item.timeStart,
                timeEnd: item.timeEnd,
                enabled: item.enabled,
              };
            })
          )
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getAvailableTimes();
  }, []);

   useEffect(() => {
   }, [timeSlot]);

  return (
    <>
      <div class="pagetitle">
        <h1>Clinic Schedule</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Home</a>
            </li>
            <li class="breadcrumb-item active">
              <a href="/admin/clinic-schedule">Clinic Schedule</a>
            </li>
          </ol>
        </nav>
      </div>
      <div class="col-xl">
        <div className="card patient-info">
        <div className="card-body pt-3">
            <h5 className="card-title">Clinic Schedule</h5>
            <div className="divider"></div>

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
                  <TimeScheduleSlotSelect
                    day="Mon"
                    onChange={handleTimeSlotStartChange}
                    disabled={!timeSlot[0].enabled}
                  />
              </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <TimeScheduleSlotSelect
                    day="Mon"
                    onChange={handleTimeSlotEndChange}
                    disabled={!timeSlot[0].enabled}
                  />
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
                    <TimeScheduleSlotSelect
                    day="Tue"
                    onChange={handleTimeSlotStartChange}
                    disabled={!timeSlot[1].enabled}
                  />
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <TimeScheduleSlotSelect
                    day="Tue"
                    onChange={handleTimeSlotEndChange}
                    disabled={!timeSlot[1].enabled}
                  />
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
                    <TimeScheduleSlotSelect
                    day="Wed"
                    onChange={handleTimeSlotStartChange}
                    disabled={!timeSlot[2].enabled}
                  />
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <TimeScheduleSlotSelect
                    day="Wed"
                    onChange={handleTimeSlotEndChange}
                    disabled={!timeSlot[2].enabled}
                  />
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
                    <TimeScheduleSlotSelect
                    day="Thu"
                    onChange={handleTimeSlotStartChange}
                    disabled={!timeSlot[3].enabled}
                  />
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <TimeScheduleSlotSelect
                    day="Thu"
                    onChange={handleTimeSlotEndChange}
                    disabled={!timeSlot[3].enabled}
                  />
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
                    <TimeScheduleSlotSelect
                    day="Fri"
                    onChange={handleTimeSlotStartChange}
                    disabled={!timeSlot[4].enabled}
                  />
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <TimeScheduleSlotSelect
                    day="Fri"
                    onChange={handleTimeSlotEndChange}
                    disabled={!timeSlot[4].enabled}
                  />
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
                    <TimeScheduleSlotSelect
                    day="Sat"
                    onChange={handleTimeSlotStartChange}
                    disabled={!timeSlot[5].enabled}
                  />
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <TimeScheduleSlotSelect
                    day="Sat"
                    onChange={handleTimeSlotEndChange}
                    disabled={!timeSlot[5].enabled}
                  />
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
                    <TimeScheduleSlotSelect
                    day="Sun"
                    onChange={handleTimeSlotStartChange}
                    disabled={!timeSlot[6].enabled}
                  />
                </Form>
              
              <span className="range">to</span>

                <Form id="time-select">
                    <Form.Label>End Time</Form.Label>
                    <TimeScheduleSlotSelect
                    day="Sun"
                    onChange={handleTimeSlotEndChange}
                    disabled={!timeSlot[6].enabled}
                  />
                </Form>

            </div>

            <div class="text-right">
              <button type="submit" onClick={updateClinicHours} class="btn btn-primary">
                Save Changes
              </button>
              <button type="submit" onClick={() => navigate(-1)} class="btn btn-outline-secondary">
                Cancel
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
          <Modal.Title>Clinic Schedule Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <img src={success} alt="success image" className="success-img" />
          <p className="modal-txt-cn">
            You have successfully updated the clinic schedule!
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
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
          <Modal.Title>Clinic Schedule Error</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <img src={error} alt="error image" className="error-img" />
          <p className="modal-txt-cn">You have an error.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ClinicSchedule;
