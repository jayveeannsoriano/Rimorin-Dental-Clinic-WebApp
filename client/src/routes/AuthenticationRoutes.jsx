import React from 'react'
import { lazy } from 'react';

//project imports
import LandingPageLayout from '../layout/LandingPageLayout';
import ErrorPage from '../components/errorpage';
import ToS from '../components/terms-of-use';
import Privacy from '../components/privacy-policy';

//landing page routing
const LandingPage = lazy(() => import('../pages/landingpage'));

//login & signup routing
const LoginPage = lazy(() => import('../pages/login/index'));
const SignUpPage = lazy(() => import('../pages/signup/index'));


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
          path: 'login',
          element: <LoginPage />
        },
        {
          path: 'signup',
          element: <SignUpPage />
        },
        
        //tos
        {
        path: 'tos',
        element: <ToS />
        },

        //privacy
        {
        path: 'privacy',
        element: <Privacy />
        }
    ]
};
export default AuthenticationRoutes;
