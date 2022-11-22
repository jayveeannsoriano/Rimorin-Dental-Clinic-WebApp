import React from 'react'
import { lazy } from 'react';

//project imports
import AuthLayout from '../layout/AuthLayout';

//landing page routing
const LandingPage = lazy(() => import('../pages/landingpage'));

//login & signup routing
const LoginPage = lazy(() => import('../pages/login/index'));
const SignUpPage = lazy(() => import('../pages/signup/index'));

//forgot password
const ForgotPassword = lazy(() => import('../pages/forgot-password/index'));

//reset password
const ResetPassword = lazy(() => import('../pages/reset-password/index'));


// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage />
      },
      {
        path: '/auth/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/auth/reset-password',
        element: <ResetPassword />
      },
      {
        path: '/auth/signup',
        element: <SignUpPage />
      }
    ]
};
export default AuthenticationRoutes;
