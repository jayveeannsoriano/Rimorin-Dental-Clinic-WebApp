import React, {useState,useEffect} from "react";
import Axios from 'axios';
import Avatar from 'react-avatar';

const PatientProfileWidget = () => {
    const [patientList, setPatientList] = useState([]);
    const [patientIDNum, setpatientIDNum] = useState();
    console.log(patientIDNum);


    const getPatientDetails = async() => {
        try{
            var url = require('url');
            var url_parts = url.parse(window.location.href, true);
            var query = url_parts.query;

            const response = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getPatientInfo', {
                params: {
                    patientIDnumber: query.patientIDNum
                }
            });
            console.log(response, "Responses");
            setPatientList(response.data);
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPatientDetails();
    }, []);

    const proceedtoViewInfo = (value) => {
        setpatientIDNum(value.substring(3));
    }

    //const bdayInput = userInfo['bday']
    //let AgeOut = () => {
    //    return Math.floor((Date.now() - new Date(bdayInput).getTime()) / 31557600000)
    //} 

    return (
        <>
        {/* replace 'patients' with proper get value variable */}
        {patientList.map((item, index) => (
            <div class="col-xl-4">
                <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <Avatar name={item.fname} maxInitials={2} round={true} size="100" alt="Avatar" id="avatar-profile"/>
                    <h2 id="">{item['fname'] + " " + item['lname']}</h2>
                    <h3>Patient ID: <span>{item['patientIDnumber']}</span></h3>
                    <div className="divider"></div>
                    <div class="row patient-info">
                        <div className="col">
                        <h3>Phone</h3>
                            <p id="contact_num"> (+63) {item['mobile']} </p>
                            <h3>Age</h3>
                            <p id="age"> {item.age} </p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
            ))}
    </>
    )
}

export default PatientProfileWidget;