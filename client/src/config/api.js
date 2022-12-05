import axios from "axios";

const API = axios.create({
  baseURL: "https://rimorin-dental-clinic.herokuapp.com/getAppointmentDetail",
});

export default API;
