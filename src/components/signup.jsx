import React, { Component } from "react";
import "../css/Login.css";
import logoUrl from "../logo.png";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = { redirect: null };

  onSignup = () => {
    let userInfo = {
      fname: this.refs.fname.value,
      lname: this.refs.lname.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    };

    fetch("http://127.0.0.1:3006/api/user/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.message == null) {
          this.setState({ message: "New account created" });
          setTimeout(() => {
            this.setState({ redirect: "/" });
          }, 1000);
        } else {
          if (res.message != "Invalid request") {
            this.setState({ message: res.message });
          } else {
            this.setState({ message: "Invalid data" });
          }
        }
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
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
                  <input
                    type="text"
                    name=""
                    className="form-control input_user m-2"
                    placeholder="First name"
                    ref="fname"
                  />
                  <input
                    type="text"
                    name=""
                    className="form-control input_user m-2"
                    placeholder="Last name"
                    ref="lname"
                  />
                </div>
                <div className="input-group mb-2">
                  <input
                    type="email"
                    name=""
                    className="form-control input_user m-2"
                    placeholder="Email"
                    ref="email"
                  />
                </div>
                <div className="input-group mb-2">
                  <input
                    type="password"
                    name=""
                    className="form-control input_pass m-2"
                    placeholder="password"
                    ref="password"
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button
                    type="button"
                    name="button"
                    className="btn login_btn"
                    onClick={this.onSignup}
                  >
                    Signup
                  </button>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <p>{this.state.message}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
