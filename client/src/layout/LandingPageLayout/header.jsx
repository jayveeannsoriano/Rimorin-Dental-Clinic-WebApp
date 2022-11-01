import React from "react";

function Header() {
    return(
        <div>
                        {/* Top Bar
                        <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="info d-flex align-items-center">
                        <i className="fa-regular fa-envelope fa-sm"></i>
                        <a href={"mailto:contact@example.com"}>rimorin.dental@gmail.com</a>
                        <i className="fa-regular fa-phone fa-sm"></i> +639 265 785 456 
                    </div>
                </div>
            </div> */}

            {/* Header */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a href="/">Rimorin Dental Clinic</a></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href={'#hero'}>Home</a></li>
                            <li><a className="nav-link scrollto" href={'#about'}>About</a></li>
                            <li><a className="nav-link scrollto" href={'#services'}>Services</a></li>
                            <li><a className="nav-link scrollto" href={'#faq'}>FAQs</a></li>
                            <li><a className="nav-link scrollto" href={'#contact'}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;