import React, { Component } from "react";
import Message from "./message";
import Messages from "./messages";

class Guestbook extends Component {
  state = { card: this.props.location.state.card };
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
    if (this.state.card) {
      return <Messages card={this.state.card} onDelete={this.handleDelete} />;
    } else {
      return <h1>Loading....</h1>;
    }
  }
}

export default Guestbook;
