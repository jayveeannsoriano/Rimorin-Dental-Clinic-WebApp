const mongoose = require("mongoose");
const ArchiveDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    minitial: String,
    lname: String,
    mname:String,
    suffix: String,
    email: String,
    password: { type: String, unique: true },
    age: String,
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
    accountType: String,
    patientIDnumber: String,
    dentistIDnumber: String,
    secretaryIDnumber: String,
    adminIDnumber: String,
    //new records
    profession: String,
    tellphone: String,
    blood: String,
    zipcode: String,
    precautions: String,
  },
  {
    collection: "UserArchive",
  }
);

mongoose.model("UserArchive", ArchiveDetailsScehma);

