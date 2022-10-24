import React from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

// dashboard routing
const DashboardPage = lazy(() => import('../pages/dashboard/index'));

// sidebar routing
const Appointments = lazy(() => import('../pages/appointments/index'));
// const Calendar = lazy(() => import('../pages/calendar/index'));
// const PatientRecords = lazy(() => import('../pages/patient-records/index'));
const PatientInfo = lazy(() => import('../pages/patient-records/patient-info'));
// const DentalRecords = lazy(() => import('../pages/dentalrecords/index'));
const Eprescription = lazy(() => import('../pages/eprescription/index'));
const PaymentRecords = lazy(() => import('../pages/payment-records/index'));
const UserProfile = lazy(() => import('../pages/userprofile/index'));

// appointment request routing
const RequestAppointment = lazy(() => import('../pages/appointments/request-appointment/index.jsx'));

// ==============================|| DASHBOARD ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <DashboardLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: 'dashboard',
            element: <DashboardPage />
        },
        {
            path: 'appointments',
            element: <Appointments />
        },
        {
            path: 'appointments',
            children: [
                {
                    path: 'request-appointment',
                    element: <RequestAppointment />
                }
            ]
        },
        
        // {
        //     path: 'calendar',
        //     element: <Calendar/>
        // },
        {
            path: 'patientrecords',
            children: [
                {
                    path: 'patientinfo',
                    element: <PatientInfo />
                }
            ]
        },
        // {
        //     path: 'patientrecords',
        //     children: [
        //         {
        //             path: '/dentalrecord',
        //             element: <DentalRecords />
        //         }
        //     ]
        // },
        {
            path: 'eprescription',
            element: <Eprescription />
        },
        {
            path: 'payment-records',
            element: <PaymentRecords />
        },
        {
            path: 'userprofile',
            element: <UserProfile />
        }
    ]
};

export default MainRoutes;
