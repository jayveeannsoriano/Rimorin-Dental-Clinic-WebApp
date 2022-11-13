const mongoose = require("mongoose");
const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    minitial: String,
    lname: String,
    suffix: String,
    email: String,
    password: { type: String, unique: true },
    gender: String,
    mobile: Number,
    bday: String,
    house: String,
    brgy: String,
    municipality: String,
    province: String,
    country: String,
    medications: String,
    allergies: String,
    conditions: String,
    user_role_id: Number,
    patientIDnumber: String,
    dentalRecords: {type: mongoose.Types.ObjectId, ref: "UserDentalRecords"}
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);

