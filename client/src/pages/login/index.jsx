import React, { Component } from 'react';
import "../../styles/login-signup.css";
// import LoadingOverlay from 'react-loading-overlay';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      logged: null,
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    fetch("http://localhost:3001/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://rimorin-dental-clinic.herokuapp.com"
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          delete data.user['password'];
          window.localStorage.setItem("current-session", JSON.stringify(data.user)); //Session handling item, Access all login data with JSON.parse(window.localStorage.getItem('current-session')))
          window.localStorage.setItem("logged", true);

          if (JSON.parse(window.localStorage.getItem("current-session"))['user_role_id'] === 1) {
            window.location.href = "/patient";
          } if (JSON.parse(window.localStorage.getItem("current-session"))['user_role_id'] === 2) {
            window.location.href = "/secretary";
          } if (JSON.parse(window.localStorage.getItem("current-session"))['user_role_id'] === 3) {
            window.location.href = "/dentist";
          } if (JSON.parse(window.localStorage.getItem("current-session"))['user_role_id'] === 4) {
            window.location.href = "/admin";
          }

        } else {
          window.localStorage.setItem("logged", false);
          this.setState({ logged: false });
        }
      });
  }

  render() {
    return (
        <>
            <form className='auth-inner my-5' onSubmit={this.handleSubmit}>
              <div className='titleform'>
                  <a href="/">Rimorin Dental Clinic</a>
              </div>
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

              {this.state.logged || this.state.logged != null ? <div class="alert alert-danger">
                <strong>Error: Incorrect Username or Password.</strong> Please try again.
              </div> : ""}

              <div className="pass"> <a href='/auth/forgot-password'> Forgot Password? </a></div>
              
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="signup_link">
                Don't have an account? <a href="/auth/signup">Sign Up</a>
              </div>

            </form>
      </>

    );
  }
};

