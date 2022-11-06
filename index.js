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

  

  //DIRTY CODE

  
//index.js code for integrating Google Calendar
  
const { google } = require('googleapis');
  
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDlyjScX4Hhy6Ev\nYp2JaFzspJ1ixfQp9Cil3cHC4uFxQdKNdKnokL+mHc2RfUCg/lRZZg+ol7SRyA4R\neD0XEuZjOfSOjJIYOS+6AHIOXg0rDK2tNi+CZJPxK5H9IKwRdG8wMCH0Hp8K0qCk\ntRilKr+0aWpJ1bhDIQoPt3NkzNvLX+YibWWm+HFYJlA9V6Ys6KbhTJmtXfipGj1l\nCuG/x7KQldFOSEl4cQFhg83K43JHt/AUFohrd13Xdc4hRKhnQo7i7sbrFW4OdNEt\nfpJ2yvka3qdRRY1cC0okXIOeLKhECn/pw2phywWC2aiH5KF3UOIPO0lSf/1jbY0l\n2msVg+LLAgMBAAECggEAFxDhkBLMNFCe6OVCwADAVya8/6W0OSPfkqq8YOYqUBaV\n3oon5gblnfSe5mxGuQJekCy9BKTZxMpqkxlZNIA6rRorsMVugsz2u/qAeG27b6dR\npbHrOfEDorFHcbu+WfAwmwsx1VHfkBQNeQsOosG0RZVRTIEOAnsGCgbVp/giVfsl\nIaWBtHcTW7zWNRoM1TTzU9dWfIEtlt3Rrb2pNCS0mDztTuGRFzynufKpGr+DzkuQ\noft9o6eSAgUulqcATHBnB4HCveBKp960ZcdSLh14eJdvbBMgP8FMDxnPNPgh2bSB\nYF3B2Bsuwq/epzr5CDuX6kYoH/yxYBXfz8IIcV9lUQKBgQD8EKY+7lyMjPMK6/ZQ\nSKozvbPWsjdbbucHXDGw3I4te+aJlBswpi6meeXR+bX/YPayBNXyaYt46nqFeMvh\n5oVNtUBh5qgE8IoIxK5Qbv789TCQwxc99N1ve8BqoOLph9Xrzpl6BomnzNeoZKW1\nuOs641jrPrPiFZSKbyXywGYLWwKBgQDpYIkqfzfozyl3Z0d1trjkszloc8ejqn3n\n7jeyhRf8UUYhijz5qIh7EE6JkTd3nhE7+c42CdAfUEjMLTTGIrG3t0qljUn1R/hG\nnDsPj4Z16KBouSkGTndt9Fy7i2Qi3m+5wtKHRdTvgn/MYJb+dCSe8jW+/RkB4cqd\nvpdapO/RUQKBgDL8CyRfgkjLmb1zzPagPA0LKf0bPyc3X3OVqldjxT5d+VuKoZVN\nh9IUhe/a2n01V7DaWYwW3ScwBmhI7rRatEvrhYJH7WRSYxky7y9FxD3WOmSNkX3u\nsXuDRIBM2pjx6Msxlsmf2Ogf/t8IvJvtM2dN5QZwQGJSiyEVKk/XqsxRAoGBAJ1d\nMcCNHgcGwYA5DO9r8UqNK1WqVGCg0ts0PyxKIH1L1E1DaJAzuyu4OCz81Xj8BcT6\nUbkQbtzehufeR6qetFUb6+Kr3cXd7KS4Lf71GYaiAJ/80pPlDxT+ZBU2DaSRdqa8\nnrcGOGn0Bfaq3sXfTN48lk8dXOJu/O/XFznQ48CxAoGBAN3pxlktOWRQVRpcfyo+\nW29O5e1aOpKIRxR25FyJXqT9wB1qPXaksemOXXKuCYbUW7VZvQn5ShtY7QT3iDpK\nxYxoI7aVRtgff5LuQtLpRQq+dXOBu+teOAxgc9ZHqwq3Jb34jiTqN0ZNTm9gAfB7\n+irnpjha4omsZjreefevylu2\n-----END PRIVATE KEY-----\n  "
const GOOGLE_CLIENT_EMAIL = "calendar-key@contactsmap-316116.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "728529730940"
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
    'attendees': [ 
      // {'email': '2195929@slu.edu.ph'},
      // {'email': 'balcitalloyd@gmail.com'},
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
  