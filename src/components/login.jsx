import React, { Component } from "react";
import "../css/Login.css";
import logoUrl from "../logo.png";
class Login extends Component {
  onLogin = () => {
    let userInfo = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };

    fetch("http://127.0.0.1:3006/api/auth/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.message == null) {
          this.setState({ message: "Logged in" });
        } else {
          this.setState({ message: res.message });
        }
      });
  };

  state = {};
  render() {
    return (
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={logoUrl} className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                    className="form-control input_user"
                    placeholder="Email"
                    ref="email"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    className="form-control input_pass"
                    placeholder="password"
                    ref="password"
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button
                    type="button"
                    name="button"
                    className="btn login_btn"
                    onClick={this.onLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-center mt-3 login_container">
              <p>{this.state.message}</p>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a href="#" className="ml-2">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
