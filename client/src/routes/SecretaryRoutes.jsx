import React from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

// dashboard routing
const DashboardPage = lazy(() => import('../pages/dashboard/secretary-dashboard'));

// sidebar routing
const Appointments = lazy(() => import('../pages/appointments/dentist-appointment'));
const Calendar = lazy(() => import('../pages/calendar/index'));
const PatientInfo = lazy(() => import('../pages/patient-records/patient-info'));
const DentalRecords = lazy(() => import('../pages/patient-records/dental-record'));
const Eprescription = lazy(() => import('../pages/eprescription'));
const PaymentRecords = lazy(() => import('../pages/payment-records/secretary-module/index'));
const UserProfile = lazy(() => import('../pages/userprofile/index'));

// patient list page routing
const DentalRecordPatientList = lazy(() => import('../pages/patient-list/dental-record'));
const PatientInfoPatientList = lazy(() => import('../pages/patient-list/patient-info'));
const PrescriptionPatientList = lazy(() => import('../pages/patient-list/prescription'));
const TransactionsPatientList = lazy(() => import('../pages/patient-list/transactions'));

//create receipt routing
const CreateReceipt = lazy(() => import('../pages/payment-records/secretary-module/create-receipt'));

// ==============================|| DASHBOARD ROUTING ||============================== //

const SecretaryRoutes = {
    path: '/secretary',
    element: <DashboardLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/secretary',
            element: <DashboardPage />
        },
        {
            path: '/secretary/appointments',
            element: <Appointments />
        },
        {
            path: '/secretary/calendar',
            element: <Calendar/>
        },
        {
            path: '/secretary/patient-records',
            children: [
                {
                    path: '/secretary/patient-records/patient-info',
                    element: <PatientInfoPatientList/>
                },
                {
                    path: '/secretary/patient-records/patient-info/:fname',
                    element: <PatientInfo />
                }
            ]
        },
        {
            path: '/secretary/patient-records',
            children: [
                {
                    path: '/secretary/patient-records/dental-record',
                    element: <DentalRecordPatientList />
                },
                {
                    path: '/secretary/patient-records/dental-record/:fname',
                    element: <DentalRecords />
                }
            ]
        },
        {
            path: '/secretary/eprescription',
            children: [
                {
                    path: '/secretary/eprescription',
                    element: <PrescriptionPatientList />
                },
                {
                    path: '/secretary/eprescription/:fname',
                    element: <Eprescription />
                }
            ]
        },
        {
            path: '/secretary/payment-records',
            children: [
                {
                    path: '/secretary/payment-records',
                    element: <TransactionsPatientList />
                },
                {
                    path: '/secretary/payment-records/:fname',
                    element: <PaymentRecords />
                },
                {
                    path: '/secretary/payment-records/create-receipt',
                    element: <CreateReceipt />
                }
            ]
        },
        {
            path: '/secretary/userprofile/',
            // path: '/dashboard/userprofile/:username', <-- put /:username to insert username of user in url path
            element: <UserProfile />
        }
    ]
};

export default SecretaryRoutes;
