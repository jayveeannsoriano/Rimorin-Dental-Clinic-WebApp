import React,{useState} from 'react';
import { lazy } from 'react';

// project imports
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../components/errorpage';

// dashboard routing
const DashboardPage = lazy(() => import('../pages/dashboard/secretary-dashboard'));

// sidebar routing
const Appointments = lazy(() => import('../pages/appointments/secretary-appointment/index'));
const Calendar = lazy(() => import('../pages/calendar/index'));
const PatientInfo = lazy(() => import('../pages/patient-records/patient-info'));
const DentalRecords = lazy(() => import('../pages/patient-records/dental-record'));
const Eprescription = lazy(() => import('../pages/eprescription/index'));
const PaymentRecords = lazy(() => import('../pages/payment-records/secretary-module/index'));
const Patients = lazy(() => import('../pages/patients/index'));
const SecretaryPatients = lazy(() => import('../pages/patients/secretary-module'));
const SecretaryUserProfile = lazy(() => import('../pages/userprofile/secretary-module/index'));

//View Specific Dental Record
const ViewSpecificDentalRecord = lazy(() => import('../pages/patient-records/view-dental-record'));

// patient list page routing
const DentalRecordPatientList = lazy(() => import('../pages/patient-list/dental-record'));
const PatientInfoPatientList = lazy(() => import('../pages/patient-list/patient-info/index-secretary'));
const PrescriptionPatientList = lazy(() => import('../pages/patient-list/prescription/secretary-module/index'));
const TransactionsPatientList = lazy(() => import('../pages/patient-list/transactions/secretary-module'));

//create receipt routing
const CreateReceipt = lazy(() => import('../pages/payment-records/secretary-module/create-receipt'));

//create follow-up appointment
const CreateFollowUpAppointment = lazy(() => import('../pages/appointments/follow-up-appointment'));

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
            children: [
                {
                    path: '/secretary/appointments',
                    element: <Appointments />
                },
                {
                    path: '/secretary/appointments/follow-up-appointment',
                    element: <CreateFollowUpAppointment />
                },
            ]
        },
        {
            path: '/secretary/calendar',
            element: <Calendar/>
        },
        {
            path: '/secretary/patients',
            element: <Patients/>
        },
        {
            path:'/secretary/patients/view-patient',
            element: <SecretaryPatients/>
        },
        {
            path: '/secretary/patient-records',
            children: [
                {
                    path: '/secretary/patient-records/patient-info',
                    element: <PatientInfoPatientList/>
                },
                {
                    path: '/secretary/patient-records/patient-info/view-patient-info',
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
                    path: '/secretary/patient-records/dental-record/view-dental-records',
                    element: <DentalRecords />
                },
                {
                    path: '/secretary/patient-records/dental-record/view-dental-records/record',
                    element: <ViewSpecificDentalRecord />
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
                    element: <TransactionsPatientList/>
                },
                {
                    path: '/secretary/payment-records/view-transactions',
                    element: <PaymentRecords />
                },
                {
                    path: '/secretary/payment-records/create-receipt',
                    element: <CreateReceipt/>
                }
            ]
        },
        {
            path: '/secretary/userprofile/',
            element: <SecretaryUserProfile />
        }
    ]
};

export default SecretaryRoutes;
