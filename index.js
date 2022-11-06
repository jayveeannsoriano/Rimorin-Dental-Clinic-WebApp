//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(express.json()); //prints body request
app.use(cors());
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3001;
const mongoUrl = process.env.MONGOOSE_URL || "mongodb+srv://client:client123@cluster0.lfrgaha.mongodb.net/?retryWrites=true&w=majority";

const path = require("path");
const { deepEqual } = require("assert");

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
// Handle React routing, return all requests to React app


//server
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

//connect with DB
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((e) => console.log(e));

require("./models/appointmentDetails");
require("./models/userDetails");
require("./models/prescriptionDetails");
const User = mongoose.model("UserInfo");
const AppDetails = mongoose.model("AppointmentDetails");
const PresDetails = mongoose.model("PrescriptionDetails");


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
      return res.json({ status: "ok", data: token, user:user});
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
    //delete user.password;
    
    const useremail = user.email;
    User.findOne({ email: useremail });
      then((data) => {
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
app.delete("/delete/:id", async (req, res) => {
  
  const id = req.params.id; 
  
  try{
    const user = jwt.verify(token, JWT_SECRET);

    await User.findByIdAndRemove(id).exec(); // still not used, just incase frontend needs delete functions
    res.send("Document is deleted from the database");
  }catch(err){
    alert("There is some error");
    console.log(err)
  }
});

//CRUD FOR BOOKING APPOINTMENT

//book an appointment
app.post("/insertAppointment", async(req,res) => {


  //User Info value
  const userNameApp = req.body.userNameApp;
  console.log(userNameApp)

  //Docotor name
  const docName = "Pamela Rimorin Concepcion";

  //Appointment Number

  const randomnum = Math.floor(Math.random() * 1000);
  const appNumber = "#APT"+randomnum;
  console.log(appNumber)
  
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

  //appt status default when creating an appointment
  const insertAppStatus = "Pending";
  console.log(insertAppStatus);

  //inserting all data
  const AppData = new AppDetails({pName: userNameApp,dName: docName ,appNum: appNumber,date: slicedDate, consultation: consulInput, time:getTime, appStatus:insertAppStatus});

  try{
    await AppData.save();
    console.log("Successfully inserted ", AppData, " to the database.")
  } catch(err){
    console.log(err);
  }
});

app.get("/getAppointmentDetails", async(req,res) => {
    
  await AppDetails.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
       console.log('error: ', error)
      });
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
    conditions:conditions.toString(),
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
    res.send({ status: "sign up error" + error });
  }
});

app.get("/getTotalPatients", async(req,res) => {
    
  await User.countDocuments({user_role_id:'1'})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
       console.log('error: ', error)
      });
    });

app.get("/getUserAppts", async(req,res) => {
  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  await AppDetails.find({pName:query.pName})
      .then((data) => {
        var allEvents = [];
      
        for (var key in data) {
          console.log(data[key].appStatus);
          let color = "";
          if(data[key].appStatus==="Pending"){
            color = "#FFC107"
          }else if(data[key].appStatus==="Accepted"){
            color = "#0DCAF0"
          }else if(data[key].appStatus==="Finished"){
            color = "#198754"
          }else if(data[key].appStatus==="No Show"){
            color = "#A9A9A9"
          }else{
            color = "#DC3545"
          }
          tempArr = {
            title: data[key].dName + " at " +  data[key].time,
            start: data[key].date,
            color: color
          }
          allEvents.push(tempArr);
        }
        res.json(allEvents  );
      })
      .catch((error) => {
        console.log('error: ', error)
      });
    });

app.get("/getTotalAppts", async(req,res) => {

  await AppDetails.countDocuments({})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log('error: ', error)
      });
    });

app.get("/getTotalPendingAppts", async(req,res) => {

  await AppDetails.countDocuments({"appStatus":"Pending"})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log('error: ', error)
      });
    });






//updateDataTable

app.put("/updateDateTime", async (req, res) => {

  const appNumber = req.body.appNum;
  const updateDate = req.body.newDate;
  const updateSlicedDate = updateDate.slice(0,10)//removes unnecessary data
  console.log(updateDate)
  console.log(updateSlicedDate)
  const updateTime = req.body.newTime;
  const updateConsult = req.body.newConsultation;
  console.log(appNumber + " " + updateSlicedDate + " " + updateTime + " " + updateConsult);

  await AppDetails.findOneAndUpdate({appNum: appNumber}, {date: updateSlicedDate, time: updateTime, consultation: updateConsult})
  console.log("Appointment Details Updated!");
});

//deleteDataTable

app.put("/deleteAppointment", async (req,res) => {

  const appNumber = req.body.appNum;
  await AppDetails.findOneAndDelete({appNum: appNumber})
    console.log("Appointment Successfully Deleted!.");
  
})

//update status

app.put("/updateStatus", async (req,res) => {

  const appNumber = req.body.appNum;
  const newStatus = req.body.newAppStatus;

  await AppDetails.findOneAndUpdate({appNum: appNumber}, {appStatus: newStatus});
  console.log("Appointment Status Successfully Updated!.");
})

const sgMail = require('@sendgrid/mail')


  app.get("/sendApptEmail", function (req, res) {
    sgMail.setApiKey('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');
    const msg = {
      "personalizations":[
        {
           "to":[
              {
                 "email":"2195929@slu.edu.ph"
              }
           ],
           "dynamic_template_data":{
              "firstName":"Juan Loyd",
              "Appttime":"2022-2-23",
              "consultation":"my teeth hurt aughhhhhh"
            }
        }
     ],
     "template_id":"d-9a171e9b1d6f41b3b323bda330392e96",
      from: 'balcitalloyd@gmail.com', // Change to your verified sender
    }
    sgMail
      .send(msg)
      .then(() => {
        res.json('Email Sent')
      })
      .catch((error) => {
        res.json('Error: Email Not Sent')
      })
  });

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", 'index.html' ));
  });