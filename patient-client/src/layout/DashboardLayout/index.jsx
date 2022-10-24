import React, { useState } from "react";
import Header from './dashboard-header'
import Footer from './dashboard-footer'
import Sidebar from "./sidebar";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [isSidebar] = useState(true);

    return(
        <>
        <Sidebar isSidebar={isSidebar} />
            <main id="main" className="main">
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
    );
};

export default DashboardLayout;