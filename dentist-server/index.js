//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(express.json()); //prints body request
app.use(cors());

const JWT_SECRET = "sdaikdhjiIHDiu8987J(@?!dDSF8645DAsadA[]ds54aASD()21asd1SFP";
const mongooseURL =
  "mongodb+srv://client:client123@cluster0.lfrgaha.mongodb.net/?retryWrites=true&w=majority";

//server
app.listen(5000, () => {
  console.log("Server started successfully.");
});

//connect with DB
mongoose
  .connect(mongooseURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((e) => console.log(e));

require("./models/userDetails");
require("./models/appointmentDetails");
// const User = mongoose.model("userRegister"); //encodes model
const User = mongoose.model("UserInfo");
const AppDetails = mongoose.model("AppointmentDetails");

//sign up
app.post("/register", async (req, res) => {
  const {
    fname,
    lname,
    suffix,
    email,
    password,
    gender,
    mobile,
    bday,
    house,
    brgy,
    municipality,
    province,
    country,
    allergies,
    conditions,
  } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User already exists!" });
    }
    await User.create({
      fname,
      lname,
      suffix,
      email,
      password: encryptedPassword,
      gender,
      mobile,
      bday,
      house,
      brgy,
      municipality,
      province,
      country,
      allergies,
      conditions,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "sign up error" });
  }
});

//sign in
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User not found!" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ status: "error" });
    }
  }
  res.json({ status: "error", error: "invalid password" });
});

//read user data
app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    alert("There is some error");
  }
});

//update function

app.put("/update", async (req, res) => {
  const {newDocument} = req.body; // still not used, just incase frontend needs update functions
  const { token } = req.body;
  const id = req.body.id;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    await User.findById(id, (err,updatedDocument)=>{
      updatedDocument.insertValuehere = newDocument;
      updatedDocument.save();
      res.send("update");
    });
  } catch (err) {
    alert("There is some error");
    console.log(err)
  }
});

//delete function
app.get("/delete/:id", async (req, res) => {
  
  const id = req.params.id; 
  
  try{
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    await User.findByIdAndRemove(id).exec(); // still not used, just incase frontend needs delete functions
    res.send("Document is deleted from the database");
  }catch(err){
    alert("There is some error");
    console.log(err)
  }
});

//create appointment (patient)

app.post("/createAppointment", async (req,res) => {
  const { name, appt, datetime,status,action } = req.body;
  try{
  await AppDetails.create({
    name, appt, datetime,status,action
  });
  res.send({ status: "ok" });
} catch (error) {
  res.send({ status: "Cannot create appointment" });
}
});

//get ALL appointment details

app.get("/getAppointmentDetails", async(req,res) => {
    
  AppDetails.find({})
      .then((data) => {
        console.log('Data:', data);
        res.json(data);
      })
      .catch((error) => {
       console.log('error: ', error)
      });

})
