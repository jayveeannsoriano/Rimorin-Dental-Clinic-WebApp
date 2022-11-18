import React from 'react'
import { lazy } from 'react';

//project imports
import LandingPageLayout from '../layout/LandingPageLayout';
import AuthLayout from '../layout/AuthLayout';
import ErrorPage from '../components/errorpage';
import TermsOfUse from '../components/terms-of-use';
import PrivacyPolicy from '../components/privacy-policy';

//landing page routing
const LandingPage = lazy(() => import('../pages/landingpage'));

//login & signup routing
const LoginPage = lazy(() => import('../pages/login/index'));
const SignUpPage = lazy(() => import('../pages/signup/index'));

//forgot password
const ForgotPassword = lazy(() => import('../pages/forgot-password/index'));


// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <LandingPageLayout />,
    children: [
        {
            path: '*',
            element: <ErrorPage />
        },
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: '/auth',
          element: <AuthLayout />,
          children: [
            {
              path: '/auth/login',
              element: <LoginPage />
            },
            {
              path: '/auth/forgot-password',
              element: <ForgotPassword />
            },
            {
              path: '/auth/signup',
              element: <SignUpPage />
            }
          ]
        },
        {
          path: 'terms-of-use',
          element: <TermsOfUse />
        },
        {
          path: 'privacy-policy',
          element: <PrivacyPolicy />
        }
    ]
};
export default AuthenticationRoutes;
