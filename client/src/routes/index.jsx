import { useRoutes } from 'react-router-dom';

// routes
import PatientRoutes from './PatientRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoute from './AdminRoutes';
import DentistRoutes from './DentistRoutes';
import SecretaryRoutes from './SecretaryRoutes'
import LandingPageRoutes from './LandingPageRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([LandingPageRoutes, PatientRoutes, AuthenticationRoutes, AdminRoute, DentistRoutes, SecretaryRoutes]);
}
