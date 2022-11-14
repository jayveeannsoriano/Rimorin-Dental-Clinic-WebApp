import React from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

//sidebar routing
const Appointments = lazy(() => import('../pages/appointments/index'));
const Calendar = lazy(() => import('../pages/calendar/index'));
const ClinicHours = lazy(() => import('../pages/clinic-hours'));
const Accounts = lazy(() => import('../pages/accounts/index'));
const Patients = lazy(() => import('../pages/patients/index'));
const BackUpnRestore = lazy(() => import('../pages/backupNrestore/index'));
const UserProfile = lazy(() => import('../pages/userprofile/index'));

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
            element: <Appointments />
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
            path: '/admin/backup-restore',
            element: < BackUpnRestore />
        },
        {
            path: '/admin/userprofile',
            element: <UserProfile />
        },
        {
            path:'/admin/patients/admin-module/admin-patient-ui',
            element: <AdminPatientUI/>
        }
    ]
}
export default AdminRoute;