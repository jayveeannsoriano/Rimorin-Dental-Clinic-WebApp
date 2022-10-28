const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema
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
  },
  {
    // collection: "UserRegister",
    collection: "UserInfo",
  }
);

// mongoose.model("userRegister", userSchema);
mongoose.model("UserInfo", UserDetailsScehma);
