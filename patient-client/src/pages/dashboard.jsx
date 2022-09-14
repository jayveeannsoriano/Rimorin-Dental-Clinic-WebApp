import React from 'react';
import Header from './components/header.jsx'
import Sidebar from './components/sidebar.jsx'
import Footer from './components/footer.jsx'

function Dashboard(){
    return(
        <div>
            < Header />
            < Sidebar />
            < Footer />
        </div>
    );
}

export default Dashboard;