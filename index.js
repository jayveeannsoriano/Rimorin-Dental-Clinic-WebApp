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
const mongoUrl = process.env.MONGO_URL || "mongodb+srv://client:client123@cluster0.lfrgaha.mongodb.net/?retryWrites=true&w=majority";

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
require("./models/appointmentRequest")
const User = mongoose.model("UserInfo");
const AppDetails = mongoose.model("AppointmentDetails");
const PresDetails = mongoose.model("PrescriptionDetails");
const AppRequest = mongoose.model("AppointmentRequest");


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


//CRUD FOR BOOKING APPOINTMENT & DASHBOARD //-------------------------------------------------------------------------------------------------------------------------

//book an appointment
app.post("/insertAppointment", async(req,res) => {


  //User Info value
  const userNameApp = req.body.userNameApp;
  console.log(userNameApp)

  //Doctor name
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
  const AppData = new AppRequest({pName: userNameApp,dName: docName ,appNum: appNumber,date: slicedDate, consultation: consulInput, time:getTime, appStatus:insertAppStatus});

  try{
    await AppData.save();
    console.log("Successfully inserted ", AppData, " to the database.")
  } catch(err){
    console.log(err);
  }
});

//Get user for Appointment Request
app.get("/getAppointmentDetails", async(req,res) => {
    
  await AppRequest.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
       console.log('error: ', error)
      });
    });
    
//Get user for Appointment Details
app.get("/getAppointmentDetail", async(req,res) => {
    
      await AppDetails.find({})
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
           console.log('error: ', error)
          });
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

//delete Appointment

app.put("/deleteAppointment", async (req,res) => {

  const appNumber = req.body.appNum;
  await AppRequest.findOneAndDelete({appNum: appNumber})
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
      from: 'rimorin.secretary@gmail.com', // Change to your verified sender
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


  //Accept Appointment
  app.post("/acceptAppointment", async(req,res) => {


    //User Info value
    const userNameApp = req.body.userNameApp;
    console.log(userNameApp)
  
    //Docotor name
    const docName = req.body.dentistValue;
    console.log(docName);
  
    //Appointment Number
  
    const appNumber = req.body.appNumber;
    console.log(appNumber)
    
    //date value
    const dateValue = req.body.dateValue;
    console.log(dateValue)
  
    //consul value
    const consulInput = req.body.consulInput;
    console.log(consulInput)
  
    //time value
    const getTime = req.body.getTime;
    console.log(getTime);
  
    //appt status default when appointment is accepted by the dentist
    const insertAppStatus = "Accepted";
    console.log(insertAppStatus);
  
    //inserting all data
    const AppData = new AppDetails({pName: userNameApp,dName: docName ,appNum: appNumber,date: dateValue, consultation: consulInput, time:getTime, appStatus:insertAppStatus});
  
    try{
      await AppData.save();
      console.log("Successfully inserted ", AppData, " to the database.")
      await AppRequest.findOneAndDelete({appNum: appNumber})
    } catch(err){
      console.log(err);
    }
  });

//-----------end of CRUD--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
//index.js code for integrating Google Calendar
  
const { google } = require('googleapis');
  
const SCOPES = 'https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/calendar.events,https://www.googleapis.com/auth/admin.directory.resource.calendar';
const GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0QBw/1OPaexNw\na49s8SeguA7yORAI7PDMj096/iaB+J3uDMwfq8cAlLJvKSRC7lxegRW9tnLebFQe\nOdF4GFfIPwdexIVZWfGXkMfB4KDFDfFySWJnXi91IhkoXY7AeqRKWJ6Dnb3nZZZ4\nMMkx1Yqn3DYoPEoqNd3l6CHTHMmrWV4euKEvw/2E7OIuL2wc+q1xfHPPeL+ub9m0\nrfIFgTyRexr4qj0yFzPlO8aipMP1l5ReWYgsps4A0D56fzyzcNnP0IaU+h3UUB41\nHFa5sSXPhPSPpN/OouNfXa/hcjQwT7kopmmlyreWm/9McYgC2g6PVZhhQ7C9YoM2\nhWGNoHsTAgMBAAECggEADkD1muycWhYaeuzeiihl0FVNxUTS6knGXv7EM78uT1/Y\nKU90wtpkIb0ggR7ZQbu0rTp6/CYV3lXlrwA2es89/dVSIWHcA61Tp/8odMHtJLgO\nDFIWSINPsG0SXTlMxRbNsB1i55iNQGOtqvJ8roaq8Mw+sh7WZJEe64PYTOf9YKHN\n4Bs+50zmxye+1IwoCLhHQNThTbTuxfClrr1t+UX8UyoF89pch9WdDqAnXIKNG5m2\n0GCaovzhA+AaJFTEguw0Id7GKc67p9jkYGDLUjdk9x/YXzXQAiaEyQ1ROodxfLCF\nu977NKAADfgmSLSIPIlV5dKAL3ILWTXiEyT8tGU6qQKBgQDuwTWb9yxTZ5Dz1eLi\nmHO4WSjAXEaE6NIFqz1zz0Uys8/jHV9v+3VYsVLY/ewG0vzkMOfAbhXBsgXcelUe\ne3f8oPF8V2LHpHt8j9B/4HtsEQJUUKiltDL/bsYqWQwcuyyxYE4eGjdru/CJ1Vb/\nmocF/SByXHZuOjfuOvTHC0vumwKBgQDBRRqLlCJ9reTC72ezldmf54pzbVsOpFoA\nB83EykeEu8o71tS5S/byreKn0AwQ1LbGTYgoChGz0z4rJggkA22DJ0TL0szJOn98\nEN/fS3qswHiGQq5RLGqPBdorRHHY6hVzM5/kbHhEa+MK7E6f92yGjOcG2hY0ZZ2Q\naX6uDSnw6QKBgE4+17jjio1S9bhTsmWcnOAfqDFSjHHmc14UPrGDjiQNteWyrKJg\ngJauln4yyXV7FBIczPbNnSe7lhwpo1e4ExyiCkI7yU2wZB/wad5ezVQfRuom/P5B\nTi1UOnGKeWO5G+6Np0xKPzt5fl1No5NlKzcVO9r+3nlFbysN+0Z4N0xdAoGBAIGe\nR+ROkCc75c165FDD8jVVAzzQnZ4fSaD1muIdS4PQshwZw4cWVGODjRxA4qazEnXC\nb8tynVa+GNa1ZgZJKjworPIJyYA3tGJPquVF6NtNJkfdFq2oHTsYkK4t9DCnJYWi\nnNyEhtBUjuu3ei+8r9M5UoP85aF0eQzuQ6CVgYhpAoGBAJZ2IAZlX8Mm4jmpzOOK\nBZe52fzCoUbKxMFtlipKP8u8Bd/XBD4mz4CkHugy622IZwvv0der3yzPjONtD7Ze\nA6D/S89QLrynBCqzCE1PYSivevEz9ueKuq5biFXvXjNKF40bOwBRiqgEiHyDndhy\nXfYHAnkzU5VeRTVoXzJ5LDTZ\n-----END PRIVATE KEY-----\n"
const GOOGLE_CLIENT_EMAIL = "rimorin-dental-clinic@rimorin-dental-clinic.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "508911265286 "
const GOOGLE_CALENDAR_ID = "3b200857954250604a3c1200af53229fb9de863bc824b0acd5576548aa41e291@group.calendar.google.com"
  
const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);
  
const calendar = google.calendar({
  version: 'v3',
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient
});
  
app.get('/checkAppt', (req, res) => {
  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify({ events: result.data.items }));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  });
});


  
app.get("/createEvent",(req,res)=>{
  // var event = {
  //   'summary': 'Rimorin Dental Appointment',
  //   'location': 'Victoria Shoppesville, Baguio, 2600 Benguet',
  //   'description': 'Appointment with Dr. Pam',
  //   'start': {
  //     'dateTime': '2022-11-12T09:00:00-07:00',
  //     'timeZone': 'Asia/Dhaka',
  //   },
  //   'end': {
  //     'dateTime': '2022-11-12T17:00:00-07:00',
  //     'timeZone': 'Asia/Dhaka',
  //   },
  //   'attendees': [ 
  //       {'email': '2195929@slu.edu.ph'},
  //       {'email': 'balcitalloyd@gmail.com'},
  //   ],
  //   'reminders': {
  //     'useDefault': false,
  //     'overrides': [
  //       {'method': 'email', 'minutes': 24 * 60},
  //       {'method': 'popup', 'minutes': 10},
  //     ],
  //   },  
  // };

  var event = {
    'summary': 'Rimorin Dental Appointment',
    'location': 'Victoria Shoppesville, Baguio, 2600 Benguet',
    'description': 'Appointment with Dr. Pam',
    'start': {
      'dateTime': '2022-11-12T09:00:00-07:00',
      'timeZone': 'Asia/Dhaka',
    },
    'end': {
      'dateTime': '2022-11-12T17:00:00-07:00',
      'timeZone': 'Asia/Dhaka',
    },
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
      {'email': 'balcitalloyd@gmail.com'},
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
      ],
    },
  };
    
  const auth = new google.auth.GoogleAuth({
    keyFile: "CalendarData.json",
    scopes: 'https://www.googleapis.com/auth/calendar',
  });
  auth.getClient().then(a=>{
    calendar.events.insert({
      auth:a,
      calendarId: GOOGLE_CALENDAR_ID,
      resource: event,
    }, function(err, event) {
      if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        return;
      }
      console.log('Event created: %s', event.data);
      res.jsonp("Event successfully created!");
    });
  })
})

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", 'index.html' ));
});
  
