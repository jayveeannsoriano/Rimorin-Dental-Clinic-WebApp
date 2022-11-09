import React from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

// dashboard routing
const DashboardPage = lazy(() => import('../pages/dashboard/dentist-dashboard'));

// sidebar routing
const Appointments = lazy(() => import('../pages/appointments/dentist-appointment'));
const Calendar = lazy(() => import('../pages/calendar/index'));
const PatientInfo = lazy(() => import('../pages/patient-records/patient-info'));
const DentalRecords = lazy(() => import('../pages/patient-records/dentist-module'));
const Eprescription = lazy(() => import('../pages/eprescription//'));
const PaymentRecords = lazy(() => import('../pages/payment-records/index'));
const DentistUserProfile = lazy(() => import('../pages/userprofile/dentist-module'));

// patient list page routing
const DentalRecordPatientList = lazy(() => import('../pages/patient-list/dental-record'));
const PatientInfoPatientList = lazy(() => import('../pages/patient-list/patient-info'));
const PrescriptionPatientList = lazy(() => import('../pages/patient-list/prescription'));
const TransactionsPatientList = lazy(() => import('../pages/patient-list/transactions'));

//create prescription routing
const CreateEprescription = lazy(() => import('../pages/eprescription/dentist-module/create-eprescription'));

//create dental record routing
const CreateDentalRecord = lazy(() => import('../pages/patient-records/dentist-module/create-dental-record'));

// ==============================|| DASHBOARD ROUTING ||============================== //

const DentistRoutes = {
    path: '/dentist',
    element: <DashboardLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/dentist',
            element: <DashboardPage />
        },
        {
            path: '/dentist/appointments',
            element: <Appointments />
        },
        {
            path: '/dentist/calendar',
            element: <Calendar/>
        },
        {
            path: '/dentist/patient-records',
            children: [
                {
                    path: '/dentist/patient-records/patient-info',
                    element: <PatientInfoPatientList/>
                },
                {
                    path: '/dentist/patient-records/patient-info/:fname',
                    element: <PatientInfo />
                }
            ]
        },
        {
            path: '/dentist/patient-records',
            children: [
                {
                    path: '/dentist/patient-records/dental-record',
                    element: <DentalRecordPatientList />
                },
                {
                    path: '/dentist/patient-records/dental-record/:fname',
                    element: <DentalRecords />
                },
                {
                    path: '/dentist/patient-records/dental-record/create-dental-record',
                    element: <CreateDentalRecord />
                }
            ]
        },
        {
            path: '/dentist/eprescription',
            children: [
                {
                    path: '/dentist/eprescription',
                    element: <PrescriptionPatientList />
                },
                {
                    path: '/dentist/eprescription/:fname',
                    element: <Eprescription />
                },
                {
                    path: '/dentist/eprescription/create-eprescription',
                    element: <CreateEprescription />
                }
            ]
        },
        {
            path: '/dentist/payment-records',
            children: [
                {
                    path: '/dentist/payment-records',
                    element: <TransactionsPatientList />
                },
                {
                    path: '/dentist/payment-records/:fname',
                    element: <PaymentRecords />
                }
            ]
        },
        {
            path: '/dentist/userprofile/',
            // path: '/dashboard/userprofile/:username', <-- put /:username to insert username of user in url path
            element: <DentistUserProfile />
        }
    ]
};

export default DentistRoutes;
