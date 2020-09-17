import React, { Component } from "react";
import Message from "./message";
import Messages from "./messages";

class Guestbook extends Component {
  state = { card: this.props.location.state.card };
  render() {
    // console.log("whatt guestbook " + this.);
    if (this.state.card) {
      return <Messages card={this.state.card} />;
    } else {
      return <h1>Loading....</h1>;
    }
  }
}

export default Guestbook;
