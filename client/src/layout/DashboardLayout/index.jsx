import React, { useState } from "react";
import Header from './dashboard-header'
import Footer from './dashboard-footer'
import Sidebar_Patient from "./sidebar-Patient";
import Sidebar_Admin from "./sidebar-Admin";
import Sidebar_Dentist from "./sidebar-Dentist";
import Sidebar_Secretary from "./sidebar-Secretary";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    try {
        var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
        if(userInfo==null){
            window.location.replace("http://localhost:80/");
        }
        var userRole = userInfo['user_role_id'];
       
    } catch (error) {
        console.error("Website error");
        console.error(error);
    }
    const [isSidebar] = useState(true);
    
    var sidebarComponent = ""; 
    switch (userRole) {
        case 1:
            sidebarComponent = <Sidebar_Patient isSidebar={isSidebar} />; 
            break;

        case 2:
            sidebarComponent = <Sidebar_Secretary isSidebar={isSidebar} />; 
            break;
    
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