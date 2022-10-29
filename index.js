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
const PORT = process.env.PORT || 3001;

const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});


//server
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

//connect with DB
mongoose
  .connect('mongodb+srv://client:client123@cluster0.lfrgaha.mongodb.net/?retryWrites=true&w=majority', {
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

// app.get("/login-user", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

//read user data
app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    //delete user.password;
    console.log(user);
    
    const useremail = user.email;
    User.findOne({ email: useremail });
      then((data) => {
        res.send({ status: "ok", data: data });
        //window.localStorage.setItem('user-info',user);
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

//get appointment details
app.get("/getAppointmentDetails", async(req,res) => {
    
  AppDetails.find({})
      .then((data) => {
        console.log('Data:', data);
        res.json(data);
      })
      .catch((error) => {
       console.log('error: ', error)
      });
    });

//add AppDetails

// app.post("/addAppDetails", async(req, res) => {

//   const newAppDetails = new AppDetails(req.body);

//   try{
//       await newAppDetails.save();
//       res.send(newAppDetails);
//   }
//   catch(err){
//       console.log(err);
//       res.status(500).send(error);
//   }
// });

//CRUD FOR BOOKING APPOINTMENT

//book an appointment
app.post("/insertAppointment", async(req,res) => {
  
  //date value
  const startDate = req.body.startDate;
  const slicedDate = startDate.slice(0,10)//removes unnecessary data
  console.log(slicedDate)

  //consul value
  const consulInput = req.body.consulInput;
  console.log(consulInput)

  //time value
  const getTime = req.body.getTime;
  console.log(getTime);

  //insterting all data
  const AppData = new AppDetails({date: slicedDate, consultation: consulInput, time:getTime});

  try{
    await AppData.save();
    console.log("Successfully inserted ", AppData, " to the database.")
  } catch(err){
    console.log(err);
  }
});

//sign up
app.post("/RegisterUser", async (req, res) => {
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
    medications,
    allergies,
    conditions,
  } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);

  const UserData = new User({
    fname:fname,
    suffix:suffix, 
    lname:lname,
    email:email,
    password:encryptedPassword,
    gender:gender,
    mobile:mobile,
    bday:bday,
    house:house,
    brgy:brgy,
    municipality:municipality,
    province:province,
    country:country,
    medications:medications,
    allergies:allergies,
    conditions:conditions
  });
  console.log("Sign up Details for User Data: ", UserData);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User already exists!" });
    }
    await UserData.save();
    console.log("Successfully inserted ", UserData, " to the database.");
    res.send({ status: "ok" });

  } catch (error) {
    res.send({ status: "sign up error" });
  }
});






