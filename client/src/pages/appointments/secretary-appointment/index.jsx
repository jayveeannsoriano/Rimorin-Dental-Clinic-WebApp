import React, {useState, useEffect} from "react";
import SecAcceptCancel from "../../../components/sec-acceptcancel";
import '../../../styles/dashboard.css';
import '../../../styles/modals.css';
import { Form } from "react-bootstrap";
import Axios from 'axios';

export default function SecretaryAppointmentPage() {  

  const [dentistInfo, setDentistInfo] = useState([]);
  const [dentistIDnum, setDentistIDnumber] = useState("");
  console.log("THIS IS THE ID NUM", dentistIDnum);

  const getDentistInfo = async () => {
    try {
        const responses = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getDentistInfo');
        console.log(responses.data);
        setDentistInfo(responses.data);
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
  getDentistInfo();
}, []);

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/secretary">Home</a>
          </li>
          <li className="breadcrumb-item active">Appointments</li>
        </ol>
      </nav>
        
      <section className="section dashboard">
        <div className="row">
         <div className="col-12">
            <div className="card overflow-auto">
              <div className="card-body appointment-request-table">
                <h5 className="card-title">APPOINTMENT REQUEST</h5>
                <SecAcceptCancel dentistIDnum={dentistIDnum}/>
              </div>
              {/* End of Appointment Request */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

