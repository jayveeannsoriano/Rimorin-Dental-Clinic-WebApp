import { Draggable } from "@fullcalendar/interaction";
import axios from "axios";
var userInfo = JSON.parse(window.localStorage.getItem('current-session'));

const events = axios.get('http://localhost:80/getUserAppts', { params: { pName: userInfo['fname'] + " " + userInfo['lname'] } });


  export default events;
  