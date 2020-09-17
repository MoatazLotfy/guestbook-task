import React, { Component } from "react";
import Message from "./message";
import Messages from "./messages";
import Navbar from "./navbar";

class Guestbook extends Component {
  state = { card: this.props.location.state.card };

  async componentDidMount() {
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

  handleDelete = (messageId) => {
    fetch("http://127.0.0.1:3006/api/messages/" + messageId, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => {
        const messages = this.state.card.messages.filter(
          (c) => c._id != messageId
        );
        this.setState({ messages });
        console.log(res);
      });
  };

  render() {
    if (this.state.card && this.state.user) {
      return (
        <div>
          <Navbar user={this.state.user} />{" "}
          <Messages card={this.state.card} onDelete={this.handleDelete} />
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }
}

export default Guestbook;
