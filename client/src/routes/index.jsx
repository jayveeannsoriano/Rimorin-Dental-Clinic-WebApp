import { useRoutes } from 'react-router-dom';

// routes
import DashboardRoutes from './DashboardRoutes';
import DentistDashboardRoutes from './DentistDashboardRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoute from './AdminRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([DashboardRoutes,AuthenticationRoutes, AdminRoute]);
}
