import React from 'react'
import { lazy } from 'react';

//project imports
import LandingPageLayout from '../layout/LandingPageLayout';
import ErrorPage from '../components/errorpage';
import TermsOfUse from '../components/terms-of-use';
import PrivacyPolicy from '../components/privacy-policy';

//landing page routing
const LandingPage = lazy(() => import('../pages/landingpage'));

// ==============================|| LANDING PAGE ROUTING ||============================== //

const LandingPageRoutes = {
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
          path: 'terms-of-use',
          element: <TermsOfUse />
        },
        {
          path: 'privacy-policy',
          element: <PrivacyPolicy />
        }
    ]
};
export default LandingPageRoutes;