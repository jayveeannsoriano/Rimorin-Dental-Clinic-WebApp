import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Footer from "../components/footer.jsx";
import style from '../styles/Login.css';

function LoginPage() {
    return (
        <div className="LoginPage">
            <title>Rimorin Dental Clinic</title>
            {/* ======= Header ======= */}
            <header id="headerlogin" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <a href="/">Rimorin Dental Clinic</a>
                    </h1>
                </div>
            </header>
            
            {/* Hero Image AND Login Form */}
            <section id="herologin" className="d-flex align-items-center">
                {/* Hero's Image Login  */}
                <div className="img_hero_login">
                <img src={'./img/hero-img.png'} />
                </div>

                {/* ======= Login Form ======= */}
                <div className="center">
                    <p id="titleform"><h3>Rimorin Dental Clinic</h3></p>
                    <p id="sub">Log in with your account</p>
                    <form method="post">
                        <div className="txt_field">
                            <label>Username</label>
                            <input type="text" required="" />
                        </div>
                        <div className="txt_field">
                            <label>Password</label>
                            <input type="password" required="" />
                        </div>
                        <div className="checkbox">
                            <label htmlFor="checkbox">
                                <input type="checkbox" name="checkbox" /> Remember me{" "}
                            </label>
                        </div>
                        <div className="pass">Forgot Password?</div>
                        <input type="submit" defaultValue="Login" />
                        <div className="signup_link">
                            Don't have an account?
                            <br />
                            <a href="/signup">Sign Up</a>
                        </div>
                    </form>
                </div>
            </section>
            {/* ======= Footer ======= */}
            <Footer/>
        </div>
    );
}

export default LoginPage;