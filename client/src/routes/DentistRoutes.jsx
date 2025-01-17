import React from "react";
import { lazy } from "react";

// project imports
import DashboardLayout from "../layout/DashboardLayout";
import ErrorPage from "../components/errorpage";

// dashboard routing
const DashboardPage = lazy(() =>
  import("../pages/dashboard/dentist-dashboard")
);

// sidebar routing
const Appointments = lazy(() =>
  import("../pages/appointments/dentist-appointment")
);
const Calendar = lazy(() => import("../pages/calendar/index"));
const PatientInfo = lazy(() => import("../pages/patient-records/patient-info"));
const ExistingDentalRecord = lazy(() =>
  import("../pages/patient-records/dentist-module/existing-dental-record")
);
const Eprescription = lazy(() =>
  import("../pages/eprescription/dentist-module")
);
const PaymentRecords = lazy(() =>
  import("../pages/payment-records/dentist-module/index")
);
const Patients = lazy(() => import("../pages/patients/index"));
const DentistPatients = lazy(() => import("../pages/patients/dentist-module"));
const DentistUserProfile = lazy(() =>
  import("../pages/userprofile/dentist-module")
);

// patient list page routing
const DentalRecordPatientList = lazy(() =>
  import("../pages/patient-list/dental-record/dentist-module")
);
const PatientInfoPatientList = lazy(() =>
  import("../pages/patient-list/patient-info")
);
const PrescriptionPatientList = lazy(() =>
  import("../pages/patient-list/prescription/dentist-module")
);
const TransactionsPatientList = lazy(() =>
  import("../pages/patient-list/transactions")
);

//View Specific Dental Record
const ViewSpecificDentalRecord = lazy(() =>
  import("../pages/patient-records/view-dental-record")
);

//create prescription routing
const CreateEprescription = lazy(() =>
  import("../pages/eprescription/dentist-module/create-eprescription")
);

//create dental record routing
const CreateDentalRecord = lazy(() =>
  import("../pages/patient-records/dentist-module/create-dental-record")
);

////create receipt routing
//const CreateReceipt = lazy(() =>
//  import("../pages/payment-records/secretary-module/create-receipt")
//);

//edit dental record routing
const EditDentalRecord = lazy(() =>
  import("../pages/patient-records/dentist-module/edit-dental-record")
);

//create follow-up appointment
const CreateFollowUpAppointment = lazy(() =>
  import("../pages/appointments/follow-up-appointment")
);

// ==============================|| DASHBOARD ROUTING ||============================== //

const DentistRoutes = {
  path: "/dentist",
  element: <DashboardLayout />,
  children: [
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/dentist",
      element: <DashboardPage />,
    },
    {
      path: "/dentist/appointments",
      children: [
        {
          path: "/dentist/appointments",
          element: <Appointments />,
        },
        {
          path: "/dentist/appointments/follow-up-appointment",
          element: <CreateFollowUpAppointment />,
        },
      ],
    },
    {
      path: "/dentist/calendar",
      element: <Calendar />,
    },
    {
      path: "/dentist/patients",
      element: <Patients />,
    },
    {
      path: "/dentist/patients/view-patient",
      element: <DentistPatients />,
    },
    {
      path: "/dentist/patient-records",
      children: [
        {
          path: "/dentist/patient-records/patient-info",
          element: <PatientInfoPatientList />,
        },
        {
          path: "/dentist/patient-records/patient-info/view-patient-info",
          element: <PatientInfo />,
        },
      ],
    },
    {
      path: "/dentist/patient-records",
      children: [
        {
          path: "/dentist/patient-records/dental-record",
          element: <DentalRecordPatientList />,
        },
        {
          path: "/dentist/patient-records/dental-record/view-dental-records",
          element: <ExistingDentalRecord />,
        },
        {
          path: "/dentist/patient-records/dental-record/view-dental-records/record",
          element: <ViewSpecificDentalRecord />,
        },
        {
          path: "/dentist/patient-records/dental-record/create-dental-record",
          element: <CreateDentalRecord />,
        },
        {
          path: "/dentist/patient-records/dental-record/edit-dental-record",
          element: <EditDentalRecord />,
        },
      ],
    },
    {
      path: "/dentist/eprescription",
      children: [
        {
          path: "/dentist/eprescription",
          element: <PrescriptionPatientList />,
        },
        {
          path: "/dentist/eprescription/view-eprescription",
          element: <Eprescription />,
        },
        {
          path: "/dentist/eprescription/create-eprescription",
          element: <CreateEprescription />,
        },
      ],
    },
    {
      path: "/dentist/payment-records",
      children: [
        {
          path: "/dentist/payment-records",
          element: <TransactionsPatientList />,
        },
        {
          path: "/dentist/payment-records/:fname",
          element: <PaymentRecords />,
        },
        //{
        //  path: "/dentist/payment-records/create-receipt",
        //  element: <CreateReceipt />,
        //},
      ],
    },
    {
      path: "/dentist/userprofile",
      element: <DentistUserProfile />,
    },
  ],
};

export default DentistRoutes;
