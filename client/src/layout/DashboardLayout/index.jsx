import React, { useState } from "react";
import Header from './dashboard-header'
import Footer from './dashboard-footer'
import Sidebar from "./sidebar";
import Sidebar_Admin from "./sidebar-Admin";
import Sidebar_Dentist from "./sidebar-Dentist";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    const [isSidebar] = useState(true);

    return(
        <>
        {/* conditional to check user role and which sidebar to display */}
        {userInfo['user_role_id']==3 ?  <Sidebar_Admin isSidebar={isSidebar} /> : <Sidebar isSidebar={isSidebar} />}
            <main id="main" className="main">
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
    );
};

export default DashboardLayout;