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
const Eprescription = lazy(() => import('../pages/eprescription/index'));
const PaymentRecords = lazy(() => import('../pages/payment-records/index'));
const UserProfile = lazy(() => import('../pages/userprofile/index'));

// appointment request routing
const RequestAppointment = lazy(() => import('../pages/appointments/request-appointment'));


// ==============================|| DASHBOARD ROUTING ||============================== //

const DentistDashboardRoutes = {
    path: '/dentist-dashboard', // CHANGED
    element: <DashboardLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/dentist-dashboard',//CHANGED
            element: <DashboardPage />
        },
        {
            path: '/dentist-dashboard/appointments',
            element: <Appointments />
        },
        {
            path: '/dentist-dashboard/appointments',
            children: [
                {
                    path: '/dentist-dashboard/appointments/request-appointment',
                    element: <RequestAppointment />
                },
            ]
        },
        {
            path: '/dentist-dashboard/calendar',
            element: <Calendar/>
        },
        {
            path: '/dentist-dashboard/patient-records',
            children: [
                {
                    path: '/dentist-dashboard/patient-records/patient-info',
                    element: <PatientInfo />
                }
            ]
        },
        {
            path: '/dentist-dashboard/patient-records',
            children: [
                {
                    path: '/dentist-dashboard/patient-records/dental-record',
                    element: <DentalRecords />
                }
            ]
        },
        {
            path: '/dentist-dashboard/eprescription',
            element: <Eprescription />
        },
        {
            path: '/dentist-dashboard/payment-records',
            element: <PaymentRecords />
        },
        {
            path: '/dentist-dashboard/userprofile/',
            // path: '/dashboard/userprofile/:username', <-- put /:username to insert username of user in url path
            element: <UserProfile />
        }
    ]
};

export default DentistDashboardRoutes;
