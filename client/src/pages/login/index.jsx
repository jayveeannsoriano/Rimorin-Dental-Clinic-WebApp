import React, {Component} from 'react';
import "../../styles/login-signup.css";

export default class Login extends Component {
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
        fetch("https://rimorin-dental-clinic/login-user", {
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
            if (data.status === "ok") {
              delete data.user['password'];  
              alert("Login Successful");
              window.localStorage.setItem("current-session", JSON.stringify(data.user)); //Session handling item, Access all login data with window.localStorage.getItem('token')
              window.location.href = "./dashboard";
            } else {
              alert("Email or Password is incorrect");
              window.location.href = "./login";
            }
          });
      }
render(){    
  return (
    <div className="auth-wrapper">
      {/* ======= Header ======= */}
      <header id="headerlogin" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="/">Rimorin Dental Clinic</a>
          </h1>
        </div>
      </header>

      {/* ======= IMAGE ======= */}
      <div className="image-banner">
        <img src={"./img/hero-img.png"} />
      </div>

      {/* ======= FORM ======= */}
      <form className="auth-inner" onSubmit={this.handleSubmit}>
        <p id="titleform">
          <h4>Rimorin Dental Clinic</h4>
        </p>
        
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />
        </div>

            <div className="mb-3">
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
      </form>
    </div>
  );
}};

