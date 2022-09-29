// const express = require('express'); // import express
// const mongoose = require('mongoose'); //import moongoose
// const cors = require('cors');
// const app = express();

// const AccountModel = require("./models/Account");

// app.use(express.json());
// app.use(cors());
// // connect to MongoDB
// mongoose.connect("mongodb+srv://dape:PASSWORD@cluster0.i733ls2.mongodb.net/UserAccount?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
// });

// //create (C)
// app.post("/insert", async (req, res)=>{

//     const title = req.body.title
//     const firstName = req.body.firstName
//     const account = new AccountModel({Title: title, first_name: firstName});

//     try{
//         await account.save();
//     }catch (err){
//         console.log(err);
//     }
// });

// //read (R)
// app.get("/read", async (req, res)=>{

//  AccountModel.find({}, (err,result) => {
//     if (err) {
//         res.send(err);
//     }

//     res.send(result);

//  }
//  )

// });

// //connect to localhost
// app.listen(3001, ()=>{
//     console.log("Server is runnning on port 3001");
// });

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
// const User = mongoose.model("userRegister"); //encodes model
const User = mongoose.model("UserInfo");

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
