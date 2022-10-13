// import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import {DataTable} from "simple-datatables";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import SignupMain from "./pages/SignUpMain";
import DashboardPage from "./pages/dashboard-page";
import DentistCalendar from "./pages/dentist-calendar";
import EPrescription from "./pages/EPrescription";
import AppointmentPage from "./pages/appointments";
import PatientRecords from "./pages/patientrecords";
import UserProfile from "./pages/userprofile";
import Calendar from "./pages/userprofile";

function App() {
  /**
   * Easy selector helper function
   */
   const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  let selectTopbar = select("#topbar");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
        if (selectTopbar) {
          selectTopbar.classList.add("topbar-scrolled");
        }
      } else {
        selectHeader.classList.remove("header-scrolled");
        if (selectTopbar) {
          selectTopbar.classList.remove("topbar-scrolled");
        }
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
    }

  /**
   * Scroll with ofset on links with a class name .scrollto
   */
   on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
  
  // Animation on Scroll (AOS)
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  // Pages
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupMain />} />
          <Route path="/dashboardpage" element={<DashboardPage />} />
          <Route path="/appointments" element={<AppointmentPage/>} />
          <Route path="/dentistcalendar" element={<DentistCalendar/>} />
          <Route path="/patientrecords" element={<PatientRecords />} />
          <Route path="/eprescription" element={<EPrescription />} />
          <Route path="/userprofile" element={<UserProfile />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
