import React, { Component } from "react";
import Cards from "./cards";
import Navbar from "./navbar";

class Gallery extends Component {
  state = {};

  async componentDidMount() {
    await fetch("http://127.0.0.1:3006/api/guestbook/", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          this.setState({ message: data.message });
        } else this.setState({ data });
      });

    await fetch("http://127.0.0.1:3006/api/user/me", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data.data });
      });
  }

  render() {
    if (this.state.data && this.state.user) {
      return (
        <div>
          <Navbar user={this.state.user} />
          <Cards cardData={this.state.data} />
        </div>
      );
    } else {
      return <h1>{this.state.message}</h1>;
    }
  }
}

export default Gallery;
