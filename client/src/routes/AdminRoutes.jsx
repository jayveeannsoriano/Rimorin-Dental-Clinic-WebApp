import React from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

//sidebar routing
const Dashboard = lazy(() => import('../pages/dashboard/admin-dashboard'));
const Calendar = lazy(() => import('../pages/calendar/admin-module/index'));
const ClinicHours = lazy(() => import('../pages/clinic-hours'));
const Accounts = lazy(() => import('../pages/accounts/index'));
const Patients = lazy(() => import('../pages/patients/index'));
const AdminUserProfile = lazy(() => import('../pages/userprofile/admin-module/index'));

//View Specific Dental Record
const ViewSpecificDentalRecord = lazy(() => import('../pages/patient-records/view-dental-record'));

const CreateAccount = lazy(() => import('../pages/accounts/create-account'));

const AdminPatientUI = lazy(() => import ("../pages/patients/admin-module/admin-patient-ui")); 


// ==============================|| ADMIN ROUTING ||============================== //
const AdminRoute ={
    path: '/admin',
    element: <DashboardLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/admin',
            element: <Dashboard />
        },
        {
            path: '/admin/clinic-hours',
            element: <ClinicHours />
        },
        {
            path: '/admin/calendar',
            element: <Calendar />
        },
        {
            path: '/admin/accounts',
            element: <Accounts />
        },
        {
            path: '/admin/accounts/create-account',
            element: <CreateAccount />
        },
        {
            path: '/admin/patients',
            element: <Patients />
        },
        {
            path: '/admin/patients/view-dental-record',
            element: <ViewSpecificDentalRecord />
        },
        {
            path: '/admin/userprofile',
            element: <AdminUserProfile />
        },
        {
            path:'/admin/patients/view-patient',
            element: <AdminPatientUI/>
        }
    ]
}
export default AdminRoute;