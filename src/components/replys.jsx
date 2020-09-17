import React, { Component } from "react";
import Reply from "./reply";

class Replys extends Component {
  state = { reply: this.props.reply };
  render() {
    return <Reply reply={this.state.reply} />;
  }
}

export default Replys;
