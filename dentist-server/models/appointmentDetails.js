const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema
const AppointmentDetails = new mongoose.Schema(
  {
    fullName: String,
    apptNumber: Number,
    dateTime: String,
    status: String,
    action: String,
  },
  {
    // collection: "UserRegister",
    collection: "AppointmentDetails",
  }
);

// mongoose.model("userRegister", userSchema);
mongoose.model("AppointmentDetails", AppointmentDetails);
