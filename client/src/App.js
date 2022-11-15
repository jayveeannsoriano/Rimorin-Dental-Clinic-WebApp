import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// third party
import AOS from "aos";
import 'aos/dist/aos.css';

// styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// routing
import Routes from './routes';

function App() {

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

  return (
    <> 
      <Routes />
      <Outlet />
    </>
  );
}

export default App;
