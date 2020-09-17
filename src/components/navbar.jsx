import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../css/nav.css";

class Navbar extends Component {
  onLogout = () => {
    this.setState({ redirect: "/" });
    localStorage.clear();
  };
  onAddGuestbook = () => {
    fetch("http://127.0.0.1:3006/api/guestbook/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: "",
    })
      .then((r) => r.json())
      .then((res) => {
        console.log(JSON.stringify(res));
        if (res.message == null) {
          this.setState({ data: res });
        } else {
          if (res.message != "Invalid request") {
            this.setState({ message: res.message });
          }
        }
      });
  };
  state = {};
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <nav className="navbar navbar-expand-sm   navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li>
              <button type="button" className="btn btn-outline-success">
                {`${this.props.user.fname}  ${this.props.user.lname}`}
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./gallery">
                Gallery <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <button className="btn btn-primary" onClick={this.onAddGuestbook}>
                {" "}
                Add my guestbook
              </button>
            </li>
            <li className="nav-item">
              <h5 className="badge badge-danger">{this.state.message}</h5>
            </li>
          </ul>
          <div className="social-part">
            <button
              className="btn btn-secondary"
              aria-hidden="true"
              onClick={this.onLogout}
            >
              Logout{" "}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
