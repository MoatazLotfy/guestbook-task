import React, { Component } from "react";
import "../css/Login.css";
import logoUrl from "../logo.png";
import { Redirect, Route, Link, Switch } from "react-router-dom";
import Signup from "./signup";
import Gallery from "./gallery";
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

          localStorage.clear();
          localStorage.setItem("token", res.data);
          setTimeout(() => {
            this.setState({ redirect: "/gallery" });
          }, 1000);
        } else {
          this.setState({ message: res.message });
        }
      });
  };

  state = {};
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Switch>
        <Route component={Signup} path="/signup" />
        <Route component={Gallery} path="/gallery" />
        <Route component={Login} exact path="/">
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
                    <Link className="ml-2" to="/signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    );
  }
}

export default Login;
