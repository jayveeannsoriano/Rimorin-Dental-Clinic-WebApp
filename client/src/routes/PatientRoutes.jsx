import React from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

// dashboard routing
const DashboardPage = lazy(() => import('../pages/dashboard/patient-dashboard'));

// sidebar routing
const Appointments = lazy(() => import('../pages/appointments/index'));
const Calendar = lazy(() => import('../pages/calendar/index'));
const PatientInfo = lazy(() => import('../pages/patient-records/patient-module/patient-info'));
const DentalRecords = lazy(() => import('../pages/patient-records/dental-record'));
const Eprescription = lazy(() => import('../pages/eprescription/index'));
const PaymentRecords = lazy(() => import('../pages/payment-records/index'));
const UserProfile = lazy(() => import('../pages/userprofile/patient-module'));

//View Specific Dental Record
const ViewSpecificDentalRecord = lazy(() => import('../pages/patient-records/view-dental-record'));

// appointment request routing
const RequestAppointment = lazy(() => import('../pages/appointments/request-appointment'));

// patient info edit routing
const PatientInfoEdit = lazy(() => import ("../pages/patient-records/patient-module/patient-info-edit")); 


// ==============================|| DASHBOARD ROUTING ||============================== //

const PatientRoutes = {
    path: '/patient',
    element: <DashboardLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/patient',
            element: <DashboardPage />
        },
        {
            path: '/patient/appointments',
            element: <Appointments />
        },
        {
            path: '/patient/appointments',
            children: [
                {
                    path: '/patient/appointments/request-appointment',
                    element: <RequestAppointment />
                },
            ]
        },
        {
            path: '/patient/calendar',
            element: <Calendar/>
        },
        {
            path: '/patient/patient-records',
            children: [
                {
                    path: '/patient/patient-records/patient-info',
                    element: <PatientInfo />
                },

                {
                    path: '/patient/patient-records/patient-info-edit',
                    element: <PatientInfoEdit/>
                }
            ]
        },
        {
            path: '/patient/patient-records',
            children: [
                {
                    path: '/patient/patient-records/dental-record',
                    element: <DentalRecords />
                },
                {
                    path: '/patient/patient-records/dental-record/record',
                    element: <ViewSpecificDentalRecord />
                }
            ]
        },
        {
            path: '/patient/eprescription',
            element: <Eprescription />
        },
        {
            path: '/patient/payment-records',
            element: <PaymentRecords />
        },
        {
            path: '/patient/userprofile',
            element: <UserProfile />
        }
    ]
};

export default PatientRoutes;
