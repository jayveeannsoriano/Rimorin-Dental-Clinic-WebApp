import React from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

// dashboard routing
const DashboardPage = lazy(() => import('../pages/dashboard/index'));

// sidebar routing
const Appointments = lazy(() => import('../pages/appointments/index'));
const Calendar = lazy(() => import('../pages/calendar/index'));
const PatientInfo = lazy(() => import('../pages/patient-records/patient-info'));
const DentalRecords = lazy(() => import('../pages/patient-records/dental-record'));
const Eprescription = lazy(() => import('../pages/eprescription/index'));
const PaymentRecords = lazy(() => import('../pages/payment-records/index'));
const UserProfile = lazy(() => import('../pages/userprofile/index'));

// appointment request routing
const RequestAppointment = lazy(() => import('../pages/appointments/request-appointment'));


// ==============================|| DASHBOARD ROUTING ||============================== //

const DashboardRoutes = {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/dashboard',
            element: <DashboardPage />
        },
        {
            path: '/dashboard/appointments',
            element: <Appointments />
        },
        {
            path: '/dashboard/appointments',
            children: [
                {
                    path: '/dashboard/appointments/request-appointment',
                    element: <RequestAppointment />
                },
            ]
        },
        {
            path: '/dashboard/calendar',
            element: <Calendar/>
        },
        {
            path: '/dashboard/patient-records',
            children: [
                {
                    path: '/dashboard/patient-records/patient-info',
                    element: <PatientInfo />
                }
            ]
        },
        {
            path: '/dashboard/patient-records',
            children: [
                {
                    path: '/dashboard/patient-records/dental-record',
                    element: <DentalRecords />
                }
            ]
        },
        {
            path: '/dashboard/eprescription',
            element: <Eprescription />
        },
        {
            path: '/dashboard/payment-records',
            element: <PaymentRecords />
        },
        {
            path: '/dashboard/userprofile',
            // path: '/dashboard/userprofile/:username', <-- put /:username to insert username of user in url path
            element: <UserProfile />
        }
    ]
};

export default DashboardRoutes;
