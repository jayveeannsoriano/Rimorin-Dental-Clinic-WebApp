//Profile widget solely for Patients
import React, {useState,useEffect} from 'react'
import Avatar from 'react-avatar';
import Axios from 'axios';

const PatientProfileWidget = () => {
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    const UserObjectID = userInfo['_id'];
    const [UserData, setUserData] = useState([])
    console.log("PW", UserData);

    const defaultUserInfo = async () => {
        try {

            const response = await Axios.get("http://localhost:3001/getCurrentUserInfo", {
                params: {
                    ObjectID: UserObjectID
                }
            });
            setUserData(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        defaultUserInfo()
    }, []);
    
    return (
        <div class="col-xl-4">
            <div class="card">
            {UserData.map((item, index) => (
                <div key={index} class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <Avatar name={item.fname + " " + item.lname} maxInitials={2} round={true} size="100" alt="Avatar" id="avatar-profile"/>
                    <h2 id="">{item.fname} {item.lname}</h2>
                    <h3>Patient ID: <span>{item.patientIDnumber}</span></h3>
                    <div className="divider"></div>
                    <div class="row patient-info">
                        <div className="col">
                            <h3>Phone</h3>
                            <p id="contact_num"> (+63) {item.mobile} </p>
                            <h3>Age</h3>
                            <p id="age"> {item.age} </p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        
  )
}
export default PatientProfileWidget;
