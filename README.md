
# A Web-Based Patient Records Management and Appointment System for Rimorin Dental Clinic

This application will enable the staff of Rimorin Dental Clinic to manage their patient, dental, and payment records, book appointments, and produce e-prescription. \
The technologies utilized for this project include HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, etc. The database used for this project is MongoDB. 
There are 4 modules in this application, namely: Patient Module, Dentist Module, Secretary Module, and Admin Module.


## Installation

There are two sides to this application: a **server** side and a **client** side. The server side deals with the back-end of the web app, including data that are either *Created*, *Read*, *Used*, or *Deleted*. 
The client side deals with the front-end of the app, the parts of the website that users can interact with.

This application also has dependencies which are essentially Javascript files that contain organized, simple to complex functionalities that can easily be called and reused throughout the whole app.
They are needed to run the program since they contain code that are required by the system to run certain functions. To get these resources, the command `npm install` (or `npm i` for short) must be ran in the terminal.

Next, it's time to get both the server and the client sides running.

To activate the server side, type in:
```bash
  node index.js
```
and for the client side, the user must first go to the client folder and then type:
```bash
  npm start
```


## PATIENT MODULE

## Landing Page // insert landing page sc below text
The first thing the user will encounter when the web app loads is the landing page. It contains a navigation bar at the top that has the **Login** button.
It also has the **Make an Appointment** button at the left side of the page. Both will lead to the login page.

## Login Page // insert login page sc

## Signup Pages // insert signup page scs

## Patient Menu: Dashboard // insert patient dashboard scs
The upper right has a dropdown button after the name that shows options to either view the User Profile or Log Out. This page has a navigation bar to its left that contains the Patient Menu. There are also three (3) buttons near the middle of the page namely "Today", "Upcoming", and "Request Appointment".
By default, the dashboard shows the user their appointments for today. When the user presses "Upcoming", they will see their future appointments. The "Request Appointment" button takes the user to a new page wherein they can request for an appointment.

### Request Appointment // insert request appointment scs
The user is then given the chance to select the appointment's date and time of their choice. If there is already an appointment taking place at a certain time/s on that day, the time selection will mark those as grayed out.
The user will then provide a reason for consultation in the text box below, right before hitting "Next". And then, the next page contains notes for the patient, and the third page will show that your request has been sent in for approval.

## Patient Menu: Appointments // insert patient appointment sc
This page contains the user's ongoing appointments, follow-up appointments, and appointment history.

### Request Appointment // insert request appointment scs
The user is then given the chance to select the appointment's date and time of their choice. If there is already an appointment taking place at a certain time/s on that day, the time selection will mark those as grayed out.
The user will then provide a reason for consultation in the text box below, right before hitting "Next". And then, the next page contains notes for the patient, and the third page will show that your request has been sent in for approval.

## Patient Menu: Calendar // insert calendar scs
The calendar in this page shows the user their upcoming appointment/s. The buttons on the top right can also change what the calendar will show, either a month, a week, or a day.
The checkboxes at the top of the calendar can be toggled to filter the appointments that are pending, accepted, finished, and/or cancelled.

## Patient Menu: Patient Records: Patient Information // insert patient info sc
This page features a widget that shows the user their phone number and age, and the card that shows the patient's personal info, address info, and medical conditions.

## Patient Menu: Patient Records: Dental Records // insert dental records sc
The main feature of this page is the dental chart and it can be exported and/or printed, highlighting the tooth/teeth and root/s that have been worked on during an appointment.

## Patient Menu: E-Prescription //insert e-pres sc
This page shows the electronic/digital prescriptions that the dentist has given to the patient.

## Patient Menu: Payment Records //insert payment records sc
This page shows all the transactions that the patient has done based on the patient's appointments.

## Patient Menu: My Profile //insert my profile scs
In this page, there are three (3) tabs, namely: Overview, Edit Profile, and Change Password. Overview lets the user see their personal info, address info, and medical conditions that they've inputted from the sign up page. Edit profile and change password are self-explanatory.

## DENTIST MODULE

## Dentist Menu: Dashboard // insert dentist dashboard scs
For the dentist's dashboard, it shows the number of appointments, total patients, and pending appointment requests. On the left of the page is the dentist menu, and on the top right is the dropdown button that shows the View Profile and the Log Out.
There are also two (2) buttons near the middle of the page, namely "Today" and "Upcoming".
By default, the dashboard shows the dentist's appointments for today. When the dentist presses "Upcoming", it will show the upcoming appointments.

## Dentist Menu: Appointments // insert dentist appointment sc
This page shows the appointment requests from patients.

## Dentist Menu: Calendar // insert dentist calendar scs
The calendar in this page shows the dentist's upcoming appointment/s. The buttons on the top right can also change what the calendar will show, either a month, a week, or a day.
The checkboxes at the top of the calendar can be toggled to filter the appointments that are pending, accepted, finished, and/or cancelled.

## Dentist Menu: Patient Records: Patient Information // insert patient info sc dentist side
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Patient Information" button, allowing for more details to be shown.

### Patient Information // insert patient information sc dentist side
This page features a widget that shows the user their phone number and age, and the card that shows the patient's personal info, address info, and medical conditions.

## Dentist Menu: Patient Records: Dental Records // insert dental records sc dentist side
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Dental Record" button, allowing for the dental chart and records to be shown.

### Dental Records // insert dental records sc
The main feature of this page is the dental chart and it can be exported and/or printed, highlighting the tooth/teeth and root/s that have been worked on during an appointment.

## Dentist Menu: E-Prescription // insert eprescription dentist side sc
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Prescriptions" button, allowing for the selected patient's prescriptions to be shown.

### View Prescription // insert view prescriptions sc dentist side
This page shows the electronic/digital prescriptions that the dentist has given to the patient. Located at the top right is the "Create Prescription" button. 

#### Create Prescription // insert create prescriptions sc 
Contained in this page are the information that the dentist needs to fill up to generate a prescription for the patient.

## Dentist Menu: Payment Records // insert payment records sc dentist side
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Transactions" button, allowing for the selected patient's transactions to be shown.

### Payment Records // insert payment records 
This page shows all the transactions that the patient has done based on the patient's appointments.

## Dentist Menu: My Profile //insert my profile scs
In this page, there are three (3) tabs, namely: Overview, Edit Profile, and Change Password. Overview lets the user see their personal info, address info, and medical conditions that they've inputted from the sign up page. Edit profile and change password are self-explanatory.

## SECRETARY MODULE

## Secretary Menu: Dashboard // insert secretary dashboard scs
For the secretary's dashboard, it shows the number of appointments, total patients, and pending appointment requests. On the left of the page is the secretary menu, and on the top right is the dropdown button that shows the View Profile and the Log Out.
There are also two (2) buttons near the middle of the page, namely "Today" and "Upcoming".
By default, the dashboard shows the secretary's appointments for today. When the secretary presses "Upcoming", it will show the upcoming appointments.

## Secretary Menu: Appointments // insert secretary appointment sc
This page shows the appointment requests from patients.

## Secretary Menu: Calendar // insert secretary calendar scs
The calendar in this page shows the dentist's upcoming appointment/s. The buttons on the top right can also change what the calendar will show, either a month, a week, or a day.
The checkboxes at the top of the calendar can be toggled to filter the appointments that are pending, accepted, finished, and/or cancelled.

## Secretary Menu: Patient Records: Patient Information // insert patient info sc secretary side
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Patient Information" button, allowing for more details to be shown.

### Patient Information // insert patient information sc secretary side
This page features a widget that shows the user their phone number and age, and the card that shows the patient's personal info, address info, and medical conditions.

## Secretary Menu: Patient Records: Dental Records // insert dental records sc secretary side
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Dental Record" button, allowing for the dental chart and records to be shown.

### Dental Records // insert dental records sc
The main feature of this page is the dental chart and it can be exported and/or printed, highlighting the tooth/teeth and root/s that have been worked on during an appointment.

## Secretary Menu: E-Prescription // insert eprescription secretary side sc
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Prescriptions" button, allowing for the selected patient's prescriptions to be shown.

### View Prescription // insert view prescriptions sc secretary side
This page shows the electronic/digital prescriptions that the dentist has given to the patient.

## Secretary Menu: Payment Records // insert payment records sc secretary side
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Transactions" button, allowing for the selected patient's transactions to be shown.

### Payment Records // insert payment records 
This page shows all the transactions that the patient has done based on the patient's appointments.

## Dentist Menu: My Profile //insert my profile scs
In this page, there are three (3) tabs, namely: Overview, Edit Profile, and Change Password. Overview lets the user see their personal info, address info, and medical conditions that they've inputted from the sign up page. Edit profile and change password are self-explanatory.

## ADMIN MODULE


