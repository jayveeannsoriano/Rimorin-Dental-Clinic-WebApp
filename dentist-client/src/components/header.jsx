import React from "react";

function Header() {
    return(
        <div>
        {/* Header */}
            <meta charset="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

            <title>Navbar - Rimorin Dental Clinic</title>
            <meta content="" name="description"/>
            <meta content="" name="keywords"/>

            {/*Favicons*/}
            <link href="assets/img/favicon.png" rel="icon"/>
            <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

            {/*Google Fonts*/}
            <link href="https://fonts.gstatic.com" rel="preconnect"/>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
            
            {/*Calendar Fonts*/}
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="Calendar/fonts/icomoon/style.css"/>
            <link href='Calendar/fullcalendar/packages/core/main.css' rel='stylesheet'/>
            <link href='Calendar/fullcalendar/packages/daygrid/main.css' rel='stylesheet'/>

            {/* Calendar Bootstrap CSS */}
            <link rel="stylesheet" href="Calendar/css/bootstrap.min.css"/>
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
            <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
            <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet"/>
            <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet"/>
            <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
            <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet"/>

            {/* Calendar Style */}
            <link rel="stylesheet" href="Calendar/css/style.css"/>

            {/*Vendor CSS Files*/}
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
            <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
            <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet"/>
            <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet"/>
            <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
            <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet"/>

            {/*Template Main CSS File*/}
            <link href="assets/css/style.css" rel="stylesheet"/>

            {/* Vendor JS Files */}
            <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/chart.js/chart.min.js"></script>
            <script src="assets/vendor/echarts/echarts.min.js"></script>
            <script src="assets/vendor/quill/quill.min.js"></script>
            <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
            <script src="assets/vendor/tinymce/tinymce.min.js"></script>

            {/* Template Main JS File */}
            <script src="assets/js/main.js"></script>
        
        </div>
    )
}

export default Header;