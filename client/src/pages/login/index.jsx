import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Login.css";
import axios from "axios";



export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);

    fetch("https://rimorin-dental-clinic-server.herokuapp.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://rimorin-dental-clinic"
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login Successful");
          window.localStorage.setItem("token", data.data); //Session handling item, Access all login data with window.localStorage.getItem('token')
          window.location.href = "./dashboard";
          console.log(data.data);
        } else {
          alert("Email or Password is incorrect");
          window.location.href = "./login";
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
              <img src={"./img/hero-img.png"} />
            </div>

            {/* ======= Login Form ======= */}
            <div className="center">
              <p id="titleform">
                <h3>Rimorin Dental Clinic</h3>
              </p>
              <p id="sub">Log in with your account</p>
              <div className="txt_field">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
              </div>
              <div className="txt_field">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  required
                />
              </div>
              <div className="checkbox">
                <label htmlFor="checkbox">
                  <input type="checkbox" name="checkbox" /> Remember me{" "}
                </label>
              </div>
              <div className="pass">Forgot Password?</div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="signup_link">
                Don't have an account?
                <br />
                <a href="/signup">Sign Up</a>
              </div>
            </div>
          </section>
        </div>
      </form>
    );
  }
}
// function LoginPage() {

// }

// export default LoginPage;