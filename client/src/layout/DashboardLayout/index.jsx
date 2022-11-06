import React, { useState } from "react";
import Header from './dashboard-header'
import Footer from './dashboard-footer'
import Sidebar from "./sidebar";
import Sidebar_Admin from "./sidebar-Admin";
import Sidebar_Dentist from "./sidebar-Dentist";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    try {
        var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
        var userRole = userInfo['user_role_id'];
    } catch (error) {
        console.error("Website error");
        console.error(error);
    }
    const [isSidebar] = useState(true);
    
    var sidebarComponent = ""; 
    switch (userRole) {
        case 1:
            sidebarComponent = <Sidebar isSidebar={isSidebar} />; 
            break;

        case 2:
    
        case 3:
            sidebarComponent = <Sidebar_Dentist isSidebar={isSidebar} />; 
            break;

        case 4:
            sidebarComponent = <Sidebar_Admin isSidebar={isSidebar} />; 
            break;
        
    }

    return(
        <>
        {/* conditional to check user role and which sidebar to display */}
        {sidebarComponent}
            <main id="main" className="main">
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
    );
};

export default DashboardLayout;