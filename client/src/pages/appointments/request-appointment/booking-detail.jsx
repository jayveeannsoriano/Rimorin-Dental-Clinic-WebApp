import React, { useEffect, useState } from "react";
import Axios from "axios";
import "react-bootstrap";
import { Table } from "react-bootstrap";

const BookingDetail = ({ nextStep, prevStep, values }) => {
  const [dentistDetails, setDentistDetails] = useState();
  console.log("DENTIST ID NUMBER", values.doctor);

  var retrievedObject = localStorage.getItem('totalProcedure');

  var totalProcedures = JSON.parse(retrievedObject)

  const [dentalItem, setDentalItem] = useState([]);
  // const [dentPrice, setDentalPrice] = useState([]);

  useEffect(() => {
    const price = totalProcedures.map((item) =>
      item.chosen != null
        ? item.chosen.map(
            (proc) => (
              // setDentalPrice((current) => [...current, parseInt(proc.price)]),
              setDentalItem((current) => [...current, proc])
            )
          )
        : null
    );
  }, [1]);


  window.localStorage.setItem("doctorName", dentistDetails);
  const getDentistInfo = async () => {
    try {
      const responses = await Axios.get(
        "http://localhost:3001/getDentistIDdetails",
        {
          params: {
            ObjectID: values.doctor,
          },
        }
      );
      console.log(
        responses.data[0].fname +
          " " +
          responses.data[0].mname +
          " " +
          responses.data[0].lname
      );
      setDentistDetails(
        responses.data[0].fname +
          " " +
          responses.data[0].mname +
          " " +
          responses.data[0].lname
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDentistInfo();
  }, []);

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/appointments">Appointments</a>
          </li>
          <li className="breadcrumb-item active">Request Appointment</li>
        </ol>
      </nav>

      <section className="section dashboard">
        <div className="row">
          {/* Card Title*/}
          <div className="card-body">
            <h5 className="appt-title">REQUEST APPOINTMENT</h5>

            {/* Stepper */}
            <div className="md-stepper-horizontal orange">
              <div className="md-step">
                <div className="md-step-circle">
                  <span>1</span>
                </div>
                <div className="md-step-title">Fill-up</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step active">
                <div className="md-step-circle">
                  <span>2</span>
                </div>
                <div className="md-step-title">Review Appointment Details</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step">
                <div className="md-step-circle">
                  <span>3</span>
                </div>
                <div className="md-step-title">Done</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="appointment-info">
              <h1>CLINIC INFORMATION</h1>
              <h3 id="clinic-location">
                Victoria Shoppesville, Upper Mabini Street, Baguio City,
                Philippines
              </h3>
            </div>

            <div className="divider"></div>

            <div className="appointment-info">
              <h1>APPOINTMENT INFORMATION</h1>
              <br />
              <h2>Doctor's Name</h2>
              Dr. {dentistDetails}
              <br />
              <br />
              <h2>Date of Appointment</h2>
              {JSON.stringify(window.localStorage.getItem("date"))
                .replace(/"/g, "")
                .substring(0, 15) +
                " | " +
                window.localStorage.getItem("time")}
              <br />
              <br />
              <h2>Treatment Procedure</h2>
              <div className="col-3">
                <Table striped responsive="sm" style={{fontSize: '14px'}}>
                  <thead>
                    <tr>
                      <th>Selected Treatment/s</th>
                      <th>Duration</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                  {dentalItem.map((item, index) => (
                          <tr key={index}>
                            <td>{item.procedure}</td>
                            <td>{item.time} mins</td>
                            <td>{item.price}</td>
                          </tr>
                        ))}
                        <tr style={{fontWeight: "bold"}}>
                          <td>Total:</td>
                          <td>{dentalItem.reduce((total, { time }) => total + time, 0)} mins</td>
                          <td>₱{dentalItem.reduce((total, { price }) => total + price, 0)}</td>
                        </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="divider"></div>
            <div className="appointment-info">
              <h1>Notes to Patient:</h1>
              <ol>
                <li>The information above will be sent to clinic.</li>
                <li>
                  You will receive a notification containing the clinic’s
                  response, including other reminders. Please check your Spam
                  mailbox as well.
                </li>
                <li>
                  Wait for the clinic’s approval of your appointment request.
                </li>
                <li>
                  In the event that you could not come to your appointment,
                  immediately rebook/contact the clinic.
                </li>
                <li>
                  If there is a conflict with your appointment, the clinic will
                  notify and reschedule you at the earliest time of your
                  convenience.
                </li>
              </ol>
              <div className="col-12">
                <div className="appt-bttns">
                  <button
                    onClick={Previous}
                    className="btn btn-outline-secondary"
                    type="submit"
                  >
                    Previous
                  </button>
                  <button
                    onClick={Continue}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End of card-body */}
        </div>
      </section>
    </>
  );
};

export default BookingDetail;
