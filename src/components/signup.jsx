import React, { Component } from "react";
import "../css/Login.css";
import logoUrl from "../logo.png";

class Signup extends Component {
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
                  <input
                    type="text"
                    name=""
                    className="form-control input_user m-2"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    name=""
                    className="form-control input_user m-2"
                    placeholder="Last name"
                  />
                </div>
                <div className="input-group mb-2">
                  <input
                    type="email"
                    name=""
                    className="form-control input_user m-2"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group mb-2">
                  <input
                    type="password"
                    name=""
                    className="form-control input_pass m-2"
                    placeholder="password"
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="button" name="button" className="btn login_btn">
                    Signup
                  </button>
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
