import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:80/getAppointmentDetail",
});

export default API;
