const mongoose = require("mongoose");
const AppointmentHistory = new mongoose.Schema(
  {
    patientIDnumber: String,
    pName: String,
    dName: String,
    appNum: String,
    date: String,
    time: String,
    consultation: String,
    appStatus: String,
    reasonCancel: String,
  },
  {
    collection: "AppointmentHistory",
  },
);

const AppHistoryDB = mongoose.model("AppointmentHistory", AppointmentHistory);
module.exports = AppHistoryDB;