// import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./pages/landing-page";

// fontawesome
// library.add(fab) 

function App() {
  // AOS animation
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
    }, []);

  // Pages
  return(
    <div className="App" >
      < LandingPage />

    </div>
    )

}

export default App;
