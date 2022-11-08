import React from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

// dashboard routing
const DashboardPage = lazy(() => import('../pages/dashboard/dentist-dashboard')); //CHANGED

// sidebar routing
const Appointments = lazy(() => import('../pages/appointments/index'));
const Calendar = lazy(() => import('../pages/calendar/index'));
const PatientInfo = lazy(() => import('../pages/patient-records/patient-info'));
const DentalRecords = lazy(() => import('../pages/patient-records/dental-record'));
const Eprescription = lazy(() => import('../pages/eprescription'));
const PaymentRecords = lazy(() => import('../pages/payment-records/secretary-module'));
const UserProfile = lazy(() => import('../pages/userprofile/index'));

//create receipt routing
const CreateReceipt = lazy(() => import('../pages/payment-records/secretary-module/create-receipt'));

// ==============================|| DASHBOARD ROUTING ||============================== //

const DentistDashboardRoutes = {
    path: '/secretary',
    element: <DashboardLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/secretary/dashboard',
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
                    element: <PatientInfo />
                }
            ]
        },
        {
            path: '/secretary/patient-records',
            children: [
                {
                    path: '/secretary/patient-records/dental-record',
                    element: <DentalRecords />
                }
            ]
        },
        {
            path: '/secretary/eprescription',
            element: <Eprescription />
        },
        {
            path: '/secretary/payment-records',
            element: <PaymentRecords />,
            children: [
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

export default DentistDashboardRoutes;
