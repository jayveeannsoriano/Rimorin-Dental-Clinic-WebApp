const mongoose = require("mongoose");
const AppointmentDetails = new mongoose.Schema(
  {
    pName: {
      type: String,
    required: true,
  },
    apptNumber: Number,
    dateTime: String,
    status: String,
    action: String,
  },
  {
    collection: "AppointmentDetails",
  }
);

const AppDetailsDB = mongoose.model("AppointmentDetails", AppointmentDetails);
module.exports = AppDetailsDB;