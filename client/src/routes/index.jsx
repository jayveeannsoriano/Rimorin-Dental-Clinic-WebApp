import { useRoutes } from 'react-router-dom';

// routes
import DashboardRoutes from './DashboardRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoute from './AdminRoutes';
import DentistDashboardRoutes from './DentistDashboardRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([DashboardRoutes,AuthenticationRoutes, AdminRoute, DentistDashboardRoutes]);
}
