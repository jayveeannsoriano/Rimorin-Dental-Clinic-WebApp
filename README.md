
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

The command to activate both the server and the client is:
```bash
npm run develop
```


## PATIENT MODULE

## Landing Page 
The first thing the user will encounter when the web app loads is the landing page. It contains a navigation bar at the top that has the "Login" button.
It also has the "Make an Appointment" button at the left side of the page. Both will lead to the login page.

![Landing Page](/readmeImages/landing-page.PNG)

## Login Page
This page has a card wherein the user can input their credentials. If the user forgets their password, they can click the "Forgot Password" button located right below the text field for the password.

![Login Page](/readmeImages/login-page.PNG)

### Forgot Password
The user needs to input their email and upon clicking "Continue", an email will be sent to them that contains the link to reset their password.

![Forgot Password](/readmeImages/forgot-password.PNG)

#### Reset Password
After the user clicks the link in the email sent by the server, they will be redirected to this page. The user will then input the new password and re-enter it for confirmation before going back to login.

![Reset Password](/readmeImages/reset-password.PNG)

## Signup Pages 
These are comprised of 3 pages. The first page focuses more on the personal info. The second page focuses on the address. The third page focuses on the user's medical conditions that they may have. 

![Sign up Page 1](/readmeImages/signup-page-1.PNG)
![Sign up Page 2](/readmeImages/signup-page-2.PNG)
![Sign up Page 3](/readmeImages/signup-page-3.PNG)

## Patient Menu: Dashboard 
The upper right has a dropdown button after the name that shows options to either view the User Profile or Log Out. This page has a navigation bar to its left that contains the Patient Menu. There are also three (3) buttons near the middle of the page namely "Today", "Upcoming", and "Request Appointment".
By default, the dashboard shows the user their appointments for today. When the user presses "Upcoming", they will see their future appointments. The "Request Appointment" button takes the user to a new page wherein they can request for an appointment.

![Patient Dashboard](/readmeImages/patient-dashboard.PNG)
![Patient Dashboard Upcoming](/readmeImages/patient-dashboard-upcoming-appts.PNG)

### Request Appointment
The user is then given the chance to select the appointment's date and time of their choice. If there is already an appointment taking place at a certain time/s on that day, the time selection will mark those as grayed out.
The user will then provide a reason for consultation in the text box below, right before hitting "Next". And then, the next page contains notes for the patient, and the third page will show that your request has been sent in for approval.

![Request Appointment Page 1.1](/readmeImages/request-appointment-page-1_1.PNG)
![Request Appointment Page 1.2](/readmeImages/request-appointment-page-1_2.PNG)
![Request Appointment Page 2](/readmeImages/request-appointment-page-2.PNG)
![Request Appointment Page 3](/readmeImages/request-appointment-page-3.PNG)

## Patient Menu: Appointments
This page contains the user's ongoing appointments, follow-up appointments, and appointment history.

![Appointments](/readmeImages/patient-appointments-tab.PNG)

### Request Appointment
The user is then given the chance to select the appointment's date and time of their choice. If there is already an appointment taking place at a certain time/s on that day, the time selection will mark those as grayed out.
The user will then provide a reason for consultation in the text box below, right before hitting "Next". And then, the next page contains notes for the patient, and the third page will show that your request has been sent in for approval.

![Request Appointment Page 1.1](/readmeImages/request-appointment-page-1_1.PNG)
![Request Appointment Page 1.2](/readmeImages/request-appointment-page-1_2.PNG)
![Request Appointment Page 2](/readmeImages/request-appointment-page-2.PNG)
![Request Appointment Page 3](/readmeImages/request-appointment-page-3.PNG)

## Patient Menu: Calendar
The calendar in this page shows the user their upcoming appointment/s. The buttons on the top right can also change what the calendar will show, either a month, a week, or a day.
The checkboxes at the top of the calendar can be toggled to filter the appointments that are pending, accepted, finished, and/or cancelled.

![Calendar 1.1](/readmeImages/patient-calendar-tab-1_1.PNG)
![Calendar 1.2](/readmeImages/patient-calendar-tab-1_2.PNG)
![Calendar 1.3](/readmeImages/patient-calendar-tab-1_3.PNG)

## Patient Menu: Patient Records: Patient Information 
This page features a widget that shows the user their phone number and age, and the card that shows the patient's personal info, address info, and medical conditions.

![Patient Info](/readmeImages/patient-info-tab.PNG)

## Patient Menu: Patient Records: Dental Records
The main feature of this page is the dental chart and it can be exported and/or printed, highlighting the tooth/teeth and root/s that have been worked on during an appointment.

![Dental Records](/readmeImages/dental-records-tab.PNG)

## Patient Menu: E-Prescription
This page shows the electronic/digital prescriptions that the dentist has given to the patient.

![Patient E-Prescription](/readmeImages/patient-eprescription.PNG)

## Patient Menu: Payment Records
This page shows all the transactions that the patient has done based on the patient's appointments.

![Payment Records](/readmeImages/patient-payment-records.PNG)

## Patient Menu: My Profile
In this page, there are three (3) tabs, namely: Overview, Edit Profile, and Change Password. Overview lets the user see their personal info, address info, and medical conditions that they've inputted from the sign up page. Edit profile and change password are self-explanatory.

![Patient My Profile 1](/readmeImages/patient-myprofile-1_1.PNG)
![Patient My Profile 2](/readmeImages/patient-myprofile-1_2.PNG)
![Patient My Profile 3](/readmeImages/patient-myprofile-1_3.PNG)

## DENTIST MODULE

## Dentist Menu: Dashboard
For the dentist's dashboard, it shows the number of appointments, total patients, and pending appointment requests. On the left of the page is the dentist menu, and on the top right is the dropdown button that shows the View Profile and the Log Out.
There are also two (2) buttons near the middle of the page, namely "Today" and "Upcoming".
By default, the dashboard shows the dentist's appointments for today. When the dentist presses "Upcoming", it will show the upcoming appointments.

![Dentist Dashboard](/readmeImages/dentist-dashboard.PNG)
![Dentist Dashboard Upcoming](/readmeImages/dentist-dashboard-upcoming.PNG)

## Dentist Menu: Appointments
This page shows the appointment requests from patients.

![Dentist Appointment](/readmeImages/dentist-appointment.PNG)

## Dentist Menu: Calendar
The calendar in this page shows the dentist's upcoming appointment/s. The buttons on the top right can also change what the calendar will show, either a month, a week, or a day.
The checkboxes at the top of the calendar can be toggled to filter the appointments that are pending, accepted, finished, and/or cancelled.

![Dentist Calendar](/readmeImages/dentist-calendar.PNG)

## Dentist Menu: Patient Records: Patient Information
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Patient Information" button, allowing for more details to be shown.

![Dentist Patient Info](/readmeImages/dentist-patient-records-patient-info-1.PNG)


### Patient Information
This page features a widget that shows the user their phone number and age, and the card that shows the patient's personal info, address info, and medical conditions.

![Dentist Patient Info](/readmeImages/dentist-patient-records-patient-info-1_2.PNG)

## Dentist Menu: Patient Records: Dental Records
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Dental Record" button, allowing for the dental chart and records to be shown.

![Dentist Dental Records](/readmeImages/dentist-dental-records-1_1.PNG)

### Dental Records
The main feature of this page is the dental chart and it can be exported and/or printed, highlighting the tooth/teeth and root/s that have been worked on during an appointment.

![Dentist Dental Records](/readmeImages/dentist-dental-records-1_2.PNG)
![Dentist Dental Records](/readmeImages/dentist-dental-records-1_2_2.PNG)

## Dentist Menu: E-Prescription
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Prescriptions" button, allowing for the selected patient's prescriptions to be shown.

![Dentist E-Prescription](/readmeImages/dentist-eprescriptions-1.PNG)

### View Prescription
This page shows the electronic/digital prescriptions that the dentist has given to the patient. Located at the top right is the "Create Prescription" button. 
![View Prescription](/readmeImages/dentist-eprescriptions-2.PNG)

#### Create Prescription 
Contained in this page are the information that the dentist needs to fill up to generate a prescription for the patient.

![View Prescription](/readmeImages/dentist-eprescriptions-2_2.PNG)

## Dentist Menu: Payment Records
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Transactions" button, allowing for the selected patient's transactions to be shown.

![Payment Records](/readmeImages/dentist-payment-records-1.PNG)

### Payment Records 
This page shows all the transactions that the patient has done based on the patient's appointments.

![Payment Records](/readmeImages/dentist-payment-records-2.PNG)

## Dentist Menu: My Profile
In this page, there are three (3) tabs, namely: Overview, Edit Profile, and Change Password. Overview lets the user see their personal info, address info, and medical conditions that they've inputted from the sign up page. Edit profile and change password are self-explanatory.

![Dentist My Profile 1](/readmeImages/dentist-myprofile-1_1.PNG)
![Dentist My Profile 2](/readmeImages/dentist-myprofile-1_2.PNG)
![Dentist My Profile 3](/readmeImages/dentist-myprofile-1_3.PNG)

## SECRETARY MODULE

## Secretary Menu: Dashboard
For the secretary's dashboard, it shows the number of appointments, total patients, and pending appointment requests. On the left of the page is the secretary menu, and on the top right is the dropdown button that shows the View Profile and the Log Out.
There are also two (2) buttons near the middle of the page, namely "Today" and "Upcoming".
By default, the dashboard shows the dentist's appointments for today. When the secretary presses "Upcoming", it will show the upcoming appointments.

[Secretary Dashboard](/readmeImages/secretary-dashboard.PNG)
[Secretary Dashboard Upcoming](/readmeImages/secretary-dashboard-upcoming.PNG)

## Secretary Menu: Appointments
This page shows the appointment requests from patients.

[Secretary Appointments](/readmeImages/secretary-appointments.PNG)

## Secretary Menu: Calendar
The calendar in this page shows the dentist's upcoming appointment/s. The buttons on the top right can also change what the calendar will show, either a month, a week, or a day.
The checkboxes at the top of the calendar can be toggled to filter the appointments that are pending, accepted, finished, and/or cancelled.

[Secretary Calendar](/readmeImages/secretary-calendar.PNG)

## Secretary Menu: Patient Records: Patient Information
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Patient Information" button, allowing for more details to be shown.

[Patient Info](/readmeImages/secretary-patient-records-patient-info-1.PNG)

### Patient Information
This page features a widget that shows the user their phone number and age, and the card that shows the patient's personal info, address info, and medical conditions.

[Patient Info](/readmeImages/secretary-patient-records-patient-info-2.PNG)

## Secretary Menu: Patient Records: Dental Records
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Dental Record" button, allowing for the dental chart and records to be shown.

[Dental Records](/readmeImages/secretary-patient-records-dental-records-1.PNG)

### Dental Records
The main feature of this page is the dental chart and it can be exported and/or printed, highlighting the tooth/teeth and root/s that have been worked on during an appointment.

[Dental Records](/readmeImages/secretary-patient-records-dental-records-2.PNG)

## Secretary Menu: E-Prescription
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Prescriptions" button, allowing for the selected patient's prescriptions to be shown.

[Secretary E-Prescription](/readmeImages/secretary-eprescriptions-1.PNG)

### View Prescription 
This page shows the electronic/digital prescriptions that the dentist has given to the patient.

[Secretary E-Prescription](/readmeImages/secretary-eprescriptions-2.PNG)

## Secretary Menu: Payment Records 
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Transactions" button, allowing for the selected patient's transactions to be shown.

[Payment Records](/readmeImages/secretary-payment-records-1.PNG)

### Payment Records 
This page shows all the transactions that the patient has done based on the patient's appointments.

[Payment Records](/readmeImages/secretary-payment-records-2.PNG)

## Secretary Menu: My Profile
In this page, there are three (3) tabs, namely: Overview, Edit Profile, and Change Password. Overview lets the user see their personal info, address info, and medical conditions that they've inputted from the sign up page. Edit profile and change password are self-explanatory.

![Secretary My Profile 1.1](/readmeImages/dentist-myprofile-1_1.PNG)
![Secretary My Profile 1.2](/readmeImages/dentist-myprofile-1_2.PNG)
![Secretary My Profile 2](/readmeImages/dentist-myprofile-2.PNG)
![Secretary My Profile 3](/readmeImages/dentist-myprofile-3.PNG)

## ADMIN MODULE

## Admin Menu: Dashboard
For the admin's dashboard, it shows the number of appointments, total patients, and pending appointment requests. On the left of the page is the admin menu, and on the top right is the dropdown button that shows the View Profile and the Log Out.
There are also two (2) buttons near the middle of the page, namely "Today" and "Upcoming".
By default, the dashboard shows the dentist's appointments for today. When the secretary presses "Upcoming", it will show the upcoming appointments.

[Admin Dashboard](/readmeImages/secretary-dashboard.PNG)
[Admin Dashboard Upcoming](/readmeImages/secretary-dashboard-upcoming.PNG)

## Admin Menu: Clinic Hours
This page gives the admin the ability to adjust the dental clinic's start and end times and on which days that it will be open and closed.

[Admin Clinic Hours](/readmeImages/admin-clinic-hours.PNG)

## Admin Menu: Calendar
The calendar in this page shows the dentist's upcoming appointment/s. The buttons on the top right can also change what the calendar will show, either a month, a week, or a day.
The checkboxes at the top of the calendar can be toggled to filter the appointments that are pending, accepted, finished, and/or cancelled.

[Admin Calendar](/readmeImages/admin-calendar.PNG)

## Admin Menu: Accounts
In this page, there are three (3) buttons, namely: Active Accounts, Archived Accounts, and Add New Account. The default page shown is the Active Accounts page, which contains the accounts in the database that are active. The accounts can be either viewed or archived. The Archived Accounts page contains the accounts that have been archived. They can either be viewed or unarchived. The third button leads to a page that allows the admin to create a new account that can be assigned to be a patient, the dentist or the secretary through the Type of User dropdown button. 

[Admin Account Active Accounts](/readmeImages/active-accounts.PNG)
[Admin Account Archived Accounts](/readmeImages/archived-account.PNG)
[Admin Account Create Account](/readmeImages/create-account.PNG)

## Admin Menu: Patients
This page shows all the widgets of the patients that are in the database, and each one of them has a "View Patient Records" button, allowing for more details to be shown.

[Admin Patients](/readmeImages/admin-patients-1.PNG)

### Patient Records
This page combines the patient information and dental records pages from the previous modules into one page. The four (4) buttons below the patient information are Dental Record, Transactions, E-Prescriptions, and Patient Information, also pages from the previous modules merged into one page. 

[Patient Records](/readmeImages/admin-patients-2.PNG)
[Patient Records](/readmeImages/admin-patients-2_2.PNG)
[Patient Records](/readmeImages/admin-patients-3.PNG)
[Patient Records](/readmeImages/admin-patients-4.PNG)
[Patient Records](/readmeImages/admin-patients-5.PNG)

## Admin Menu: My Profile
In this page, there are three (3) tabs, namely: Overview, Edit Profile, and Change Password. Overview lets the user see their personal info, address info, and medical conditions that they've inputted from the sign up page. Edit profile and change password are self-explanatory.

[Admin Profile](/readmeImages/admin-myprofile-1.PNG)
[Admin Profile](/readmeImages/admin-myprofile-1_2.PNG)
[Admin Profile](/readmeImages/admin-myprofile-1_3.PNG)
[Admin Profile](/readmeImages/admin-myprofile-2.PNG)
[Admin Profile](/readmeImages/admin-myprofile-3.PNG)