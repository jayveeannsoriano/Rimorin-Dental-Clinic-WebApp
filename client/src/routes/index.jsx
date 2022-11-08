import { useRoutes } from 'react-router-dom';

// routes
import PatientRoutes from './PatientRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoute from './AdminRoutes';
import DentistRoutes from './DentistRoutes';
import SecretaryRoutes from './SecretaryRoutes'

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([PatientRoutes, AuthenticationRoutes, AdminRoute, DentistRoutes, SecretaryRoutes]);
}
