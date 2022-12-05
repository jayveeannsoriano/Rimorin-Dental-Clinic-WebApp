import { Draggable } from "@fullcalendar/interaction";
import axios from "axios";
var userInfo = JSON.parse(window.localStorage.getItem('current-session'));

const events = axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserAppts', { params: { pName: userInfo['fname'] + " " + userInfo['lname'] } });


  export default events;
  