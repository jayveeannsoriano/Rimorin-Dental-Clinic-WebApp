import { useRoutes } from 'react-router-dom';

// routes
import DashboardRoutes from './DashboardRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([DashboardRoutes, AuthenticationRoutes]);
}
