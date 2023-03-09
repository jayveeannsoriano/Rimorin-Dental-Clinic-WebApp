//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
app.use(express.json()); //prints body request
app.use(cors());
app.use("/uploads", express.static("uploads"));

require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3001;
const mongoUrl =
  process.env.MONGO_URL ||
  "mongodb+srv://client:client123@cluster0.lfrgaha.mongodb.net/?retryWrites=true&w=majority";

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
require("./models/appointmentRequest");
require("./models/receiptDetails");
require("./models/dentalRecords");
require("./models/appointmentHistory");
require("./models/availableTime");
require("./models/archiveAccount");

const User = mongoose.model("UserInfo");
const AppDetails = mongoose.model("AppointmentDetails");
const PresDetails = mongoose.model("PrescriptionDetails");
const AppRequest = mongoose.model("AppointmentRequest");
const ReceiptDetails = mongoose.model("ReceiptDetails");
const DentalRecords = mongoose.model("UserDentalRecords");
const AppHistory = mongoose.model("AppointmentHistory");
const AvailableTime = mongoose.model("AvailableTime");
const UserArchive = mongoose.model("UserArchive");

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
      return res.json({ status: "ok", data: token, user: user });
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
    mname,
    suffix,
    email,
    password,
    gender,
    mobile,
    tellphone,
    profession,
    blood,
    zipcode,
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

  const userRole = 1;
  //UUID GENERATION
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  function generateString() {
    let numberLength = 3;
    let letterLength = 2;
    let numbersResult = "";
    let lettersResult = "";
    const lettersLength = letters.length;
    const numbersLength = numbers.length;
    for (let i = 0; i < numberLength; i++) {
      numbersResult += numbers.charAt(
        Math.floor(Math.random() * numbersLength)
      );
    }
    for (let i = 0; i < letterLength; i++) {
      lettersResult += letters.charAt(
        Math.floor(Math.random() * lettersLength)
      );
    }
    return numbersResult + lettersResult;
  }
  const patientIDNumber = "PT#" + generateString();
  //
  //BDAY TO AGE CONVERTER
  const bdayInput = req.body.bday;
  let AgeOut = () => {
    return Math.floor(
      (Date.now() - new Date(bdayInput).getTime()) / 31557600000
    );
  };
  //
  //
  //BCRYPT PASSWORD
  const encryptedPassword = await bcrypt.hash(password, 10);
  //

  const UserData = new User({
    patientIDnumber: patientIDNumber,
    fname: fname,
    mname: mname,
    suffix: suffix,
    lname: lname,
    email: email,
    password: encryptedPassword,
    gender: gender,
    mobile: mobile,
    bday: bday,
    age: AgeOut(),
    tellphone: tellphone,
    profession: profession,
    blood: blood,
    zipcode: zipcode,
    house: house,
    brgy: brgy,
    municipality: municipality,
    province: province,
    country: country,
    medications: medications,
    allergies: allergies,
    conditions: conditions.toString(),
    user_role_id: userRole,
    accountType: "Patient",
  });
  console.log("Sign up Details for User Data: ", UserData);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User already exists!" });
    } else {
      await UserData.save();
      console.log("Successfully inserted ", UserData, " to the database.");
      res.send({ status: "ok" });
    }
  } catch (error) {
    res.send({ status: "sign up error" + error });
  }
});

app.get("/checkEmail", async (req, res) => {
  let email = req.query.email;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      res.send({ status: "User already exists." });
    } else {
      res.send({ status: "ok" });
    }
  } catch (error) {
    res.send({ status: "sign up error" + error });
  }
});

app.put("/changePassword", async (req, res) => {
  const userEmail = req.body.userEmail;
  const newPassword = req.body.newPass;
  const encryptedPassword = await bcrypt.hash(newPassword, 10);

  await User.findOneAndUpdate(
    { email: userEmail },
    { password: encryptedPassword }
  );
});

//read user data
app.get("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    //delete user.password;

    const useremail = user.email;
    User.findOne({ email: useremail });
    then((data) => {
      res.send({ status: "ok", data: data });
    }).catch((error) => {
      res.send({ status: "error", data: error });
    });
  } catch (error) {
    alert("There is some error");
  }
});

//CRUD FOR BOOKING APPOINTMENT & DASHBOARD //-------------------------------------------------------------------------------------------------------------------------

//book an appointment
const sgMail = require("@sendgrid/mail");
app.post("/insertAppointment", async (req, res) => {
  //Patient Id Number
  const patientIDnumber = req.body.patientIDnumber;
  console.log(patientIDnumber);

  //User Info value
  const userNameApp = req.body.userNameApp;
  console.log(userNameApp);

  //Doctor name
  const docName = req.body.docName;
  const docIDnum = req.body.docIDnum;
  console.log(docIDnum);

  //Appointment Number

  const event = new Date();
  const firstNumber = event.toISOString().substring(20, 23);
  const appNumberUUID = "#APT" + firstNumber;

  //date value
  const startDate = req.body.startDate;
  const slidedDate = startDate.substring(0, 15);

  //time value
  const getTime = req.body.getTime;
  console.log(getTime);

  const formattedDate = req.body.formattedDate;
  console.log(formattedDate);

  const proceduresData = req.body.procedures;

  //appt status default when creating an appointment
  const insertAppStatus = "Pending";
  console.log(insertAppStatus);

  //inserting all data
  const AppData = new AppRequest({
    patientIDnumber: patientIDnumber,
    pName: userNameApp,
    dentistIDnumber: docIDnum,
    dName: docName,
    appNum: appNumberUUID,
    date: slidedDate,
    procedures: proceduresData,
    time: getTime,
    formattedDate: formattedDate,
    appStatus: insertAppStatus,
  });

  const AppDets = new AppDetails({
    patientIDnumber: patientIDnumber,
    pName: userNameApp,
    dentistIDnumber: docIDnum,
    dName: docName,
    appNum: appNumberUUID,
    date: slidedDate,
    procedures: proceduresData,
    time: getTime,
    formattedDate: formattedDate,
    appStatus: insertAppStatus,
  });

  try {
    await AppData.save();
    await AppDets.save();
    console.log("Successfully inserted ", AppData, " to the database.");
    console.log("Successfully inserted ", AppDets, " to the database.");
    if (insertAppStatus == "Pending") {
      //Sending Email
      sgMail.setApiKey(
        "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"
      );
      let msg1 = {
        personalizations: [
          {
            to: [
              {
                email: req.body.recep,
              },
            ],
            dynamic_template_data: {
              firstName: userNameApp,
              Appttime: slidedDate + " " + getTime,
              consultation: consulInput,
            },
          },
        ],
        template_id: "d-9a171e9b1d6f41b3b323bda330392e96",
        from: "rimorin.secretary@gmail.com", // Change to your verified sender
      };
      sgMail
        .send(msg1)
        .then(() => {
          res.json("Email Sent");
        })
        .catch((error) => {
          console.log();
          res.json("Error: Email Not Sent" + error);
        });
    }
  } catch (err) {
    console.log(err);
  }
});

// app.post("/insertAppointmentasPending", async (req, res) => {
//   //Patient Id Number
//   const patientIDnumber = req.body.patientIDnumber;
//   console.log(patientIDnumber);

//   //User Info value
//   const userNameApp = req.body.userNameApp;
//   console.log(userNameApp);

//   //Doctor name
//   const docName = "Pamela Rimorin Concepcion";

//   //Appointment Number

//   const event = new Date();
//   const firstNumber = event.toISOString().substring(20, 23);
//   const appNumberUUID = "#APT" + firstNumber;

//   //date value
//   const startDate = req.body.startDate;
//   const slidedDate = startDate.substring(0, 15);

//   //consul value
//   const consulInput = req.body.consulInput;
//   console.log(consulInput);

//   //time value
//   const getTime = req.body.getTime;
//   console.log(getTime);

//   const formattedDate = req.body.formattedDate;
//   console.log(formattedDate);

//   //appt status default when creating an appointment
//   const insertAppStatus = "Pending";
//   console.log(insertAppStatus);

//   //inserting all data
//   const AppData = new AppDetails({
//     patientIDnumber: patientIDnumber,
//     pName: userNameApp,
//     dName: docName,
//     appNum: appNumberUUID,
//     date: slidedDate,
//     consultation: consulInput,
//     time: getTime,
//     formattedDate: formattedDate,
//     appStatus: insertAppStatus,
//   });

//   try {
//     await AppData.save();
//     console.log("Successfully inserted ", AppData, " to the database.");
//   } catch (err) {
//     console.log(err);
//   }
// });

app.post("/insertFollowUpAppointment", async (req, res) => {
  //Patient Id Number
  const patientIDnumber = req.body.patientIDnumber;
  console.log(patientIDnumber);

  const dentistIDnumber = req.body.docID;
  //User Info value
  const userNameApp = req.body.userNameApp;
  console.log(userNameApp);

  //Doctor name
  const docName = req.body.docName;

  //Appointment Number

  const event = new Date();
  const firstNumber = event.toISOString().substring(20, 23);
  const appNumberUUID = "#APT" + firstNumber;

  //date value
  const startDate = req.body.startDate;
  const slidedDate = startDate.substring(0, 15);

  //time value
  const getTime = req.body.getTime;
  console.log(getTime);

  const proceduresData = req.body.procedures;

  const formattedDate = req.body.formattedDate;
  console.log(formattedDate);

  //appt status default when creating an appointment
  const insertAppStatus = "Follow-Up";
  console.log(insertAppStatus);

  //inserting all data
  const AppData = new AppDetails({
    dentistIDnumber: dentistIDnumber,
    patientIDnumber: patientIDnumber,
    pName: userNameApp,
    dName: docName,
    appNum: appNumberUUID,
    date: slidedDate,
    procedures: proceduresData,
    time: getTime,
    formattedDate: formattedDate,
    appStatus: insertAppStatus,
  });

  try {
    await AppData.save();
    console.log("Successfully inserted ", AppData, " to the database.");
    if (insertAppStatus == "Accepted") {
      //Sending Email
      sgMail.setApiKey(
        "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"
      );
      let msg2 = {
        personalizations: [
          {
            to: [
              {
                email: req.body.recep,
              },
            ],
            dynamic_template_data: {
              firstName: userNameApp,
              Appttime: slidedDate + " " + getTime,
              consultation: consulInput,
            },
          },
        ],
        template_id: "d-9a171e9b1d6f41b3b323bda330392e96",
        from: "rimorin.secretary@gmail.com", // Change to your verified sender
      };
      sgMail
        .send(msg2)
        .then(() => {
          res.json("Email Sent");
        })
        .catch((error) => {
          res.json("Error: Email Not Sent");
        });
    }
  } catch (err) {
    console.log(err);
  }
});

app.put("/updateClinicHours", async (req, res) => {
  await AvailableTime.findOneAndUpdate({}, { config: req.body.clinicHours });
  console.log(req.body.clinicHours);
  console.log("Clinic Hours Updated!");
});

//Get user for Appointment Request
app.get("/getAppointmentDetails", async (req, res) => {
  await AppRequest.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getAppointmentDetailsForDentist", async (req, res) => {
  const DentistIDnumber = req.query.dentistIDNumber;
  await AppRequest.find({ dentistIDnumber: DentistIDnumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//Get user for Appointment Details
app.get("/get", async (req, res) => {
  await AppDetails.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//Get user for UserDetails
app.get("/getUserDetails", async (req, res) => {
  await User.find({ user_role_id: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getAvailableTimes", async (req, res) => {
  await AvailableTime.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getTimeConfig", async (req, res) => {
  await AvailableTime.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUserInfo", async (req, res) => {
  const patientIDNumber = req.query.PatientIDnumber;

  await User.find({ patientIDnumber: "PT#" + patientIDNumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getCurrentUserInfo", async (req, res) => {
  const ObjectID = req.query.ObjectID;

  await User.find({ _id: ObjectID })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUserInfoFollowUp", async (req, res) => {
  const patientIDNumber = req.query.patientIDNum;
  console.log(patientIDNumber);

  await User.find({ patientIDnumber: patientIDNumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getProfileWidget", async (req, res) => {
  const patientID = req.query.patientIDnumber;

  await User.find({ patientIDnumber: patientID })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getPatientInfo", async (req, res) => {
  const patientIDNumber = "PT#" + req.query.patientIDnumber;
  console.log(patientIDNumber);

  await User.find({ patientIDnumber: patientIDNumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getDentistInfo", async (req, res) => {
  await User.find({ user_role_id: 3 })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getDentistInfoID", async (req, res) => {
  const ObjectID = req.query.ObjectID;

  await User.find({ dentistIDnumber: ObjectID })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getDentistIDdetails", async (req, res) => {
  const ObjectID = req.query.ObjectID;

  await User.find({ dentistIDnumber: ObjectID })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//
app.get("/getUserAppointmentDetails", async (req, res) => {
  await AppDetails.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUserAppointmentDetailsforDuplicate", async (req, res) => {
  const userID = req.query.patientIDnum;

  await AppDetails.find({ patientIDnumber: userID })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//filtered TODAY
app.get("/getTodayUserAppointmentDetails", async (req, res) => {
  const patientIDNumber = req.query.patientIDnumber;
  const todayDate = req.query.date;
  console.log(patientIDNumber + " " + todayDate);

  await AppDetails.find({ patientIDnumber: patientIDNumber, date: todayDate })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getTodayAppointmentDetails", async (req, res) => {
  const todayDate = req.query.date;
  const slicedDate = todayDate.substring(0, 15);
  console.log(slicedDate);

  await AppDetails.find({ date: slicedDate })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});
app.get("/getTodayDentalAppointmentDetails", async (req, res) => {
  const dentistIDnumber = req.query.dentistIDnumber;
  const todayDate = req.query.date;
  const slicedDate = todayDate.substring(0, 15);
  console.log("wtf", slicedDate);
  console.log(dentistIDnumber);

  await AppDetails.find({ date: slicedDate, dentistIDnumber: dentistIDnumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUpcomingDentalAppointmentDetails", async (req, res) => {
  const dentistIDnumber = req.query.dentistIDnumber;
  const todayDate = req.query.date;
  const slicedDate = todayDate.substring(0, 15);
  console.log(slicedDate);

  await AppDetails.find({
    date: { $ne: slicedDate },
    dentistIDnumber: dentistIDnumber,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//filtered Upcoming
app.get("/getUpcomingUserAppointmentDetails", async (req, res) => {
  const patientIDNumber = req.query.patientIDnumber;
  const todayDate = req.query.date;
  const slicedDate = todayDate.substring(0, 15);
  console.log(patientIDNumber + " " + slicedDate);

  await AppDetails.find({
    patientIDnumber: patientIDNumber,
    date: { $ne: slicedDate },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getFollowUpUserAppointment", async (req, res) => {
  const patientIDNumber = req.query.patientIDnumber;

  await AppDetails.find({
    patientIDnumber: patientIDNumber,
    appStatus: "Follow-Up",
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getOngoingUserAppointment", async (req, res) => {
  const patientIDNumber = req.query.patientIDnumber;

  await AppDetails.find({
    patientIDnumber: patientIDNumber,
    appStatus: { $in: ["Accepted", "Pending"] },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getAppointmenstToDisableDate", async (req, res) => {
  const patientIDNumber = req.query.patientIDnumber;

  await AppDetails.find({ patientIDnumber: patientIDNumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUpcomingAppointmentDetails", async (req, res) => {
  const todayDate = req.query.date;
  const slicedDate = todayDate.substring(0, 15);
  console.log(slicedDate);

  await AppDetails.find({ date: { $ne: slicedDate } })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getAppointmentHistory", async (req, res) => {
  const patientIDNumber = req.query.patientIDnumber;

  await AppHistory.find({ patientIDnumber: patientIDNumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});
//get receipt details
app.get("/getReceiptDetails", async (req, res) => {
  await ReceiptDetails.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//get patient dental records
app.get("/getUserDentalRecord", async (req, res) => {
  const patientIDnumber = "PT#" + req.query.patientIDnumber;
  console.log(patientIDnumber);
  await DentalRecords.find({ patientIDNumber: patientIDnumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUserDentalRecordforReceipt", async (req, res) => {
  const patientIDnumber = "PT#" + req.query.patientIDnumber;
  const appNumber = "#" + req.query.appNum;
  const dateValue = req.query.dateValue;
  console.log(
    patientIDnumber + " " + appNumber + " " + dateValue + "get dental receipt"
  );
  await DentalRecords.find({
    patientIDNumber: patientIDnumber,
    appNum: appNumber,
    dentalDate: dateValue,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//get patient epres records
app.get("/getUserEPresRecord", async (req, res) => {
  const patientIDnumber = "PT#" + req.query.patientIDnumber;
  console.log(patientIDnumber);

  await PresDetails.find({ patientIDNumber: patientIDnumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getAllEPresRecord", async (req, res) => {
  const patientIDnumber = req.query.patientIDnumber;
  console.log(patientIDnumber);

  await PresDetails.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//get patient trans records
app.get("/getUserTransaction", async (req, res) => {
  const patientIDnumber = "PT#" + req.query.patientIDnumber;

  await ReceiptDetails.find({ patientIDnumber: patientIDnumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUserTransactionPaid", async (req, res) => {
  const patientIDnumber = "PT#" + req.query.patientIDnumber;

  await ReceiptDetails.find({
    patientIDnumber: patientIDnumber,
    payStatus: "Paid",
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getPatientListforUserTransaction", async (req, res) => {
  await User.find({ user_role_id: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUserforAdmin", async (req, res) => {
  await User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getArchiveUserforAdmin", async (req, res) => {
  await UserArchive.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUserUsingEmail", async (req, res) => {
  const emailVal = req.query.emailValue;

  await User.find({ email: emailVal })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getPatientAppNumforDental", async (req, res) => {
  const appNumber = "#" + req.query.appNumber;
  console.log(appNumber);

  await AppDetails.find({ appNum: appNumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getPatientIDforDental", async (req, res) => {
  const patientIDnumber = "PT#" + req.query.patientIDnumber;
  console.log(patientIDnumber, "asdasdasd");

  await AppDetails.find({ patientIDnumber: patientIDnumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getDetailsforReceipt", async (req, res) => {
  const patientIDnum = req.query.patientIDNum;
  const appNumber = req.query.appNumber;

  await AppDetails.find({ patientIDnumber: patientIDnum, appNum: appNumber })
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getTransaction", async (req, res) => {
  const patientIDnumber = req.query.patientIDnumber;
  console.log(patientIDnumber, "getUserTransaction");

  await ReceiptDetails.find({ patientIDnumber: patientIDnumber })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getTotalPatients", async (req, res) => {
  await User.countDocuments({ user_role_id: "1" })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getUserAppts", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  var arr = [];
  if (query.pend != "") {
    arr.push(query.pend);
  }
  if (query.acc != "") {
    arr.push(query.acc);
  }
  if (query.res != "") {
    arr.push(query.res);
  }
  if (query.fin != "") {
    arr.push(query.fin);
  }
  if (query.can != "") {
    arr.push(query.can);
  }
  if (query.fol != "") {
    arr.push(query.fol);
  }

  if (arr == 0) {
    await AppDetails.find({ pName: query.pName })
      .then((data) => {
        var allEvents = [];

        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            continue;
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            dent: data[key].dName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  } else {
    await AppDetails.find({ pName: query.pName, appStatus: { $in: arr } })
      .then((data) => {
        var allEvents = [];

        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            continue;
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            dent: data[key].dName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
});

app.get("/getUserApptsReq", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  var arr = [];
  if (query.pend != "") {
    arr.push(query.pend);
  }
  if (query.acc != "") {
    arr.push(query.acc);
  }
  if (query.res != "") {
    arr.push(query.res);
  }
  if (query.fin != "") {
    arr.push(query.fin);
  }
  if (query.can != "") {
    arr.push(query.can);
  }
  if (query.fol != "") {
    arr.push(query.fol);
  }

  if (arr == 0) {
    await AppRequest.find({ pName: query.pName })
      .then((data) => {
        var allEvents = [];
        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            color = "#FFC107";
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            patient: data[key].dName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  } else {
    await AppRequest.find({ pName: query.pName, appStatus: { $in: arr } })
      .then((data) => {
        var allEvents = [];
        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            color = "#FFC107";
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            patient: data[key].dName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
});

app.get("/getUserApptsOthers", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  var arr = [];
  if (query.pend != "") {
    arr.push(query.pend);
  }
  if (query.acc != "") {
    arr.push(query.acc);
  }
  if (query.res != "") {
    arr.push(query.res);
  }
  if (query.fin != "") {
    arr.push(query.fin);
  }
  if (query.can != "") {
    arr.push(query.can);
  }
  if (query.fol != "") {
    arr.push(query.fol);
  }

  if (arr.length == 0) {
    await AppDetails.find()
      .then((data) => {
        var allEvents = [];
        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            continue;
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  } else {
    await AppDetails.find({ appStatus: { $in: arr } })
      .then((data) => {
        var allEvents = [];
        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            continue;
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
});

app.get("/getUserApptsReqOthers", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  var arr = [];
  if (query.pend != "") {
    arr.push(query.pend);
  }
  if (query.acc != "") {
    arr.push(query.acc);
  }
  if (query.res != "") {
    arr.push(query.res);
  }
  if (query.fin != "") {
    arr.push(query.fin);
  }
  if (query.can != "") {
    arr.push(query.can);
  }
  if (query.fol != "") {
    arr.push(query.fol);
  }

  if (arr == 0) {
    await AppRequest.find()
      .then((data) => {
        var allEvents = [];
        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            color = "#FFC107";
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  } else {
    await AppRequest.find({ appStatus: { $in: arr } })
      .then((data) => {
        var allEvents = [];
        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            color = "#FFC107";
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
});

app.get("/getUserApptsHistOthers", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  var arr = [];
  if (query.pend != "") {
    arr.push(query.pend);
  }
  if (query.acc != "") {
    arr.push(query.acc);
  }
  if (query.res != "") {
    arr.push(query.res);
  }
  if (query.fin != "") {
    arr.push(query.fin);
  }
  if (query.can != "") {
    arr.push(query.can);
  }
  if (query.fol != "") {
    arr.push(query.fol);
  }

  if (arr == 0) {
    await AppHistory.find()
      .then((data) => {
        var allEvents = [];
        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            color = "#FFC107";
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            dent: data[key].dName,
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  } else {
    await AppHistory.find({ appStatus: { $in: arr } })
      .then((data) => {
        var allEvents = [];
        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            color = "#FFC107";
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            dent: data[key].dName,
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
});

app.get("/getUserApptsDent", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  var arr = [];
  if (query.pend != "") {
    arr.push(query.pend);
  }
  if (query.acc != "") {
    arr.push(query.acc);
  }
  if (query.res != "") {
    arr.push(query.res);
  }
  if (query.fin != "") {
    arr.push(query.fin);
  }
  if (query.can != "") {
    arr.push(query.can);
  }
  if (query.fol != "") {
    arr.push(query.fol);
  }

  if (arr == 0) {
    await AppDetails.find({ dentistIDnumber: query.dentistIDnumber })
      .then((data) => {
        var allEvents = [];

        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            continue;
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            dent: data[key].dName,
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  } else {
    await AppDetails.find({
      dentistIDnumber: query.dentistIDnumber,
      appStatus: { $in: arr },
    })
      .then((data) => {
        var allEvents = [];

        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            continue;
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            dent: data[key].dName,
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
});

app.get("/getUserApptsHistDent", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  var arr = [];
  if (query.pend != "") {
    arr.push(query.pend);
  }
  if (query.acc != "") {
    arr.push(query.acc);
  }
  if (query.res != "") {
    arr.push(query.res);
  }
  if (query.fin != "") {
    arr.push(query.fin);
  }
  if (query.can != "") {
    arr.push(query.can);
  }
  if (query.fol != "") {
    arr.push(query.fol);
  }

  if (arr == 0) {
    await AppHistory.find({ dentistIDnumber: query.dentistIDnumber })
      .then((data) => {
        var allEvents = [];

        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            color = "#FFC107";
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            dent: data[key].dName,
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  } else {
    await AppHistory.find({
      dentistIDnumber: query.dentistIDnumber,
      appStatus: { $in: arr },
    })
      .then((data) => {
        var allEvents = [];

        for (var key in data) {
          let color = "";
          if (data[key].appStatus === "Pending") {
            color = "#FFC107";
          } else if (data[key].appStatus === "Accepted") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Rescheduled") {
            color = "#0DCAF0";
          } else if (data[key].appStatus === "Finished") {
            color = "#198754";
          } else if (data[key].appStatus === "No Show") {
            color = "#A9A9A9";
          } else if (data[key].appStatus === "Follow-Up") {
            color = "#7823e7";
          } else {
            color = "#DC3545";
          }
          tempArr = {
            dent: data[key].dName,
            patient: data[key].pName,
            date: data[key].formattedDate,
            time: data[key].time,
            cons: data[key].procedures,
            color: color,
          };
          allEvents.push(tempArr);
        }
        res.json(allEvents);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
});

app.get("/getSpecificDentalRecord", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  await DentalRecords.findOne({
    patientIDNumber: "PT#" + query.patientIDNum,
    dentalDate: query.date,
  })
    .then((data) => {
      res.jsonp(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getAppointmentsbyDate", async (req, res) => {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log(query.date);
  var returnData = [];
  await AppRequest.find({date:query.date})
    .then((data) => {
      returnData=data;
    })
    .catch((error) => {
      console.log("error: ", error);
    });

  await AppDetails.find({date:query.date,appStatus:"Accepted"})
  .then((data) => {
    data.forEach(function(item) {
      returnData.push(item);
    })
    res.json(returnData);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
});

app.get("/getTotalAppts", async (req, res) => {
  await AppDetails.countDocuments({})
    .then((data) => {
      res.json(data.toArray);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getTotalPendingAppts", async (req, res) => {
  const dentistIDnum = req.query.dentistIDnumber;

  await AppRequest.countDocuments({
    dentistIDnumber: dentistIDnum,
    appStatus: "Pending",
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

app.get("/getTotalPendingApp", async (req, res) => {
  await AppRequest.countDocuments({ appStatus: "Pending" })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

//updateDataTable

app.put("/updateDateTime", async (req, res) => {
  const appNumber = req.body.appNum;
  const updateDate = req.body.newDate;
  const updateSlicedDate = updateDate.slice(0, 10); //removes unnecessary data
  console.log(updateDate);
  console.log(updateSlicedDate);
  const updateTime = req.body.newTime;
  const updateConsult = req.body.newConsultation;
  console.log(
    appNumber + " " + updateSlicedDate + " " + updateTime + " " + updateConsult
  );

  await AppDetails.findOneAndUpdate(
    { appNum: appNumber },
    { date: updateSlicedDate, time: updateTime, consultation: updateConsult }
  );
  console.log("Appointment Details Updated!");
});

app.put("/rescheduleAppointment", async (req, res) => {
  const appNumber = req.body.appNum;
  const patientIDnumber = req.body.patientIDNum;
  const userNameApp = req.body.pName;
  const updateDate = req.body.newDate.substring(0, 15);
  const formattedDate = req.body.newFormattedDate.substring(0, 10);
  const updateTime = req.body.newTime;
  const updateProcedure = req.body.procedures;
  const insertAppStatus = "Rescheduled";
  const docName = req.body.dName;

  const AppData = new AppRequest({
    patientIDnumber: patientIDnumber,
    pName: userNameApp,
    dName: docName,
    appNum: appNumber,
    date: updateDate,
    formattedDate: formattedDate,
    procedures:updateProcedure,
    time: updateTime,
    appStatus: insertAppStatus,
  });

  await AppData.save();
  await AppDetails.findOneAndDelete({ appNum: appNumber });

  console.log("Appointment Details Updated!");
});

app.put("/rescheduleDentistAppointment", async (req, res) => {
  const appNumber = req.body.appNum;
  const patientIDnumber = req.body.patientIDNum;
  const userNameApp = req.body.pName;
  const updateDate = req.body.newDate.substring(0, 15);
  const formattedDate = req.body.newFormattedDate.substring(0, 10);
  const updateTime = req.body.newTime;
  const insertAppStatus = "Rescheduled";
  const docName = req.body.dName;
  const dentistIDnum = req.body.dentistIDnumber;
  const event = new Date();
  const firstNumber = event.toISOString().substring(20, 23);
  const appNumberUUID = "#APT" + firstNumber;
  const proceduresData = req.body.procedures;

  const AppData = new AppDetails({
    patientIDnumber: patientIDnumber,
    dentistIDnumber: dentistIDnum,
    pName: userNameApp,
    dName: docName,
    appNum: appNumberUUID,
    date: updateDate,
    formattedDate: formattedDate,
    procedures: proceduresData,
    time: updateTime,
    appStatus: insertAppStatus,
  });

  await AppData.save();
  await AppDetails.findOneAndDelete({ appNum: appNumber });

  console.log("Appointment Details Updated!");
});

//delete Request Appointment

app.put("/deleteRequestAppointment", async (req, res) => {
  const appNumber = req.body.appNum;
  await AppRequest.findOneAndDelete({ appNum: appNumber });
  console.log("Appointment Successfully Deleted!.");
});
//delete Appointment
app.put("/deleteAppointment", async (req, res) => {
  const patientIDNum = req.body.patientIDnumber;
  const appNumber = req.body.appNum;
  await AppDetails.findOneAndDelete({
    appNum: appNumber,
    patientIDnumber: patientIDNum,
  });
  console.log("Appointment Successfully Deleted!.");
});

//update status
app.put("/updateStatus", async (req, res) => {
  const appNumber = req.body.appNum;
  const newStatus = req.body.newAppStatus;

  await AppDetails.findOneAndUpdate(
    { appNum: appNumber },
    { appStatus: newStatus }
  );
  console.log("Appointment Status Successfully Updated!");
});

app.get("/sendApptEmail", function (req, res) {});

//Accept Appointment
app.post("/acceptAppointment", async (req, res) => {
  //Dentist ID num
  const DentistIDNum = req.body.dentistIDnumber;
  console.log(DentistIDNum);

  //Patient ID name
  const PatientIDnum = req.body.patientIDnumber;
  console.log(PatientIDnum);

  //User Info value
  const userNameApp = req.body.userNameApp;
  console.log(userNameApp);

  //Docotor name
  const docName = req.body.dentistValue;
  console.log(docName);

  //Appointment Number

  const appNumber = req.body.appNumber;
  console.log(appNumber);

  await AppDetails.findOneAndDelete({ appNum: appNumber });

  //date value
  const dateValue = req.body.dateValue;
  const slicedDate = dateValue.substring(0, 15);

  const formattedDate = req.body.formattedDate;

  const procValue = req.body.procedures;

  //time value
  const getTime = req.body.getTime;
  console.log(getTime);

  //appt status default when appointment is accepted by the dentist
  const insertAppStatus = "Accepted";
  console.log(insertAppStatus);

  //inserting all data
  const AppData = new AppDetails({
    dentistIDnumber: DentistIDNum,
    patientIDnumber: PatientIDnum,
    pName: userNameApp,
    dName: docName,
    appNum: appNumber,
    date: slicedDate,
    formattedDate: formattedDate,
    procedures: procValue,
    time: getTime,
    appStatus: insertAppStatus,
  });

  try {
    await AppData.save();
    console.log("Successfully inserted ", AppData, " to the database.");
    await AppRequest.findOneAndDelete({ appNum: appNumber });
  } catch (err) {
    console.log(err);
  }
});

//-----------end of CRUD--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//index.js code for integrating Google Calendar

const { google } = require("googleapis");
//const { default: ArchiveAccount } = require("./client/src/components/modals/archive-account");

const SCOPES =
  "https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/calendar.events,https://www.googleapis.com/auth/admin.directory.resource.calendar";
const GOOGLE_PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0QBw/1OPaexNw\na49s8SeguA7yORAI7PDMj096/iaB+J3uDMwfq8cAlLJvKSRC7lxegRW9tnLebFQe\nOdF4GFfIPwdexIVZWfGXkMfB4KDFDfFySWJnXi91IhkoXY7AeqRKWJ6Dnb3nZZZ4\nMMkx1Yqn3DYoPEoqNd3l6CHTHMmrWV4euKEvw/2E7OIuL2wc+q1xfHPPeL+ub9m0\nrfIFgTyRexr4qj0yFzPlO8aipMP1l5ReWYgsps4A0D56fzyzcNnP0IaU+h3UUB41\nHFa5sSXPhPSPpN/OouNfXa/hcjQwT7kopmmlyreWm/9McYgC2g6PVZhhQ7C9YoM2\nhWGNoHsTAgMBAAECggEADkD1muycWhYaeuzeiihl0FVNxUTS6knGXv7EM78uT1/Y\nKU90wtpkIb0ggR7ZQbu0rTp6/CYV3lXlrwA2es89/dVSIWHcA61Tp/8odMHtJLgO\nDFIWSINPsG0SXTlMxRbNsB1i55iNQGOtqvJ8roaq8Mw+sh7WZJEe64PYTOf9YKHN\n4Bs+50zmxye+1IwoCLhHQNThTbTuxfClrr1t+UX8UyoF89pch9WdDqAnXIKNG5m2\n0GCaovzhA+AaJFTEguw0Id7GKc67p9jkYGDLUjdk9x/YXzXQAiaEyQ1ROodxfLCF\nu977NKAADfgmSLSIPIlV5dKAL3ILWTXiEyT8tGU6qQKBgQDuwTWb9yxTZ5Dz1eLi\nmHO4WSjAXEaE6NIFqz1zz0Uys8/jHV9v+3VYsVLY/ewG0vzkMOfAbhXBsgXcelUe\ne3f8oPF8V2LHpHt8j9B/4HtsEQJUUKiltDL/bsYqWQwcuyyxYE4eGjdru/CJ1Vb/\nmocF/SByXHZuOjfuOvTHC0vumwKBgQDBRRqLlCJ9reTC72ezldmf54pzbVsOpFoA\nB83EykeEu8o71tS5S/byreKn0AwQ1LbGTYgoChGz0z4rJggkA22DJ0TL0szJOn98\nEN/fS3qswHiGQq5RLGqPBdorRHHY6hVzM5/kbHhEa+MK7E6f92yGjOcG2hY0ZZ2Q\naX6uDSnw6QKBgE4+17jjio1S9bhTsmWcnOAfqDFSjHHmc14UPrGDjiQNteWyrKJg\ngJauln4yyXV7FBIczPbNnSe7lhwpo1e4ExyiCkI7yU2wZB/wad5ezVQfRuom/P5B\nTi1UOnGKeWO5G+6Np0xKPzt5fl1No5NlKzcVO9r+3nlFbysN+0Z4N0xdAoGBAIGe\nR+ROkCc75c165FDD8jVVAzzQnZ4fSaD1muIdS4PQshwZw4cWVGODjRxA4qazEnXC\nb8tynVa+GNa1ZgZJKjworPIJyYA3tGJPquVF6NtNJkfdFq2oHTsYkK4t9DCnJYWi\nnNyEhtBUjuu3ei+8r9M5UoP85aF0eQzuQ6CVgYhpAoGBAJZ2IAZlX8Mm4jmpzOOK\nBZe52fzCoUbKxMFtlipKP8u8Bd/XBD4mz4CkHugy622IZwvv0der3yzPjONtD7Ze\nA6D/S89QLrynBCqzCE1PYSivevEz9ueKuq5biFXvXjNKF40bOwBRiqgEiHyDndhy\nXfYHAnkzU5VeRTVoXzJ5LDTZ\n-----END PRIVATE KEY-----\n";
const GOOGLE_CLIENT_EMAIL =
  "rimorin-dental-clinic@rimorin-dental-clinic.iam.gserviceaccount.com";
const GOOGLE_PROJECT_NUMBER = "508911265286 ";
const GOOGLE_CALENDAR_ID =
  "3b200857954250604a3c1200af53229fb9de863bc824b0acd5576548aa41e291@group.calendar.google.com";

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

const calendar = google.calendar({
  version: "v3",
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient,
});

app.get("/checkAppt", (req, res) => {
  calendar.events.list(
    {
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    },
    (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }));
      } else {
        if (result.data.items.length) {
          res.send(JSON.stringify({ events: result.data.items }));
        } else {
          res.send(JSON.stringify({ message: "No upcoming events found." }));
        }
      }
    }
  );
});

app.get("/createEvent", (req, res) => {
  var event = {
    summary: "Rimorin Dental Appointment",
    location: "Victoria Shoppesville, Baguio, 2600 Benguet",
    description: "Appointment with Dr. Pam",
    start: {
      dateTime: "2022-11-12T09:00:00-07:00",
      timeZone: "Asia/Dhaka",
    },
    end: {
      dateTime: "2022-11-12T17:00:00-07:00",
      timeZone: "Asia/Dhaka",
    },
    attendees: [],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };

  const auth = new google.auth.GoogleAuth({
    keyFile: "CalendarData.json",
    scopes: "https://www.googleapis.com/auth/calendar",
  });
  auth.getClient().then((a) => {
    calendar.events.insert(
      {
        auth: a,
        calendarId: GOOGLE_CALENDAR_ID,
        resource: event,
      },
      function (err, event) {
        if (err) {
          console.log(
            "There was an error contacting the Calendar service: " + err
          );
          return;
        }
        console.log("Event created: %s", event.data);
        res.jsonp("Event successfully created!");
      }
    );
  });
});

//create dental records
//image storage
const ImgStorageDentRec = multer.diskStorage({
  destination: "uploads/dental-record-images",
  filename: (req, file, cb) => {
    const slicedDate = req.body.dateValue.slice(0, 10); //removes unnecessary data
    cb(
      null,
      req.body.patientIDNum.replace("#", "") + "_" + slicedDate + ".jpg"
    );
  },
});

const uploadImg = multer({
  storage: ImgStorageDentRec,
});

app.post(
  "/createDentalRecord",
  uploadImg.single("imgValue"),
  async (req, res) => {
    console.log("dent records");
    const patientIDNum = req.body.patientIDNum;
    const dateValue = req.body.dateValue;
    const slicedDate = dateValue.slice(0, 10); //removes unnecessary data
    const descValue = req.body.descValue;
    const procedures = req.body.procedures;
    const chartedTeeth = req.body.chartedTeeth;
    const appNumber = "#" + req.body.appNum;
    const dentalStatus = "Finished";

    await DentalRecords.create({
      patientIDNumber: patientIDNum,
      appNum: appNumber,
      dentalDate: slicedDate,
      dentalDesc: descValue,
      chartedTeeth: chartedTeeth,
      procedures: procedures,
      dentalStatus: dentalStatus,
    });
    console.log("Dental Record Created");
  }
);

app.post("/insertDentalRecords", async (req, res) => {
  //Patient ID name
  const PatientIDnum = req.body.patientIDnumber;
  console.log(PatientIDnum);

  //User Info value
  const userNameApp = req.body.pName;
  console.log(userNameApp);

  //Doctor name
  const docName = req.body.dName;
  console.log(docName);

  //Appointment Number

  const appNumber = req.body.appNum;
  console.log(appNumber);

  //date value
  const dateValue = req.body.date;
  console.log(dateValue);

  //consul value
  const procValue = req.body.procedures;

  //time value
  const getTime = req.body.time;
  console.log(getTime);

  //appt status default when appointment is accepted by the dentist
  const insertAppStatus = "No Show";
  console.log(insertAppStatus);

  //inserting all data
  const AppData = new DentalRecords({
    patientIDnumber: PatientIDnum,
    pName: userNameApp,
    dName: docName,
    appNum: appNumber,
    date: dateValue,
    procedures: procValue,
    time: getTime,
    appStatus: insertAppStatus,
  });

  try {
    await AppData.save();
    console.log(
      "Successfully inserted No Show ",
      AppData,
      " to the History database."
    );
    await AppDetails.findOneAndDelete({ appNum: appNumber });
  } catch (err) {
    console.log(err);
  }
});

app.post("/createReceipt", async (req, res) => {
  const PatientIDNumber = req.body.patientIDnumber;
  const appNumber = "#" + req.body.appNum;
  const dateValue = req.body.dateValue;
  const slicedDate = dateValue.slice(0, 10);
  const payStatus = "Pending";

  // const appNumDuplicate = await ReceiptDetails.findOne({appNumber});

  await ReceiptDetails.create({
    patientIDnumber: PatientIDNumber,
    appNum: appNumber,
    date: slicedDate,
    payStatus: payStatus,
  });

  console.log(
    "Receipt Created with ",
    PatientIDNumber,
    appNumber,
    "at",
    dateValue
  );
});

app.post(
  "/createDentalRecordforSec",
  uploadImg.single("imgValue"),
  async (req, res) => {
    console.log("sec records");
    const patientIDNum = req.body.patientIDNum;
    const appNumber = "#" + req.body.appNum;
    const dentalStatus = "Pending";

    await DentalRecords.create({
      patientIDNumber: patientIDNum,
      appNum: appNumber,
      dentalStatus: dentalStatus,
    });
    console.log("Dental Record Created");
  }
);

const ImgStorageERec = multer.diskStorage({
  destination: "uploads/e-receipt",
  filename: (req, file, cb) => {
    //const slicedDate = req.body.dateValue.slice(0,10)//removes unnecessary data
    cb(null, req.body.patientIDnumber + "_" + req.body.dateIssued + ".png");
  },
});

const uploadImg3 = multer({
  storage: ImgStorageERec,
});

app.put(
  "/getandUpdateReceipt",
  uploadImg3.single("imgFile"),
  async (req, res) => {
    const objectID = req.body.OBJECTID;
    const dateIssued = req.body.dateIssued;
    const paymentType = req.body.paymentType;
    const totalAmount = req.body.totalAmount;
    const addedItemValue = req.body.addedItem;
    const officialReceiptNum = req.body.officialReceiptNum;
    const addedProcedurePrice = req.body.addedProcedurePrice;
    const amountPaid = req.body.amountPaid;
    const discountValue = req.body.disValue;
    const payStatus = "Paid";

    try {
      console.log(objectID);
      await ReceiptDetails.findOneAndUpdate(
        { _id: objectID },
        {
          payStatus: payStatus,
          dateIssued: dateIssued,
          paymentType: paymentType,
          addedItem: addedItemValue,
          officialReceiptNum: officialReceiptNum,
          addedProcedurePrice: addedProcedurePrice,
          amountPaid: amountPaid,
          totalAmount: totalAmount,
          discountValue: discountValue,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
);

const ImgStorageEPres = multer.diskStorage({
  destination: "uploads/e-prescription",
  filename: (req, file, cb) => {
    const slicedDate = req.body.dateValue.slice(0, 10); //removes unnecessary data
    cb(null, req.body.patientIDNum + "_" + slicedDate + ".png");
  },
});

const uploadImg2 = multer({
  storage: ImgStorageEPres,
});

app.post(
  "/createEprescription",
  uploadImg2.single("imgFile"),
  async (req, res) => {
    console.log("epres");
    const patientIDNum = "PT#" + req.body.patientIDNum;
    const dateValue = req.body.dateValue;
    const slicedDate = dateValue.slice(0, 10); //removes unnecessary data
    const presDetails = req.body.presDetails;
    const notesValue = req.body.notesValue;
    const dentistName = req.body.dentistName;

    await PresDetails.create({
      patientIDNumber: patientIDNum,
      dentistName: dentistName,
      presDate: slicedDate,
      presDetails: presDetails,
      presInstruction: notesValue,
    });
    console.log("e-pres saved");
  }
);

app.put("/updatePatientInfo", async (req, res) => {
  const ObjectID = req.body.ObjectID;
  const patientIDnumber = req.body.patientIDnumber;

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const middleName = req.body.middleName;
  const suffix = req.body.suffix;
  const birthDate = req.body.birthDate;
  const genderValue = req.body.genderValue;
  const professionValue = req.body.professionValue;
  const cellNumber = req.body.cellNumber;
  const tellNumber = req.body.tellNumber;
  const bloodType = req.body.bloodType;
  const houseNum = req.body.houseNum;
  const cityValue = req.body.cityValue;
  const countryValue = req.body.countryValue;
  const brgyValue = req.body.brgyValue;
  const provinceValue = req.body.provinceValue;
  const zipValue = req.body.zipValue;
  const medValue = req.body.medValue;
  const allergiesValue = req.body.allergiesValue;
  const condValue = req.body.condValue;
  const precautionValue = req.body.precautionValue;

  const patientName = firstName + " " + lastName;

  const bdayInput = req.body.birthDate;
  let AgeOut = () => {
    return Math.floor(
      (Date.now() - new Date(bdayInput).getTime()) / 31557600000
    );
  };

  await User.findOneAndUpdate(
    { _id: ObjectID },

    {
      fname: firstName,
      lname: lastName,
      mname: middleName,
      suffix: suffix,
      bday: birthDate,
      age: AgeOut(),
      gender: genderValue,
      profession: professionValue,
      mobile: cellNumber,
      tellphone: tellNumber,
      blood: bloodType,
      house: houseNum,
      municipality: cityValue,
      country: countryValue,
      brgy: brgyValue,
      province: provinceValue,
      zipcode: zipValue,
      medications: medValue,
      allergies: allergiesValue,
      conditions: condValue,
      precautions: precautionValue,
    }
  );

  await AppDetails.updateMany(
    { patientIDnumber: patientIDnumber },
    { pName: patientName }
  );
  await AppRequest.updateMany(
    { patientIDnumber: patientIDnumber },
    { pName: patientName }
  );
  await ReceiptDetails.updateMany(
    { patientIDnumber: patientIDnumber },
    { pName: patientName }
  );
  console.log("User info updated!");
});

app.put("/updateDentistInfo", async (req, res) => {
  const ObjectID = req.body.ObjectID;
  const dentistIDnumber = req.body.dentistIDnumber;

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const middleName = req.body.middleName;
  const suffix = req.body.suffix;
  const birthDate = req.body.birthDate;
  const genderValue = req.body.genderValue;
  const professionValue = req.body.professionValue;
  const cellNumber = req.body.cellNumber;
  const tellNumber = req.body.tellNumber;
  const bloodType = req.body.bloodType;
  const houseNum = req.body.houseNum;
  const cityValue = req.body.cityValue;
  const countryValue = req.body.countryValue;
  const brgyValue = req.body.brgyValue;
  const provinceValue = req.body.provinceValue;
  const zipValue = req.body.zipValue;
  const medValue = req.body.medValue;
  const allergiesValue = req.body.allergiesValue;
  const condValue = req.body.condValue;
  const precautionValue = req.body.precautionValue;

  const dentistName = firstName + " " + lastName;

  const bdayInput = req.body.birthDate;
  let AgeOut = () => {
    return Math.floor(
      (Date.now() - new Date(bdayInput).getTime()) / 31557600000
    );
  };

  await User.findOneAndUpdate(
    { _id: ObjectID },

    {
      fname: firstName,
      lname: lastName,
      mname: middleName,
      suffix: suffix,
      bday: birthDate,
      age: AgeOut(),
      gender: genderValue,
      profession: professionValue,
      mobile: cellNumber,
      tellphone: tellNumber,
      blood: bloodType,
      house: houseNum,
      municipality: cityValue,
      country: countryValue,
      brgy: brgyValue,
      province: provinceValue,
      zipcode: zipValue,
      medications: medValue,
      allergies: allergiesValue,
      conditions: condValue,
      precautions: precautionValue,
    }
  );

  await AppDetails.updateMany(
    { dentistIDnumber: dentistIDnumber },
    { dName: dentistName }
  );
  await AppRequest.updateMany(
    { dentistIDnumber: dentistIDnumber },
    { dName: dentistName }
  );
  await ReceiptDetails.updateMany(
    { dentistIDnumber: dentistIDnumber },
    { dName: dentistName }
  );
  console.log("User info updated!");
});

app.post("/moveToAppointmentHistoryAsCancelled", async (req, res) => {
  //Patient ID name
  const PatientIDnum = req.body.patientIDnumber;
  console.log(PatientIDnum);

  //User Info value
  const userNameApp = req.body.userNameApp;
  console.log(userNameApp);

  //Doctor name
  const docName = req.body.dentistValue;
  console.log(docName);

  //Appointment Number

  const appNumber = req.body.appNumber;
  console.log(appNumber);

  //date value
  const dateValue = req.body.dateValue;
  console.log(dateValue);

  //consul value

  //time value
  const getTime = req.body.getTime;
  console.log(getTime);

  //appt status default when appointment is accepted by the dentist
  const insertAppStatus = "Cancelled";
  console.log(insertAppStatus);

  //inserting all data
  const AppData = new AppHistory({
    patientIDnumber: PatientIDnum,
    pName: userNameApp,
    dName: docName,
    appNum: appNumber,
    date: dateValue,
    time: getTime,
    appStatus: insertAppStatus,
  });

  try {
    await AppData.save();
    console.log("Successfully inserted ", AppData, " to the History database.");
    await AppRequest.findOneAndDelete({ appNum: appNumber });
  } catch (err) {
    console.log(err);
  }
});

app.post("/moveToAppointmentHistoryAsNoShow", async (req, res) => {
  //Patient ID name
  const PatientIDnum = req.body.patientIDnumber;
  console.log(PatientIDnum);

  //User Info value
  const userNameApp = req.body.pName;
  console.log(userNameApp);

  //Doctor name
  const docName = req.body.dName;
  console.log(docName);

  //Appointment Number

  const appNumber = req.body.appNum;
  console.log(appNumber);

  //date value
  const dateValue = req.body.date;
  console.log(dateValue);

  //consul value
  const procValue = req.body.procedures;

  //time value
  const getTime = req.body.time;
  console.log(getTime);

  //appt status default when appointment is accepted by the dentist
  const insertAppStatus = "No Show";
  console.log(insertAppStatus);

  //inserting all data
  const AppData = new AppHistory({
    patientIDnumber: PatientIDnum,
    pName: userNameApp,
    dName: docName,
    appNum: appNumber,
    date: dateValue,
    procedures: procValue,
    time: getTime,
    appStatus: insertAppStatus,
  });

  try {
    await AppData.save();
    console.log(
      "Successfully inserted No Show ",
      AppData,
      " to the History database."
    );
    await AppDetails.findOneAndDelete({ appNum: appNumber });
  } catch (err) {
    console.log(err);
  }
});

app.post("/moveToAppointmentHistoryAsFinished", async (req, res) => {
  console.log("FINISHED APP");

  //Patient ID name
  const PatientIDnum = "PT#" + req.body.patientIDnumber;
  console.log(PatientIDnum);

  //User Info value
  const userNameApp = req.body.pName;
  console.log(userNameApp);

  //Doctor name
  const docName = req.body.dName;
  console.log(docName);

  //Appointment Number

  const appNumber = "#" + req.body.appNum;
  console.log(appNumber);

  //date value
  const dateValue = req.body.dateVal;
  console.log(dateValue);

  //consul value
  const procValue = req.body.procedures;

  const formattedDate = req.body.formattedDate;

  //time value
  const getTime = req.body.timeVal;
  console.log(getTime);

  //appt status default when appointment is accepted by the dentist
  const insertAppStatus = "Finished";
  console.log(insertAppStatus);

  //inserting all data
  const AppData = new AppHistory({
    patientIDnumber: PatientIDnum,
    pName: userNameApp,
    dName: docName,
    appNum: appNumber,
    date: dateValue,
    formattedDate: formattedDate,
    procedures: procValue,
    time: getTime,
    appStatus: insertAppStatus,
  });

  try {
    await AppData.save();
    console.log(
      "Successfully inserted Finished ",
      AppData,
      " to the History database."
    );
    await AppDetails.findOneAndDelete({ appNum: appNumber });
  } catch (err) {
    console.log(err);
  }
});

app.post("/moveToAppointmentHistoryAsExpired", async (req, res) => {
  //Patient ID name
  const PatientIDnum = req.body.patientIDnumber;
  console.log(PatientIDnum);

  //User Info value
  const userNameApp = req.body.pName;
  console.log(userNameApp);

  //Doctor name
  const docName = req.body.dName;
  console.log(docName);

  //Appointment Number

  const appNumber = req.body.appNum;
  console.log(appNumber);

  //date value
  const dateValue = req.body.date;
  console.log(dateValue);

  //consul value
  const procValue = req.body.procedures;

  //time value
  const getTime = req.body.time;
  console.log(getTime);

  //appt status default when appointment is accepted by the dentist
  const insertAppStatus = "Finished";
  console.log(insertAppStatus);

  const appObjectID = req.body.objectID;

  //inserting all data
  const AppData = new AppHistory({
    patientIDnumber: PatientIDnum,
    pName: userNameApp,
    dName: docName,
    appNum: appNumber,
    date: dateValue,
    procedures: procValue,
    time: getTime,
    appStatus: insertAppStatus,
  });

  try {
    await AppData.save();
    console.log("Successfully inserted ", AppData, " to the History database.");
    await AppDetails.findOneAndDelete({ _id: appObjectID });
  } catch (err) {
    console.log(err);
  }
});

const sdk = require("api")("@movider/v1.0#3dy29x1ekssmjp2d");

app.post("/sendSMS", async (req, res) => {
  var phone = req.body.phone.toString();
  if (phone.substring(0, 2) == "63") {
    phone = req.body.phone;
  } else {
    phone = "63" + req.body.phone;
  }
  sdk
    .postSms(
      {
        api_key: "9rcBz4qgXLHOeilJ7OQwGFvlW8H3-X",
        api_secret: "9bW6Qe6tNi4jyJ0a5RfzuqYS_oZqIA",
        to: phone,
        text: req.body.message,
      },
      { accept: "application/json" }
    )
    .then(({ data }) => console.log(data))
    .catch((err) => console.error(err));
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email: email });
    if (!oldUser) {
      return res.json({ status: "User does not exist." });
    } else {
      const secret = JWT_SECRET + oldUser.password;
      const token = jwt.sign({ email: oldUser.email }, secret, {
        expiresIn: "5m",
      });
      const link = `https://rimorin-dental-clinic.herokuapp.com/auth/reset-password?email=${email}`;
      sgMail.setApiKey(
        "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"
      );
      let msg3 = {
        personalizations: [
          {
            to: [
              {
                email: email,
              },
            ],
            dynamic_template_data: {
              link: link,
            },
          },
        ],
        template_id: "d-b41b531ef5c149e994a62ab182d622f3",
        from: "rimorin.secretary@gmail.com", // Change to your verified sender
      };

      sgMail
        .send(msg3)
        .then(() => {
          res.json("Email Sent");
        })
        .catch((error) => {
          res.json("Error: Email Not Sent");
        });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/reset-password", async (req, res) => {
  const oldUser = await User.findOne({ email: req.body.email });
  if (!oldUser) {
    return res.json({ status: "User does not exist." });
  }
  // const secret = JWT_SECRET + oldUser.password;
  try {
    const encryptedPassword = await bcrypt.hash(req.body.newPassword, 10);
    await User.findOneAndUpdate(
      { email: req.body.email },
      { password: encryptedPassword }
    );
    // const verify = jwt.verify(query.token, secret);
    // res.render("index", { email: verify.emailValue, status: "Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

////////////////////////////////////////////////ADMIN MODULE//////////////////////////////////////////////////////////////////

app.post("/InsertNewUser", async (req, res) => {
  const accountType = req.body.accountType;
  const fname = req.body.fname;
  const mname = req.body.mname;
  const lname = req.body.lname;
  const suffix = req.body.suffix;
  const email = req.body.email;
  const gender = req.body.gender;
  const mobile = req.body.mobile;
  const bday = req.body.bday;
  const ptr = req.body.ptr;
  const license = req.body.license;

  console.log(accountType);

  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, 10);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  function generateString() {
    let numberLength = 3;
    let letterLength = 2;
    let numbersResult = "";
    let lettersResult = "";
    const lettersLength = letters.length;
    const numbersLength = numbers.length;
    for (let i = 0; i < numberLength; i++) {
      numbersResult += numbers.charAt(
        Math.floor(Math.random() * numbersLength)
      );
    }
    for (let i = 0; i < letterLength; i++) {
      lettersResult += letters.charAt(
        Math.floor(Math.random() * lettersLength)
      );
    }
    return numbersResult + lettersResult;
  }
  const patientIDNumber = "PT#" + generateString();
  const dentistIDNumber = "DT#" + generateString();
  const secretaryIDNumber = "SC#" + generateString();
  const adminIDNumber = "AD#" + generateString();

  const bdayInput = req.body.bday;
  let AgeOut = () => {
    return Math.floor(
      (Date.now() - new Date(bdayInput).getTime()) / 31557600000
    );
  };

  if (accountType == "patient") {
    const UserData = new User({
      patientIDnumber: patientIDNumber,
      accountType: accountType,
      fname: fname,
      suffix: suffix,
      lname: lname,
      mname: mname,
      email: email,
      password: encryptedPassword,
      gender: gender,
      mobile: mobile,
      bday: bday,
      age: AgeOut(),
      user_role_id: 1,
    });
    console.log("Add Details for Patient: ", UserData);
    try {
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.json({ error: "User already exists!" });
      } else {
        await UserData.save();
        console.log("Successfully inserted ", UserData, " to the database.");
        res.send({ status: "ok" });
      }
    } catch (error) {
      res.send({ status: "sign up error" + error });
    }
  }
  if (accountType == "secretary") {
    const UserData = new User({
      secretaryIDnumber: secretaryIDNumber,
      accountType: accountType,
      fname: fname,
      suffix: suffix,
      lname: lname,
      mname: mname,
      email: email,
      password: encryptedPassword,
      gender: gender,
      mobile: mobile,
      bday: bday,
      age: AgeOut(),
      user_role_id: 2,
    });
    console.log("Add Details for Secretary: ", UserData);
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
  }
  if (accountType == "dentist") {
    const UserData = new User({
      dentistIDnumber: dentistIDNumber,
      accountType: accountType,
      fname: fname,
      suffix: suffix,
      lname: lname,
      mname: mname,
      email: email,
      password: encryptedPassword,
      gender: gender,
      mobile: mobile,
      bday: bday,
      age: AgeOut(),
      ptr: ptr,
      license: license,
      user_role_id: 3,
    });
    console.log("Add Details for Dentist: ", UserData);
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
  }
  if (accountType == "admin") {
    const UserData = new User({
      adminIDnumbe: adminIDNumber,
      accountType: accountType,
      fname: fname,
      suffix: suffix,
      lname: lname,
      mname: mname,
      email: email,
      password: encryptedPassword,
      gender: gender,
      mobile: mobile,
      bday: bday,
      age: AgeOut(),
      user_role_id: 4,
    });
    console.log("Add Details for Admin: ", UserData);
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
  } else {
    console.log("Cannot create account. Missing values.");
  }
});

app.post("/ArchiveUser", async (req, res) => {
  const userObjectID = req.body.UserObjectID;

  await User.find({ _id: userObjectID }, function (err, result) {
    console.log(result[0].toObject());
    const moveToUserArchive = new UserArchive(result[0].toObject());
    moveToUserArchive.save();
  }).clone();

  await User.findOneAndDelete({ _id: userObjectID });
});

app.post("/UnArchiveUser", async (req, res) => {
  const userObjectID = req.body.UserObjectID;

  await UserArchive.find({ _id: userObjectID }, function (err, result) {
    console.log(result[0].toObject());
    const moveToUserArchive = new User(result[0].toObject());
    moveToUserArchive.save();
  }).clone();

  await UserArchive.findOneAndDelete({ _id: userObjectID });
});
